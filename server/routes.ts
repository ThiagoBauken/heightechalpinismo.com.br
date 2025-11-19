import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertQuoteSchema, insertBlogPostSchema } from "@shared/schema";
import { getDashboardMetrics } from "./analytics";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Quote request submission
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteSchema.parse(req.body);
      const quote = await storage.createQuote(validatedData);
      res.json({ success: true, quote });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get contacts (admin)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar contatos" 
      });
    }
  });

  // Get quotes (admin)
  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getQuotes();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar orçamentos" 
      });
    }
  });

  // Analytics/Metrics endpoints for n8n automation
  app.get("/api/metrics/contacts", async (req, res) => {
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
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar métricas de contatos" 
      });
    }
  });

  app.get("/api/metrics/quotes", async (req, res) => {
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
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar métricas de orçamentos" 
      });
    }
  });

  // Sitemap.xml para SEO
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://heightech.com.br"; // Substitua pela URL real
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
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Robots.txt para SEO
  app.get("/robots.txt", (req, res) => {
    const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://heightech.com.br/sitemap.xml

# Disallow sensitive areas
Disallow: /api/
Disallow: /admin/
`;

    res.header('Content-Type', 'text/plain');
    res.send(robotsTxt);
  });

  // Analytics tracking endpoint
  app.post("/api/analytics", async (req, res) => {
    try {
      const { events, sessionId } = req.body;

      if (!events || !Array.isArray(events) || events.length === 0) {
        return res.status(400).json({ success: false, message: "No events provided" });
      }

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
        data: e.data || null
      }));

      // Salvar eventos no banco de dados
      await storage.createAnalyticsEvents(analyticsEvents);

      console.log('✅ Analytics Events Saved:', {
        sessionId,
        eventCount: analyticsEvents.length
      });

      res.json({ success: true, processed: analyticsEvents.length });
    } catch (error) {
      console.error('Erro ao processar analytics:', error);
      res.status(500).json({ success: false, message: "Erro interno" });
    }
  });

  // Dashboard de analytics (endpoint para visualizar métricas)
  app.get("/api/analytics/dashboard", async (req, res) => {
    try {
      // Buscar período dos query params (padrão: últimos 30 dias)
      const daysAgo = req.query.days ? parseInt(req.query.days as string) : 30;

      // Calcular métricas reais do banco de dados
      const dashboardData = await getDashboardMetrics(daysAgo);

      res.json(dashboardData);
    } catch (error) {
      console.error('Erro ao buscar dados do dashboard:', error);
      res.status(500).json({ success: false, message: "Erro ao buscar dados" });
    }
  });

  // =============================================================================
  // BLOG API ENDPOINTS (CMS)
  // =============================================================================

  // Listar todos os posts do blog
  app.get("/api/blog/posts", async (req, res) => {
    try {
      // Se tiver um query param "all=true", retorna todos (incluindo não publicados)
      // Caso contrário, retorna apenas publicados
      const showAll = req.query.all === "true";
      const posts = await storage.getBlogPosts(!showAll);

      res.json({ success: true, posts });
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      res.status(500).json({ success: false, message: "Erro ao buscar posts" });
    }
  });

  // Buscar post por slug
  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);

      if (!post) {
        return res.status(404).json({ success: false, message: "Post não encontrado" });
      }

      // Se o post não está publicado, só retornar se for admin (TODO: adicionar auth)
      if (!post.published) {
        return res.status(403).json({ success: false, message: "Post não publicado" });
      }

      res.json({ success: true, post });
    } catch (error) {
      console.error('Erro ao buscar post:', error);
      res.status(500).json({ success: false, message: "Erro ao buscar post" });
    }
  });

  // Criar novo post (requer autenticação - TODO)
  app.post("/api/blog/posts", async (req, res) => {
    try {
      // TODO: Adicionar verificação de autenticação aqui
      // if (!req.isAuthenticated()) {
      //   return res.status(401).json({ success: false, message: "Não autorizado" });
      // }

      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);

      console.log('✅ Novo post criado:', post.title);
      res.status(201).json({ success: true, post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors
        });
      } else {
        console.error('Erro ao criar post:', error);
        res.status(500).json({ success: false, message: "Erro ao criar post" });
      }
    }
  });

  // Atualizar post existente (requer autenticação - TODO)
  app.put("/api/blog/posts/:id", async (req, res) => {
    try {
      // TODO: Adicionar verificação de autenticação aqui
      // if (!req.isAuthenticated()) {
      //   return res.status(401).json({ success: false, message: "Não autorizado" });
      // }

      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "ID inválido" });
      }

      // Validar apenas os campos que estão sendo atualizados
      const updateData = insertBlogPostSchema.partial().parse(req.body);
      const post = await storage.updateBlogPost(id, updateData);

      if (!post) {
        return res.status(404).json({ success: false, message: "Post não encontrado" });
      }

      console.log('✅ Post atualizado:', post.title);
      res.json({ success: true, post });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Dados inválidos",
          errors: error.errors
        });
      } else {
        console.error('Erro ao atualizar post:', error);
        res.status(500).json({ success: false, message: "Erro ao atualizar post" });
      }
    }
  });

  // Deletar post (requer autenticação - TODO)
  app.delete("/api/blog/posts/:id", async (req, res) => {
    try {
      // TODO: Adicionar verificação de autenticação aqui
      // if (!req.isAuthenticated()) {
      //   return res.status(401).json({ success: false, message: "Não autorizado" });
      // }

      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "ID inválido" });
      }

      const deleted = await storage.deleteBlogPost(id);

      if (!deleted) {
        return res.status(404).json({ success: false, message: "Post não encontrado" });
      }

      console.log('✅ Post deletado:', id);
      res.json({ success: true, message: "Post deletado com sucesso" });
    } catch (error) {
      console.error('Erro ao deletar post:', error);
      res.status(500).json({ success: false, message: "Erro ao deletar post" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
