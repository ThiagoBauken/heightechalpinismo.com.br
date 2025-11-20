import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export function serveStatic(app: Express) {
  // Em produção, usar process.cwd() para garantir caminho correto após bundle
  const distPath = path.resolve(process.cwd(), "dist", "public");

  // Logs de debug para produção
  console.log("[PRODUCTION] Current working directory:", process.cwd());
  console.log("[PRODUCTION] Static files path:", distPath);
  console.log("[PRODUCTION] Directory exists:", fs.existsSync(distPath));

  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log("[PRODUCTION] Files in dist/public:", files.slice(0, 10));
  }

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
