import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertQuoteSchema } from "@shared/schema";
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
    <loc>${baseUrl}/servicos/soldas-reparos</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/poda-arvores</loc>
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

  const httpServer = createServer(app);
  return httpServer;
}
