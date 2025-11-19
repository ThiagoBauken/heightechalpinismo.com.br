# Dashboard Analytics - Guia de Configuração

## 📊 O que foi implementado

✅ **Sistema completo de Analytics com PostgreSQL:**
- Tabela `analytics_events` para armazenar todos os eventos
- Tabela `blog_posts` para sistema de blog dinâmico (CMS)
- Salvamento automático de eventos no banco de dados
- Dashboard com métricas REAIS (sem dados mockados)
- Queries otimizadas para agregação de dados

✅ **Métricas do Dashboard:**
- Total de visualizações de página
- Cliques no WhatsApp e Instagram
- Submissões de formulários
- Taxa de conversão
- Duração média de sessão
- Taxa de rejeição (bounce rate)
- Breakdown por dispositivo (Mobile/Desktop/Tablet)
- Interesse por serviço
- Top 5 páginas mais visitadas

✅ **Sistema de Storage:**
- Migrado de MemStorage (memória) para DatabaseStorage (PostgreSQL)
- Dados persistem entre reinicializações do servidor
- Suporte para contacts, quotes, analytics e blog posts

---

## 🚀 Próximos Passos para Ativar

### 1. Configurar PostgreSQL

Você precisa de um banco de dados PostgreSQL. Escolha uma das opções:

