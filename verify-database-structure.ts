import "dotenv/config";
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function verifyDatabaseStructure() {
  console.log("🔍 VERIFICAÇÃO COMPLETA DA ESTRUTURA DO BANCO DE DADOS\n");
  console.log("=" .repeat(70));

  try {
    // 1. Verificar todas as tabelas
    console.log("\n📋 1. TABELAS NO BANCO DE DADOS:");
    console.log("-".repeat(70));
    const tablesResult = await pool.query(`
      SELECT table_name,
             (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = t.table_name) as column_count
      FROM information_schema.tables t
      WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);

    tablesResult.rows.forEach((row, index) => {
      console.log(`   ${index + 1}. ${row.table_name} (${row.column_count} colunas)`);
    });

    // 2. Verificar índices
    console.log("\n📊 2. ÍNDICES CRIADOS:");
    console.log("-".repeat(70));
    const indexesResult = await pool.query(`
      SELECT
        schemaname,
        tablename,
        indexname,
        indexdef
      FROM pg_indexes
      WHERE schemaname = 'public'
      ORDER BY tablename, indexname;
    `);

    if (indexesResult.rows.length > 0) {
      let currentTable = '';
      indexesResult.rows.forEach((row) => {
        if (row.tablename !== currentTable) {
          console.log(`\n   Tabela: ${row.tablename}`);
          currentTable = row.tablename;
        }
        console.log(`      - ${row.indexname}`);
      });
    } else {
      console.log("   ⚠️  Nenhum índice encontrado além dos índices padrão");
    }

    // 3. Verificar constraints (chaves únicas, foreign keys, etc)
    console.log("\n🔒 3. CONSTRAINTS (Restrições):");
    console.log("-".repeat(70));
    const constraintsResult = await pool.query(`
      SELECT
        tc.table_name,
        tc.constraint_name,
        tc.constraint_type
      FROM information_schema.table_constraints tc
      WHERE tc.table_schema = 'public'
      ORDER BY tc.table_name, tc.constraint_type;
    `);

    let currentTable = '';
    constraintsResult.rows.forEach((row) => {
      if (row.table_name !== currentTable) {
        console.log(`\n   Tabela: ${row.table_name}`);
        currentTable = row.table_name;
      }
      const type = {
        'PRIMARY KEY': '🔑 Primary Key',
        'UNIQUE': '🎯 Unique',
        'FOREIGN KEY': '🔗 Foreign Key',
        'CHECK': '✓ Check'
      }[row.constraint_type] || row.constraint_type;
      console.log(`      ${type}: ${row.constraint_name}`);
    });

    // 4. Verificar detalhes de cada tabela
    console.log("\n📝 4. ESTRUTURA DETALHADA DAS TABELAS:");
    console.log("-".repeat(70));

    for (const table of tablesResult.rows) {
      const columnsResult = await pool.query(`
        SELECT
          column_name,
          data_type,
          is_nullable,
          column_default
        FROM information_schema.columns
        WHERE table_name = $1
        ORDER BY ordinal_position;
      `, [table.table_name]);

      console.log(`\n   ${table.table_name.toUpperCase()}:`);
      columnsResult.rows.forEach((col) => {
        const nullable = col.is_nullable === 'YES' ? '(nullable)' : '(NOT NULL)';
        const defaultVal = col.column_default ? ` DEFAULT ${col.column_default}` : '';
        console.log(`      - ${col.column_name}: ${col.data_type} ${nullable}${defaultVal}`);
      });
    }

    // 5. Recomendações
    console.log("\n💡 5. ANÁLISE E RECOMENDAÇÕES:");
    console.log("-".repeat(70));

    // Verificar se índices importantes existem
    const recommendations = [];

    // Verificar índice para blog_posts.slug (crucial para busca rápida)
    const slugIndex = indexesResult.rows.find(r =>
      r.tablename === 'blog_posts' && r.indexname.includes('slug')
    );
    if (slugIndex) {
      console.log("   ✅ Índice único em blog_posts.slug encontrado (ÓTIMO)");
    } else {
      console.log("   ⚠️  Índice em blog_posts.slug pode estar faltando");
      recommendations.push("Criar índice em blog_posts.slug para melhor performance");
    }

    // Verificar índice para geoVisits.ipHash
    const ipHashIndex = indexesResult.rows.find(r =>
      r.tablename === 'geo_visits' && r.indexname.includes('ip')
    );
    if (!ipHashIndex) {
      console.log("   💡 RECOMENDAÇÃO: Criar índice em geo_visits(ip_hash, page_url) para deduplicação rápida");
      recommendations.push("CREATE INDEX idx_geo_visits_dedup ON geo_visits(ip_hash, page_url, created_at);");
    }

    // Verificar índice para analyticsEvents.sessionId
    const sessionIndex = indexesResult.rows.find(r =>
      r.tablename === 'analytics_events' && r.indexname.includes('session')
    );
    if (!sessionIndex) {
      console.log("   💡 RECOMENDAÇÃO: Criar índice em analytics_events.session_id para queries mais rápidas");
      recommendations.push("CREATE INDEX idx_analytics_session ON analytics_events(session_id);");
    }

    // Verificar índice para data de criação em tabelas importantes
    const blogDateIndex = indexesResult.rows.find(r =>
      r.tablename === 'blog_posts' && (r.indexname.includes('published') || r.indexname.includes('created'))
    );
    if (!blogDateIndex) {
      console.log("   💡 RECOMENDAÇÃO: Criar índice em blog_posts.published_at para listagem mais rápida");
      recommendations.push("CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC) WHERE published = true;");
    }

    // 6. Verificar tamanho das tabelas
    console.log("\n📦 6. TAMANHO DAS TABELAS:");
    console.log("-".repeat(70));
    const sizeResult = await pool.query(`
      SELECT
        relname as table_name,
        pg_size_pretty(pg_total_relation_size(relid)) as total_size,
        pg_size_pretty(pg_relation_size(relid)) as table_size,
        pg_size_pretty(pg_total_relation_size(relid) - pg_relation_size(relid)) as indexes_size
      FROM pg_catalog.pg_statio_user_tables
      ORDER BY pg_total_relation_size(relid) DESC;
    `);

    sizeResult.rows.forEach((row) => {
      console.log(`   ${row.table_name}:`);
      console.log(`      Tabela: ${row.table_size} | Índices: ${row.indexes_size} | Total: ${row.total_size}`);
    });

    // 7. Status final
    console.log("\n✅ 7. STATUS FINAL:");
    console.log("=".repeat(70));
    console.log(`   Total de Tabelas: ${tablesResult.rows.length}/6 esperadas`);
    console.log(`   Total de Índices: ${indexesResult.rows.length}`);
    console.log(`   Total de Constraints: ${constraintsResult.rows.length}`);

    if (recommendations.length > 0) {
      console.log("\n📋 SCRIPTS RECOMENDADOS PARA EXECUTAR:");
      console.log("-".repeat(70));
      recommendations.forEach((rec, index) => {
        console.log(`\n${index + 1}. ${rec}`);
      });
    } else {
      console.log("\n   🎉 Banco de dados está completo e otimizado!");
    }

    console.log("\n" + "=".repeat(70));
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Erro ao verificar estrutura:", error);
    await pool.end();
    process.exit(1);
  }
}

verifyDatabaseStructure();
