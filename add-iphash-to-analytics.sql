-- Adicionar campo ip_hash à tabela analytics_events para deduplicação de visualizações
-- Migration: Add ipHash field to analytics_events table for page view deduplication

-- Adicionar coluna ip_hash se não existir
ALTER TABLE analytics_events
ADD COLUMN IF NOT EXISTS ip_hash TEXT;

-- Criar índice para melhorar performance das queries de deduplicação
CREATE INDEX IF NOT EXISTS idx_analytics_events_deduplication
ON analytics_events(ip_hash, page, created_at)
WHERE event = 'page_view';

-- Comentário na coluna para documentação
COMMENT ON COLUMN analytics_events.ip_hash IS 'IP anonimizado (hash SHA-256) - LGPD compliant';

-- Log de confirmação
DO $$
BEGIN
  RAISE NOTICE 'Migration concluída: Campo ip_hash adicionado à tabela analytics_events';
  RAISE NOTICE 'Índice de deduplicação criado para melhorar performance';
END $$;
