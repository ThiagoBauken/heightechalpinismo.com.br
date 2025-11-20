import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertQuoteSchema, insertBlogPostSchema, insertGeoVisitSchema, users } from "@shared/schema";
import { getDashboardMetrics } from "./analytics";
import { z } from "zod";
import { getClientIP, getGeoLocation, getDeviceInfo, anonymizeIP } from "./services/geo-service";
import {
  authenticateJWT,
  generateToken,
  type AuthRequest
} from "./middleware/auth";
import {
  apiLimiter,
  contactLimiter,
  authLimiter,
  blogCreateLimiter,
  analyticsLimiter
} from "./middleware/rate-limit";
import {
  validateContact,
  validateQuote,
  validateBlogPost,
  validateLogin
} from "./middleware/validation";
import {
  sendContactNotification,
  sendQuoteNotification,
  sendContactConfirmation,
  sendQuoteConfirmation
} from "./services/email-service";
import bcrypt from "bcryptjs";
import logger from "./logger";
import { eq } from "drizzle-orm";
import { db } from "./db";
import { upload, validateFileUpload } from "./middleware/upload";
import { sendCSVResponse } from "./utils/csv-export";

export async function registerRoutes(app: Express): Promise<Server> {

  // =============================================================================
  // AUTH ENDPOINTS
  // =============================================================================

  // Login endpoint
  app.post("/api/auth/login", authLimiter, validateLogin, async (req: AuthRequest, res: Response) => {
    try {
      const { username, password } = req.body;

      // Buscar usuário no banco de dados
      const user = await db
        .select()
        .from(users)
        .where(eq(users.username, username))
        .limit(1);

      if (!user || user.length === 0) {
        logger.warn('Login attempt with invalid username', { username });
        return res.status(401).json({
          error: 'Usuário ou senha inválidos'
        });
      }

      // Verificar senha
      const validPassword = await bcrypt.compare(password, user[0].password);
      if (!validPassword) {
        logger.warn('Login attempt with invalid password', { username });
        return res.status(401).json({
          error: 'Usuário ou senha inválidos'
        });
      }

      // Gerar token JWT
      const token = generateToken({
        id: user[0].id,
        username: user[0].username
      });

      logger.info('User logged in successfully', {
        userId: user[0].id,
        username: user[0].username
      });

      res.json({
        success: true,
        token,
        user: {
          id: user[0].id,
          username: user[0].username
        }
      });
    } catch (error) {
      logger.error('Login error', error);
      res.status(500).json({
        error: 'Erro interno do servidor'
      });
    }
  });

  // Verificar token endpoint (para validar se o usuário ainda está autenticado)
  app.get("/api/auth/verify", authenticateJWT, async (req: AuthRequest, res: Response) => {
    res.json({
      success: true,
      user: req.user
    });
  });

  // =============================================================================
  // CONTACT & QUOTE ENDPOINTS
  // =============================================================================

  // Contact form submission
  app.post("/api/contact", contactLimiter, validateContact, async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      // Enviar notificações por email (não bloqueia a resposta)
      sendContactNotification(validatedData).catch(err =>
        logger.error('Error sending contact notification', err)
      );
      sendContactConfirmation(validatedData.email, validatedData.name).catch(err =>
        logger.error('Error sending contact confirmation', err)
      );

      logger.info('Contact form submitted', {
        name: validatedData.name,
        service: validatedData.service
      });

      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors
        });
      } else {
        logger.error('Error creating contact', error);
        res.status(500).json({
          success: false,
          message: "Erro interno do servidor"
        });
      }
    }
  });

  // Quote request submission
  app.post("/api/quote", contactLimiter, validateQuote, async (req: Request, res: Response) => {
    try {
      const validatedData = insertQuoteSchema.parse(req.body);
      const quote = await storage.createQuote(validatedData);

      // Enviar notificações por email (não bloqueia a resposta)
      // Converter campos opcionais de null para undefined para compatibilidade com o tipo esperado
      sendQuoteNotification({
        ...validatedData,
        buildingType: validatedData.buildingType ?? undefined,
        buildingHeight: validatedData.buildingHeight ?? undefined,
        urgency: validatedData.urgency ?? undefined
      }).catch(err =>
        logger.error('Error sending quote notification', err)
      );
      sendQuoteConfirmation(validatedData.email, validatedData.name).catch(err =>
        logger.error('Error sending quote confirmation', err)
      );

      logger.info('Quote request submitted', {
        name: validatedData.name,
        service: validatedData.service
      });

      res.json({ success: true, quote });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors
        });
      } else {
        logger.error('Error creating quote', error);
        res.status(500).json({
          success: false,
          message: "Erro interno do servidor"
        });
      }
    }
  });

  // Get contacts (admin only - protected)
  app.get("/api/contacts", authenticateJWT, async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      logger.error('Error fetching contacts', error);
      res.status(500).json({
        success: false,
        message: "Erro ao buscar contatos"
      });
    }
  });

  // Get quotes (admin only - protected)
  app.get("/api/quotes", authenticateJWT, async (req, res) => {
    try {
      const quotes = await storage.getQuotes();
      res.json(quotes);
    } catch (error) {
      logger.error('Error fetching quotes', error);
      res.status(500).json({
        success: false,
        message: "Erro ao buscar orçamentos"
      });
    }
  });

  // =============================================================================
  // METRICS ENDPOINTS (Protected)
  // =============================================================================

  app.get("/api/metrics/contacts", authenticateJWT, async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      const today = new Date();
      const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

      const recentContacts = contacts.filter(contact =>
        contact.createdAt >= thirtyDaysAgo
      );

      res.json({
        total: contacts.length,
        recent: recentContacts.length,
        byService: contacts.reduce((acc, contact) => {
          acc[contact.service] = (acc[contact.service] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        byCityState: contacts.reduce((acc, contact) => {
          acc[contact.city] = (acc[contact.city] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      });
    } catch (error) {
      logger.error('Error fetching contact metrics', error);
      res.status(500).json({
        success: false,
        message: "Erro ao buscar métricas de contatos"
      });
    }
  });

  app.get("/api/metrics/quotes", authenticateJWT, async (req, res) => {
    try {
      const quotes = await storage.getQuotes();
      const today = new Date();
      const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

      const recentQuotes = quotes.filter(quote =>
        quote.createdAt >= thirtyDaysAgo
      );

      res.json({
        total: quotes.length,
        recent: recentQuotes.length,
        byService: quotes.reduce((acc, quote) => {
          acc[quote.service] = (acc[quote.service] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        byUrgency: quotes.reduce((acc, quote) => {
          if (quote.urgency) {
            acc[quote.urgency] = (acc[quote.urgency] || 0) + 1;
          }
          return acc;
        }, {} as Record<string, number>),
        byBuildingType: quotes.reduce((acc, quote) => {
          if (quote.buildingType) {
            acc[quote.buildingType] = (acc[quote.buildingType] || 0) + 1;
          }
          return acc;
        }, {} as Record<string, number>)
      });
    } catch (error) {
      logger.error('Error fetching quote metrics', error);
      res.status(500).json({
        success: false,
        message: "Erro ao buscar métricas de orçamentos"
      });
    }
  });

  // =============================================================================
  // SEO ENDPOINTS
  // =============================================================================

  // Sitemap.xml para SEO
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = process.env.VITE_SITE_URL || "https://heightech.com.br";
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/limpeza-fachadas</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/pintura-predial</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/manutencao-predial</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/impermeabilizacao</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/inspecao-tecnica</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/instalacao-equipamentos</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/projetos</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contato</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Robots.txt para SEO
  app.get("/robots.txt", (req, res) => {
    const baseUrl = process.env.VITE_SITE_URL || "https://heightech.com.br";
    const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow sensitive areas
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard
`;

    res.header('Content-Type', 'text/plain');
    res.send(robotsTxt);
  });

  // =============================================================================
  // ANALYTICS ENDPOINTS
  // =============================================================================

  // Analytics tracking endpoint
  app.post("/api/analytics", analyticsLimiter, async (req, res) => {
    try {
      const { events, sessionId } = req.body;

      if (!events || !Array.isArray(events) || events.length === 0) {
        return res.status(400).json({ success: false, message: "No events provided" });
      }

      // Obter IP do cliente e anonimizar (LGPD compliant)
      const clientIP = getClientIP(req);
      const ipHash = anonymizeIP(clientIP);

      // Função helper para detectar tipo de device do user agent
      const getDeviceType = (userAgent: string | undefined): string => {
        if (!userAgent) return "unknown";
        const ua = userAgent.toLowerCase();
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
          return "tablet";
        }
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
          return "mobile";
        }
        return "desktop";
      };

      // Preparar eventos para salvar no banco
      const analyticsEvents = events.map((e: any) => ({
        eventId: e.id,
        event: e.event,
        page: e.page,
        timestamp: new Date(e.timestamp),
        sessionId: sessionId || e.sessionId,
        userAgent: e.userAgent,
        referrer: e.referrer,
        deviceType: getDeviceType(e.userAgent),
        ipHash, // Adicionar IP hash anonimizado
        data: e.data || null
      }));

      // 🔄 DEDUPLICAÇÃO: Filtrar page_view duplicados (mesmo IP + página em 30min)
      const eventsToSave = [];
      const duplicatesRemoved = [];

      for (const event of analyticsEvents) {
        // Verificar duplicatas apenas para page_view
        if (event.event === 'page_view') {
          try {
            const isDuplicate = await storage.checkRecentPageView(
              ipHash,
              event.page,
              30 // 30 minutos
            );

            if (isDuplicate) {
              duplicatesRemoved.push({ page: event.page });
              logger.debug('Duplicate page_view removed', { page: event.page, ipHash });
              continue; // Pular evento duplicado
            }
          } catch (error: any) {
            // Se a coluna ip_hash não existir (migration não executada), continuar sem deduplicação
            if (error?.message?.includes('ip_hash') || error?.message?.includes('does not exist')) {
              logger.warn('Column ip_hash does not exist - skipping deduplication. Run migration: npx tsx migrate-add-iphash.ts');
              // Continuar sem deduplicação até migration ser executada
            } else {
              // Re-throw outros erros
              throw error;
            }
          }
        }

        eventsToSave.push(event);
      }

      // Salvar apenas eventos não-duplicados no banco de dados
      if (eventsToSave.length > 0) {
        await storage.createAnalyticsEvents(eventsToSave);
      }

      logger.info('Analytics events processed', {
        sessionId,
        totalReceived: analyticsEvents.length,
        saved: eventsToSave.length,
        duplicatesRemoved: duplicatesRemoved.length
      });

      res.json({
        success: true,
        processed: eventsToSave.length,
        duplicatesRemoved: duplicatesRemoved.length
      });
    } catch (error) {
      logger.error('Error processing analytics', error);
      res.status(500).json({ success: false, message: "Erro interno" });
    }
  });

  // Dashboard de analytics (protected)
  app.get("/api/analytics/dashboard", authenticateJWT, async (req, res) => {
    try {
      const daysAgo = req.query.days ? parseInt(req.query.days as string) : 30;
      const dashboardData = await getDashboardMetrics(daysAgo);
      res.json(dashboardData);
    } catch (error) {
      logger.error('Error fetching dashboard data', error);
      res.status(500).json({ success: false, message: "Erro ao buscar dados" });
    }
  });

  // =============================================================================
  // FILE UPLOAD ENDPOINTS
  // =============================================================================

  // Upload de imagem (protegido - requer autenticação)
  app.post("/api/upload/image", authenticateJWT, upload.single('image'), validateFileUpload, async (req: AuthRequest, res) => {
    try {
      const file = req.file!;

      // URL pública da imagem
      const imageUrl = `/uploads/${file.filename}`;

      logger.info('Image uploaded successfully', {
        filename: file.filename,
        size: file.size,
        user: req.user?.username,
      });

      res.json({
        success: true,
        imageUrl,
        filename: file.filename,
        size: file.size,
      });
    } catch (error) {
      logger.error('Error uploading image', error);
      res.status(500).json({
        error: 'Erro ao fazer upload da imagem',
      });
    }
  });

  // =============================================================================
  // DATA EXPORT ENDPOINTS (CSV)
  // =============================================================================

  // Exportar contatos para CSV (protegido)
  app.get("/api/export/contacts.csv", authenticateJWT, async (req: AuthRequest, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      const csvData = contacts.map(c => ({
        ID: c.id,
        Nome: c.name,
        Email: c.email,
        Telefone: c.phone,
        Serviço: c.service,
        Cidade: c.city,
        Mensagem: c.message,
        Data: c.createdAt,
      }));

      sendCSVResponse(res, 'contatos.csv', csvData);

      logger.info('Contacts exported to CSV', {
        user: req.user?.username,
        count: contacts.length,
      });
    } catch (error) {
      logger.error('Error exporting contacts', error);
      res.status(500).json({
        error: 'Erro ao exportar contatos',
      });
    }
  });

  // Exportar orçamentos para CSV (protegido)
  app.get("/api/export/quotes.csv", authenticateJWT, async (req: AuthRequest, res: Response) => {
    try {
      const quotes = await storage.getQuotes();
      const csvData = quotes.map(q => ({
        ID: q.id,
        Nome: q.name,
        Email: q.email,
        Telefone: q.phone,
        Serviço: q.service,
        Cidade: q.city,
        Descrição: q.projectDescription,
        'Tipo de Prédio': q.buildingType || '',
        'Altura': q.buildingHeight || '',
        'Urgência': q.urgency || '',
        Data: q.createdAt,
      }));

      sendCSVResponse(res, 'orcamentos.csv', csvData);

      logger.info('Quotes exported to CSV', {
        user: req.user?.username,
        count: quotes.length,
      });
    } catch (error) {
      logger.error('Error exporting quotes', error);
      res.status(500).json({
        error: 'Erro ao exportar orçamentos',
      });
    }
  });

  // Exportar eventos de analytics para CSV (protegido)
  app.get("/api/export/analytics.csv", authenticateJWT, async (req: AuthRequest, res: Response) => {
    try {
      const daysAgo = req.query.days ? parseInt(req.query.days as string) : 30;
      const events = await storage.getAnalyticsEvents(daysAgo);

      const csvData = events.map(e => ({
        ID: e.id,
        'ID do Evento': e.eventId,
        Evento: e.event,
        Página: e.page || '',
        'Tipo de Dispositivo': e.deviceType || '',
        'User Agent': e.userAgent || '',
        Referrer: e.referrer || '',
        'Session ID': e.sessionId || '',
        Data: e.timestamp,
      }));

      sendCSVResponse(res, `analytics-${daysAgo}days.csv`, csvData);

      logger.info('Analytics exported to CSV', {
        user: req.user?.username,
        count: events.length,
        days: daysAgo,
      });
    } catch (error) {
      logger.error('Error exporting analytics', error);
      res.status(500).json({
        error: 'Erro ao exportar analytics',
      });
    }
  });

  // =============================================================================
  // BLOG API ENDPOINTS (CMS) - All Protected
  // =============================================================================

  // Listar todos os posts do blog (público para posts publicados, admin para todos)
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const showAll = req.query.all === "true";
      const posts = await storage.getBlogPosts(!showAll);
      res.json({ success: true, posts });
    } catch (error) {
      logger.error('Error fetching blog posts', error);
      res.status(500).json({ success: false, message: "Erro ao buscar posts" });
    }
  });

  // Buscar post por slug (público)
  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);

      if (!post) {
        return res.status(404).json({ success: false, message: "Post não encontrado" });
      }

      // Se o post não está publicado, só retornar se for admin
      if (!post.published) {
        return res.status(403).json({ success: false, message: "Post não publicado" });
      }

      res.json({ success: true, post });
    } catch (error) {
      logger.error('Error fetching blog post', error);
      res.status(500).json({ success: false, message: "Erro ao buscar post" });
    }
  });

  // Criar novo post (PROTEGIDO - requer autenticação)
  app.post("/api/blog/posts", authenticateJWT, blogCreateLimiter, validateBlogPost, async (req: AuthRequest, res: Response) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);

      logger.info('Blog post created', {
        title: post.title,
        author: req.user?.username
      });

      res.status(201).json({ success: true, post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors
        });
      } else {
        logger.error('Error creating blog post', error);
        res.status(500).json({ success: false, message: "Erro ao criar post" });
      }
    }
  });

  // Atualizar post existente (PROTEGIDO - requer autenticação)
  app.put("/api/blog/posts/:id", authenticateJWT, validateBlogPost, async (req: AuthRequest, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "ID inválido" });
      }

      const updateData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(id, updateData);

      if (!post) {
        return res.status(404).json({ success: false, message: "Post não encontrado" });
      }

      logger.info('Blog post updated', {
        id,
        title: post.title,
        author: req.user?.username
      });

      res.json({ success: true, post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors
        });
      } else {
        logger.error('Error updating blog post', error);
        res.status(500).json({ success: false, message: "Erro ao atualizar post" });
      }
    }
  });

  // Deletar post (PROTEGIDO - requer autenticação)
  app.delete("/api/blog/posts/:id", authenticateJWT, async (req: AuthRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "ID inválido" });
      }

      const deleted = await storage.deleteBlogPost(id);

      if (!deleted) {
        return res.status(404).json({ success: false, message: "Post não encontrado" });
      }

      logger.info('Blog post deleted', {
        id,
        author: req.user?.username
      });

      res.json({ success: true, message: "Post deletado com sucesso" });
    } catch (error) {
      logger.error('Error deleting blog post', error);
      res.status(500).json({ success: false, message: "Erro ao deletar post" });
    }
  });

  // =============================================================================
  // GEOLOCATION TRACKING API ENDPOINTS
  // =============================================================================

  // Rastrear visita com geolocalização e detecção de dispositivo
  app.post("/api/geo/track", apiLimiter, async (req, res) => {
    try {
      const { pageUrl, sessionId } = req.body;

      if (!pageUrl || !sessionId) {
        return res.status(400).json({
          success: false,
          message: "pageUrl e sessionId são obrigatórios"
        });
      }

      const clientIP = getClientIP(req);
      const ipHash = anonymizeIP(clientIP);

      // Verificar se já existe visita deste IP nesta página nas últimas 24h
      const hasRecentVisit = await storage.checkRecentVisit(ipHash, pageUrl, 24);

      if (hasRecentVisit) {
        return res.json({
          success: true,
          duplicate: true,
          message: "Visita já registrada nas últimas 24h"
        });
      }

      const geo = await getGeoLocation(clientIP);
      const userAgent = req.headers["user-agent"] || "";
      const device = getDeviceInfo(userAgent);

      const visitData = {
        ipHash,
        country: geo?.country || null,
        countryCode: geo?.countryCode || null,
        region: geo?.region || null,
        regionName: geo?.regionName || null,
        city: geo?.city || null,
        lat: geo?.lat?.toString() || null,
        lon: geo?.lon?.toString() || null,
        timezone: geo?.timezone || null,
        isp: geo?.isp || null,
        deviceType: device.deviceType,
        os: device.os,
        browser: device.browser,
        pageUrl,
        sessionId
      };

      const validatedData = insertGeoVisitSchema.parse(visitData);
      const visit = await storage.createGeoVisit(validatedData);

      logger.info('Geolocation tracked', {
        location: `${visit.city}, ${visit.region}`,
        device: `${visit.deviceType} - ${visit.os}`,
        page: pageUrl
      });

      res.json({ success: true, visit, duplicate: false });
    } catch (error) {
      logger.error('Error tracking geolocation', error);
      res.status(500).json({
        success: false,
        message: "Erro ao processar rastreamento"
      });
    }
  });

  // Buscar estatísticas de geolocalização (protected)
  app.get("/api/geo/stats", authenticateJWT, async (req, res) => {
    try {
      const daysAgo = req.query.days ? parseInt(req.query.days as string) : 30;

      if (isNaN(daysAgo) || daysAgo < 1 || daysAgo > 365) {
        return res.status(400).json({
          success: false,
          message: "Parâmetro 'days' deve ser entre 1 e 365"
        });
      }

      const stats = await storage.getGeoStats(daysAgo);

      res.json({
        success: true,
        period: `${daysAgo} dias`,
        data: stats
      });
    } catch (error) {
      logger.error('Error fetching geo stats', error);
      res.status(500).json({
        success: false,
        message: "Erro ao buscar estatísticas"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
