import { db } from "./server/db";
import { sql } from "drizzle-orm";

/**
 * Migration: Adicionar campo ip_hash à tabela analytics_events
 * Para deduplicação de visualizações de página por IP
 */

async function migrate() {
  try {
    console.log("🚀 Iniciando migration: Adicionar campo ip_hash...");

    // 1. Adicionar coluna ip_hash se não existir
    await db.execute(sql`
      ALTER TABLE analytics_events
      ADD COLUMN IF NOT EXISTS ip_hash TEXT
    `);
    console.log("✅ Coluna ip_hash adicionada");

    // 2. Criar índice para melhorar performance das queries de deduplicação
    await db.execute(sql`
      CREATE INDEX IF NOT EXISTS idx_analytics_events_deduplication
      ON analytics_events(ip_hash, page, created_at)
      WHERE event = 'page_view'
    `);
    console.log("✅ Índice de deduplicação criado");

    // 3. Adicionar comentário na coluna para documentação
    await db.execute(sql`
      COMMENT ON COLUMN analytics_events.ip_hash IS 'IP anonimizado (hash SHA-256) - LGPD compliant'
    `);
    console.log("✅ Comentário adicionado à coluna");

    console.log("\n🎉 Migration concluída com sucesso!");
    console.log("📊 Campo ip_hash adicionado à tabela analytics_events");
    console.log("⚡ Índice criado para otimizar queries de deduplicação");

    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao executar migration:", error);
    process.exit(1);
  }
}

migrate();
