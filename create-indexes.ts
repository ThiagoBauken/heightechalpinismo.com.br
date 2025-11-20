import "dotenv/config";
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function createIndexes() {
  console.log("🚀 Criando índices de otimização...\n");

  const indexes = [
    {
      name: 'idx_geo_visits_dedup',
      sql: 'CREATE INDEX IF NOT EXISTS idx_geo_visits_dedup ON geo_visits(ip_hash, page_url, created_at)',
      description: 'Otimiza verificação de visitas duplicadas'
    },
    {
      name: 'idx_analytics_session',
      sql: 'CREATE INDEX IF NOT EXISTS idx_analytics_session ON analytics_events(session_id)',
      description: 'Otimiza queries de analytics por sessão'
    },
    {
      name: 'idx_blog_posts_published_at',
      sql: 'CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC) WHERE published = true',
      description: 'Otimiza listagem de posts publicados'
    },
    {
      name: 'idx_blog_posts_category',
      sql: 'CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category) WHERE published = true',
      description: 'Otimiza filtros por categoria'
    },
    {
      name: 'idx_geo_visits_created_at',
      sql: 'CREATE INDEX IF NOT EXISTS idx_geo_visits_created_at ON geo_visits(created_at DESC)',
      description: 'Otimiza estatísticas por período'
    }
  ];

  try {
    for (const index of indexes) {
      console.log(`Criando: ${index.name}`);
      console.log(`   Descrição: ${index.description}`);

      try {
        await pool.query(index.sql);
        console.log(`   ✅ Criado com sucesso\n`);
      } catch (error: any) {
        if (error.message.includes('already exists')) {
          console.log(`   ⏭️  Já existe\n`);
        } else {
          console.log(`   ❌ Erro: ${error.message}\n`);
        }
      }
    }

    // Verificar índices criados
    console.log("\n📊 Índices customizados no banco:");
    console.log("-".repeat(70));

    const result = await pool.query(`
      SELECT
        tablename,
        indexname,
        pg_size_pretty(pg_relation_size(indexname::regclass)) as size
      FROM pg_indexes
      WHERE schemaname = 'public'
        AND indexname LIKE 'idx_%'
      ORDER BY tablename, indexname;
    `);

    let currentTable = '';
    result.rows.forEach((row) => {
      if (row.tablename !== currentTable) {
        console.log(`\n${row.tablename}:`);
        currentTable = row.tablename;
      }
      console.log(`   - ${row.indexname} (${row.size})`);
    });

    console.log("\n✅ Otimização concluída!");
    console.log(`   Total de índices customizados: ${result.rows.length}`);

    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro:", error);
    await pool.end();
    process.exit(1);
  }
}

createIndexes();