#### Opção A: Neon Database (Recomendado - Grátis)
1. Acesse [neon.tech](https://neon.tech)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie a **Connection String** (formato: `postgresql://user:password@host/database`)

#### Opção B: Easypanel PostgreSQL
1. No Easypanel, crie um serviço PostgreSQL
2. Obtenha a connection string do serviço

#### Opção C: PostgreSQL Local
1. Instale PostgreSQL na sua máquina
2. Crie um banco de dados: `createdb industrial_climbers`
3. Use a connection string: `postgresql://localhost:5432/industrial_climbers`

---

### 2. Atualizar o arquivo `.env`

Edite o arquivo `.env` e atualize a `DATABASE_URL`:

```env
# Substituir com sua connection string real
DATABASE_URL=postgresql://user:password@host:5432/database_name

# Exemplo com Neon:
# DATABASE_URL=postgresql://neondb_owner:xxxxx@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require

# Exemplo local:
# DATABASE_URL=postgresql://postgres:password@localhost:5432/industrial_climbers
```

---

### 3. Executar as Migrations

Com o banco configurado, execute o comando para criar as tabelas:

```bash
npm run db:push
```

Isso criará as seguintes tabelas:
- `users` - Usuários admin
- `contacts` - Contatos do formulário simples
- `quotes` - Pedidos de orçamento detalhados
- `analytics_events` - Eventos de analytics ⭐ NOVO
- `blog_posts` - Posts do blog ⭐ NOVO

---

### 4. Testar o Sistema

#### 4.1. Iniciar o servidor

```bash
npm run dev
```

#### 4.2. Verificar que o banco está conectado

No console, você deve ver:
```
✅ Analytics Events Saved: { sessionId: '...', eventCount: X }
```

#### 4.3. Acessar o Dashboard

Abra no navegador:
```
http://localhost:5000/dashboard
```

**Inicialmente**, o dashboard mostrará zeros porque não há dados ainda.

#### 4.4. Gerar alguns dados de teste

1. Navegue pelo site (homepage, serviços, contato)
2. Clique no botão WhatsApp
3. Preencha um formulário
4. Aguarde 30 segundos (tempo de envio dos eventos em lote)
5. Recarregue o dashboard

Você deve ver os números aumentarem!

---

## 🔍 Verificar se está funcionando

### Opção 1: Verificar eventos no banco de dados

Se você tiver acesso ao psql ou outro cliente PostgreSQL:

```sql
-- Ver todos os eventos
SELECT * FROM analytics_events ORDER BY created_at DESC LIMIT 10;

-- Contar eventos por tipo
SELECT event, COUNT(*)
FROM analytics_events
GROUP BY event
ORDER BY COUNT(*) DESC;

-- Ver breakdown por device
SELECT device_type, COUNT(*)
FROM analytics_events
WHERE event = 'page_view'
GROUP BY device_type;
```

### Opção 2: Ver logs do servidor

O servidor agora loga quando eventos são salvos:

```
✅ Analytics Events Saved: { sessionId: 'abc123', eventCount: 5 }
```

---

## 📈 Endpoint do Dashboard

O dashboard agora suporta filtro por período:

```
GET /api/analytics/dashboard?days=7   // Últimos 7 dias
GET /api/analytics/dashboard?days=30  // Últimos 30 dias (padrão)
GET /api/analytics/dashboard?days=90  // Últimos 90 dias
```

Você pode modificar o frontend do dashboard para adicionar filtros de período.

---

## 🐛 Troubleshooting

### Erro: "relation 'analytics_events' does not exist"

**Solução:** Execute `npm run db:push` para criar as tabelas.

### Erro: "ECONNREFUSED" ou "Connection refused"

**Solução:**
- Verifique se o `DATABASE_URL` está correto
- Verifique se o banco PostgreSQL está rodando
- Se usar Neon, verifique se a connection string inclui `?sslmode=require`

### Dashboard mostra zeros

**Possíveis causas:**
1. Ainda não há eventos no banco (navegue pelo site e aguarde 30s)
2. Os eventos estão sendo coletados mas não salvos (verifique logs do servidor)
3. Erro nas queries (verifique console do servidor para erros)

### Eventos não estão sendo salvos

**Verificações:**
1. Abra o DevTools → Network → Filter por "analytics"
2. Verifique se a requisição POST `/api/analytics` retorna `{ success: true }`
3. Verifique os logs do servidor para mensagens de erro

---

## 📊 Sistema de Analytics

### Como funciona

1. **Frontend** (`client/src/lib/analytics-tracker.ts`):
   - Coleta eventos enquanto o usuário navega
   - Agrupa eventos em lotes
   - Envia a cada 30 segundos para o backend

2. **Backend** (`server/routes.ts`):
   - Recebe eventos via `POST /api/analytics`
   - Extrai informações (device type, user agent)
   - Salva no banco de dados via `storage.createAnalyticsEvents()`

3. **Agregação** (`server/analytics.ts`):
   - Calcula métricas em tempo real
   - Queries otimizadas com GROUP BY e agregações
   - Cache pode ser adicionado futuramente

4. **Dashboard** (`client/src/pages/dashboard.tsx`):
   - Faz polling a cada 30 segundos
   - Exibe métricas com gráficos (Recharts)
   - Atualiza automaticamente

---

## 🎯 Próximas Melhorias Sugeridas

### Analytics Avançado
- [ ] Adicionar filtros de data no dashboard (7/30/90 dias)
- [ ] Exportar dados para CSV/Excel
- [ ] Gráficos de tendência ao longo do tempo
- [ ] Funil de conversão (page view → serviço → contato)
- [ ] Heatmaps de cliques
- [ ] Tracking de UTM parameters para campanhas

### Blog Dinâmico (CMS)
- [ ] Interface de administração para criar/editar posts
- [ ] Sistema de autenticação para admin
- [ ] Upload de imagens para posts
- [ ] Sistema de tags e categorias
- [ ] Comentários nos posts
- [ ] SEO automático por post

### Performance
- [ ] Cache de métricas do dashboard (Redis ou em memória)
- [ ] Índices no banco de dados para queries mais rápidas
- [ ] Agregações pré-calculadas (tabelas de resumo)
- [ ] Paginação de eventos antigos

---

## ✅ Checklist de Ativação

- [ ] Criar conta no Neon Database (ou configurar PostgreSQL)
- [ ] Atualizar `DATABASE_URL` no `.env`
- [ ] Executar `npm run db:push`
- [ ] Reiniciar servidor (`npm run dev`)
- [ ] Navegar pelo site para gerar eventos
- [ ] Aguardar 30 segundos
- [ ] Acessar `/dashboard` e verificar métricas

---

## 📞 Suporte

Se encontrar problemas, verifique:
1. Logs do servidor (terminal onde roda `npm run dev`)
2. Console do navegador (F12 → Console)
3. Network tab (F12 → Network → Filter "analytics")
4. Conexão com o banco de dados (testar com `psql` ou cliente DB)

**Tudo implementado e pronto para uso!** 🎉
