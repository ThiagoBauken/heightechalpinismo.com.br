import "dotenv/config"; // Carregar variáveis de ambiente do .env
import { db } from "./server/db";
import { sql } from "drizzle-orm";

/**
 * Migration: Adicionar campo ip_hash à tabela analytics_events
 * Para deduplicação de visualizações de página por IP
 *
 * Como executar:
 * npm run migrate:add-iphash
 * ou
 * npx tsx migrate-add-iphash.ts
 */

async function migrate() {
  try {
    console.log("🚀 Iniciando migration: Adicionar campo ip_hash...");
    console.log(`📦 DATABASE_URL: ${process.env.DATABASE_URL ? '✅ Configurado' : '❌ Não configurado'}`);

    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL não está configurado no arquivo .env");
    }

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
    console.log("\n💡 Próximo passo: Reinicie o servidor para aplicar as mudanças");

    process.exit(0);
  } catch (error) {
    console.error("\n❌ Erro ao executar migration:", error);
    console.error("\n💡 Dica: Certifique-se de que:");
    console.error("   1. O arquivo .env contém DATABASE_URL");
    console.error("   2. O banco de dados está acessível");
    console.error("   3. A tabela analytics_events existe");
    process.exit(1);
  }
}

migrate();
