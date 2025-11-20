import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic, log } from "./static";

// Logs de inicialização para debug em produção
console.log("[STARTUP] ==========================================");
console.log("[STARTUP] NODE_ENV:", process.env.NODE_ENV);
console.log("[STARTUP] Current working directory:", process.cwd());
console.log("[STARTUP] Port:", process.env.PORT || "5000");
console.log("[STARTUP] ==========================================");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
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
    log(`serving on http://${host}:${port}`);
  });
})();
