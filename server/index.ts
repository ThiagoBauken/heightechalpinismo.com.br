import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import logger, { requestLogger } from "./logger";

// Logs de inicialização
logger.info("=========================================="  );
logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
logger.info(`Working directory: ${process.cwd()}`);
logger.info(`Port: ${process.env.PORT || "5000"}`);
logger.info("==========================================");

const app = express();

// Trust proxy - Necessário para rate limiting funcionar atrás de proxies (nginx, load balancers, etc)
app.set('trust proxy', true);

// Security middleware - Helmet (configurado para permitir recursos externos necessários)
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production' ? {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
        "https://googleads.g.doubleclick.net",
        "https://replit.com"
      ],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: [
        "'self'",
        "data:",
        "blob:",
        "https:",
        "http:",
        "https://i.ytimg.com",
        "https://images.unsplash.com",
        "https://www.google-analytics.com",
        "https://www.googletagmanager.com"
      ],
      frameSrc: [
        "'self'",
        "https://www.youtube.com",
        "https://www.youtube-nocookie.com"
      ],
      connectSrc: [
        "'self'",
        "https://www.google-analytics.com",
        "https://www.googletagmanager.com",
        "https://analytics.google.com",
        "https://googleads.g.doubleclick.net"
      ],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  } : false,
  crossOriginEmbedderPolicy: false,
}));

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
}));

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

// HTTP request logging with Winston
app.use(requestLogger);

(async () => {
  const server = await registerRoutes(app);

  // Global error handler
  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    logger.error('Unhandled error', {
      error: err.message,
      stack: err.stack,
      url: req.url,
      method: req.method,
    });

    res.status(status).json({
      error: message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "development") {
    // Import dinâmico para evitar bundling do Vite em produção
    // Usa string concatenation para esconder o import do bundler
    const viteModule = await import("./vite" + ".js");
    await viteModule.setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Serve both the API and the client on configured port
  // Default: 5000 (development), configurable via PORT env variable
  const port = parseInt(process.env.PORT || '5000');
  const host = process.platform === 'win32' ? 'localhost' : '0.0.0.0';

  server.listen(port, host, () => {
    logger.info(`🚀 Server running on http://${host}:${port}`);
    logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
})();
