/**
 * Apply Database Migrations
 * Script para executar migrations SQL no banco de dados
 */

import { db } from "../db";
import { sql } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function applyMigrations() {
  console.log("🔧 Aplicando migrations ao banco de dados...\n");

  try {
    // 1. Migration: Adicionar ip_hash ao analytics_events
    console.log("📝 Migration 1: Adicionando campo ip_hash...");
    const migrationSQL = fs.readFileSync(
      path.join(__dirname, "..", "add-iphash-to-analytics.sql"),
      "utf-8"
    );

    await db.execute(sql.raw(migrationSQL));
    console.log("✅ Campo ip_hash adicionado com sucesso!\n");

    // Verificar se a coluna foi criada
    const result = await db.execute(sql`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_name = 'analytics_events'
      AND column_name = 'ip_hash'
    `);

    if (result.rows.length > 0) {
      console.log("✅ Verificação: Coluna ip_hash existe no banco de dados");
    } else {
      console.log("❌ Erro: Coluna ip_hash não foi criada");
    }

    console.log("\n🎉 Todas as migrations foram aplicadas com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao aplicar migrations:", error);
    process.exit(1);
  }
}

applyMigrations();
