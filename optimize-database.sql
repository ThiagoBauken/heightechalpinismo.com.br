-- ====================================================================
-- OTIMIZAÇÕES DO BANCO DE DADOS - Heightech Alpinismo
-- ====================================================================
-- Este script cria índices para melhorar a performance das queries
-- mais frequentes do sistema.
-- ====================================================================

-- 1. Índice composto para deduplicação de visitas geográficas
-- Melhora a performance da query de verificação de visitas duplicadas
-- Usado em: routes.ts - checkRecentVisit()
CREATE INDEX IF NOT EXISTS idx_geo_visits_dedup
ON geo_visits(ip_hash, page_url, created_at);

COMMENT ON INDEX idx_geo_visits_dedup IS
'Índice composto para otimizar verificação de visitas duplicadas nas últimas 24h';

-- 2. Índice para analytics por sessão
-- Melhora queries que filtram eventos por session_id
-- Usado em: análises de comportamento do usuário
CREATE INDEX IF NOT EXISTS idx_analytics_session
ON analytics_events(session_id);

COMMENT ON INDEX idx_analytics_session IS
'Índice para otimizar queries de analytics por sessão de usuário';

-- 3. Índice parcial para listagem de posts publicados
-- Melhora SIGNIFICATIVAMENTE a listagem de posts do blog na home
-- Índice parcial (apenas posts publicados) economiza espaço e é mais rápido
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at
ON blog_posts(published_at DESC)
WHERE published = true;

COMMENT ON INDEX idx_blog_posts_published_at IS
'Índice parcial para otimizar listagem de posts publicados ordenados por data';

-- 4. Índice adicional para category (BONUS)
-- Útil para filtrar posts por categoria
CREATE INDEX IF NOT EXISTS idx_blog_posts_category
ON blog_posts(category)
WHERE published = true;

COMMENT ON INDEX idx_blog_posts_category IS
'Índice para filtrar posts publicados por categoria';

-- 5. Índice para geo_visits por data (BONUS)
-- Útil para estatísticas geográficas por período
CREATE INDEX IF NOT EXISTS idx_geo_visits_created_at
ON geo_visits(created_at DESC);

COMMENT ON INDEX idx_geo_visits_created_at IS
'Índice para consultas de estatísticas geográficas por período';

-- ====================================================================
-- Verificar índices criados
-- ====================================================================
SELECT
  schemaname,
  tablename,
  indexname,
  pg_size_pretty(pg_relation_size(indexname::regclass)) as index_size
FROM pg_indexes
WHERE schemaname = 'public'
  AND indexname LIKE 'idx_%'
ORDER BY tablename, indexname;
