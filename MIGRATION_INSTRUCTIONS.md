# Instruções de Migration - Deduplicação de Analytics

## 📋 Resumo das Alterações

Esta atualização implementa **deduplicação inteligente de visualizações de página** nos analytics para evitar múltiplas contagens do mesmo IP visualizando a mesma página.

## ✨ O que foi implementado

### 1. **Servidor (Backend)**
- ✅ Adicionado campo `ipHash` ao schema `analyticsEvents`
- ✅ Criada função `checkRecentPageView()` no storage
- ✅ Implementada deduplicação no endpoint `/api/analytics`
  - Verifica se o mesmo IP visualizou a mesma página nos últimos 30 minutos
  - Remove duplicatas antes de salvar no banco
  - Mantém compliance com LGPD usando hash SHA-256 do IP

### 2. **Cliente (Frontend)**
- ✅ Melhorado `analytics-tracker.ts`
  - Controle de páginas já rastreadas na sessão
  - Evita envio de múltiplos `page_view` para a mesma página

### 3. **Banco de Dados**
- ✅ Script SQL de migration criado: `add-iphash-to-analytics.sql`
- ✅ Script TypeScript de migration: `migrate-add-iphash.ts`

## 🚀 Como Executar a Migration

### Opção 1: Usando SQL direto (Recomendado para produção)

Se você tem acesso ao banco PostgreSQL:

```bash
psql $DATABASE_URL -f add-iphash-to-analytics.sql
```

### Opção 2: Usando o script TypeScript

```bash
# Certifique-se de que DATABASE_URL está configurado no .env
npx tsx migrate-add-iphash.ts
```

### Opção 3: Manualmente no console SQL

Execute os comandos SQL:

```sql
-- 1. Adicionar coluna ip_hash
ALTER TABLE analytics_events
ADD COLUMN IF NOT EXISTS ip_hash TEXT;

-- 2. Criar índice para performance
CREATE INDEX IF NOT EXISTS idx_analytics_events_deduplication
ON analytics_events(ip_hash, page, created_at)
WHERE event = 'page_view';

-- 3. Adicionar comentário
COMMENT ON COLUMN analytics_events.ip_hash IS 'IP anonimizado (hash SHA-256) - LGPD compliant';
```

## 🔍 Como Funciona a Deduplicação

### Servidor (Camada Principal)
1. Quando eventos de analytics chegam ao endpoint `/api/analytics`
2. O IP do cliente é extraído e convertido em hash SHA-256 (LGPD compliant)
3. Para cada evento `page_view`:
   - Verifica se existe registro do mesmo `ipHash` + `page` nos últimos **30 minutos**
   - Se existir → **evento duplicado é removido** (não salvo no banco)
   - Se não existir → evento é salvo normalmente

### Cliente (Camada Extra)
1. O `analytics-tracker` mantém um Set de páginas já rastreadas na sessão
2. Quando `trackPageView()` é chamado:
   - Verifica se página já está no Set
   - Se sim → **não envia** o evento
   - Se não → adiciona ao Set e envia o evento

## 📊 Resultados Esperados

Antes da correção:
```
IP: 192.168.1.1 → /servicos → 5 visualizações (duplicadas)
IP: 192.168.1.1 → /contato → 3 visualizações (duplicadas)
```

Depois da correção:
```
IP: hash123... → /servicos → 1 visualização (deduplicado)
IP: hash123... → /contato → 1 visualização (deduplicado)
```

## 🔐 Compliance LGPD

- ✅ IPs são **anonimizados** usando hash SHA-256
- ✅ Não armazenamos IPs reais no banco de dados
- ✅ Hash é unidirecional (não reversível)
- ✅ Permite deduplicação sem comprometer privacidade

## 🧪 Como Testar

1. Execute a migration
2. Reinicie o servidor
3. Abra o site em um navegador
4. Recarregue a mesma página várias vezes
5. Verifique o dashboard de analytics
6. **Resultado esperado**: Apenas 1 visualização registrada (ao invés de múltiplas)

## 📝 Arquivos Modificados

### Backend
- `server/routes.ts` - Endpoint de analytics com deduplicação
- `server/storage.ts` - Método `checkRecentPageView()`
- `shared/schema.ts` - Campo `ipHash` adicionado

### Frontend
- `client/src/lib/analytics-tracker.ts` - Controle de páginas rastreadas

### Migrations
- `add-iphash-to-analytics.sql` - SQL migration
- `migrate-add-iphash.ts` - TypeScript migration script

## ❓ FAQ

**P: O que acontece com eventos existentes sem ipHash?**
R: Eventos antigos continuam funcionando normalmente. O campo `ipHash` é opcional (nullable).

**P: A deduplicação afeta outros eventos (cliques, conversões)?**
R: Não, apenas eventos `page_view` são deduplicados. Outros eventos são salvos normalmente.

**P: Qual o período de deduplicação?**
R: 30 minutos. Se o mesmo IP visualizar a mesma página após 30min, será contado como nova visualização.

**P: Como alterar o período de deduplicação?**
R: Modifique o parâmetro em `server/routes.ts` linha 453:
```typescript
const isDuplicate = await storage.checkRecentPageView(
  ipHash,
  event.page,
  30 // Altere este valor (em minutos)
);
```

## 🎯 Próximos Passos

1. Execute a migration no banco de dados
2. Deploy do código atualizado
3. Monitore os logs para confirmar que duplicatas estão sendo removidas
4. Verifique o dashboard de analytics após alguns dias

## 🐛 Troubleshooting

Se encontrar problemas:

1. **Erro "ip_hash column does not exist"**
   - Execute a migration SQL novamente
   - Verifique se o índice foi criado: `\d analytics_events` no psql

2. **Ainda vejo duplicatas**
   - Verifique os logs do servidor
   - Confirme que `duplicatesRemoved` > 0 nos logs
   - Limpe cache do navegador

3. **Performance lenta**
   - Verifique se o índice foi criado corretamente
   - Execute: `EXPLAIN ANALYZE` nas queries de deduplicação
