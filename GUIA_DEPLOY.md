# 🚀 GUIA COMPLETO DE DEPLOY - HEIGHTECH (INDUSTRIAL CLIMBERS)

## 📋 ÍNDICE

1. [Pré-requisitos](#pré-requisitos)
2. [Preparação do Ambiente](#preparação-do-ambiente)
3. [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
4. [Variáveis de Ambiente](#variáveis-de-ambiente)
5. [Deploy em Produção](#deploy-em-produção)
6. [Pós-Deploy](#pós-deploy)
7. [Monitoramento](#monitoramento)
8. [Troubleshooting](#troubleshooting)

---

## ✅ PRÉ-REQUISITOS

Antes de iniciar o deploy, certifique-se de ter:

- [ ] Node.js 18+ instalado
- [ ] Conta em serviço de hospedagem (Vercel, Netlify, Railway, etc.)
- [ ] Banco de dados PostgreSQL (Supabase, Neon, Railway, etc.)
- [ ] Domínio registrado (opcional)
- [ ] Certificado SSL (normalmente fornecido automaticamente)
- [ ] Acesso aos repositórios Git

---

## 🔧 PREPARAÇÃO DO AMBIENTE

### 1. Verificar se Tudo Funciona Localmente

```bash
# Instalar dependências
npm install

# Executar migrações do banco
npm run db:push

# Iniciar em modo desenvolvimento
npm run dev

# Acessar: http://localhost:5000
```

### 2. Executar Testes (se houver)

```bash
# Rodar testes
npm test

# Build de produção (testar)
npm run build
```

### 3. Limpar Arquivos Desnecessários

```bash
# Remover node_modules se necessário
rm -rf node_modules
npm install

# Limpar cache
npm cache clean --force
```

---

## 🗄️ CONFIGURAÇÃO DO BANCO DE DADOS

### Opção 1: Supabase (Recomendado - Gratuito)

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta e um novo projeto
3. Vá em Settings → Database
4. Copie a **Connection String** (formato: `postgresql://...`)

### Opção 2: Neon (Serverless PostgreSQL)

1. Acesse [neon.tech](https://neon.tech)
2. Crie projeto gratuito
3. Copie a string de conexão

### Opção 3: Railway (All-in-One)

1. Acesse [railway.app](https://railway.app)
2. Crie projeto + PostgreSQL
3. Copie as credenciais

### Executar Migrações no Banco de Produção

```bash
# Configurar DATABASE_URL
export DATABASE_URL="postgresql://user:password@host:5432/database"

# Rodar migrations
npm run db:push

# Verificar se tabelas foram criadas
# - contacts
# - quotes
# - analytics_events
```

---

## 🔐 VARIÁVEIS DE AMBIENTE

### Arquivo `.env` (LOCAL)

```env
# Banco de Dados
DATABASE_URL="postgresql://user:password@localhost:5432/heightech"

# Servidor
PORT=5000
NODE_ENV=development

# URLs
VITE_API_URL=http://localhost:5000

# Dashboard (ALTERE A SENHA!)
VITE_DASHBOARD_PASSWORD=sua_senha_segura_aqui

# Email (Opcional - para formulários)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contato@heightech.com.br
SMTP_PASS=sua_senha_aqui

# Analytics (Opcional)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Arquivo `.env.production` (PRODUÇÃO)

```env
# Banco de Dados de Produção
DATABASE_URL="postgresql://user:password@db.supabase.co:5432/postgres"

# Servidor
PORT=5000
NODE_ENV=production

# URLs
VITE_API_URL=https://seu-dominio.com

# Dashboard (SENHA FORTE!)
VITE_DASHBOARD_PASSWORD=sua_senha_segura_aqui_123!@#

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contato@heightech.com.br
SMTP_PASS=senha_de_aplicativo_gmail

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

**IMPORTANTE:** Nunca comite o arquivo `.env` no Git!

---

## 🌐 DEPLOY EM PRODUÇÃO

### Opção 1: Vercel (Recomendado para Frontend + API)

#### Passo 1: Preparar o Projeto

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login
```

#### Passo 2: Configurar vercel.json

Crie o arquivo `vercel.json` na raiz:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/dist/**",
      "use": "@vercel/static"
    },
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

#### Passo 3: Deploy

```bash
# Build de produção
npm run build

# Deploy
vercel --prod
```

#### Passo 4: Configurar Variáveis de Ambiente

No dashboard da Vercel:
1. Vá em Settings → Environment Variables
2. Adicione todas as variáveis do `.env.production`
3. Salve e faça redeploy

---

### Opção 2: Railway (Full Stack + Database)

#### Passo 1: Conectar Repositório

1. Acesse [railway.app](https://railway.app)
2. Clique em "New Project"
3. Selecione "Deploy from GitHub repo"
4. Escolha seu repositório

#### Passo 2: Adicionar PostgreSQL

1. Clique em "+ New"
2. Selecione "Database" → "PostgreSQL"
3. Aguarde provisionamento
4. Copie a `DATABASE_URL` gerada

#### Passo 3: Configurar Variáveis

1. Vá em seu projeto → Variables
2. Adicione todas as variáveis de ambiente
3. Salve

#### Passo 4: Deploy

Railway faz deploy automático a cada push no GitHub!

```bash
# Fazer alterações
git add .
git commit -m "Deploy para produção"
git push origin main

# Railway detecta e faz deploy automaticamente
```

---

### Opção 3: Render (Alternativa Gratuita)

#### Passo 1: Criar Web Service

1. Acesse [render.com](https://render.com)
2. New → Web Service
3. Conecte seu repositório GitHub

#### Passo 2: Configurar Build

```
Build Command: npm install && npm run build
Start Command: npm start
```

#### Passo 3: Adicionar PostgreSQL

1. New → PostgreSQL
2. Copie a `Internal Database URL`
3. Adicione como variável `DATABASE_URL`

#### Passo 4: Deploy

Render faz deploy automático no push!

---

## 📦 SCRIPTS PACKAGE.JSON

Certifique-se de ter esses scripts:

```json
{
  "scripts": {
    "dev": "node server/index.ts",
    "build": "vite build",
    "start": "NODE_ENV=production node server/index.ts",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio"
  }
}
```

---

## ✅ PÓS-DEPLOY

### 1. Verificar Site no Ar

- [ ] Acesse o domínio/URL de produção
- [ ] Teste a página inicial
- [ ] Verifique todos os 16 serviços
- [ ] Teste o blog (16 posts)
- [ ] Acesse `/dashboard` (com senha)
- [ ] Teste formulários de contato e orçamento

### 2. Configurar Domínio Personalizado

#### Na Vercel:
1. Settings → Domains
2. Adicione seu domínio (ex: heightech.com.br)
3. Configure DNS conforme instruções

#### Registros DNS Típicos:
```
Type: A
Name: @
Value: 76.76.21.21 (IP da Vercel)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Configurar SSL/HTTPS

- Vercel, Railway e Render provêm SSL automático
- Aguarde propagação (até 24h)
- Force HTTPS em produção

### 4. Configurar Google Analytics

```html
<!-- Adicionar em client/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. Configurar Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione propriedade (seu domínio)
3. Verifique propriedade
4. Envie sitemap: `https://seu-dominio.com/sitemap.xml`

### 6. Testar Performance

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Meta: Score > 90

---

## 📊 MONITORAMENTO

### 1. Logs de Servidor

#### Vercel:
```bash
vercel logs <deployment-url>
```

#### Railway:
Dashboard → Deployments → View Logs

### 2. Monitoramento de Erros (Opcional)

#### Sentry (Recomendado)

```bash
npm install @sentry/node @sentry/react
```

Configurar em `server/index.ts`:

```typescript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://xxx@sentry.io/xxx",
  environment: process.env.NODE_ENV,
});
```

### 3. Uptime Monitoring

Serviços gratuitos:
- [UptimeRobot](https://uptimerobot.com) - 50 monitores grátis
- [Pingdom](https://www.pingdom.com)
- [BetterUptime](https://betteruptime.com)

Configurar ping a cada 5 minutos para:
- Homepage: `https://seu-dominio.com`
- API Health: `https://seu-dominio.com/api/health`

---

## 🔧 TROUBLESHOOTING

### Problema: Site não carrega

**Solução:**
```bash
# Verificar logs
vercel logs

# Verificar se build passou
npm run build

# Testar localmente em produção
NODE_ENV=production npm start
```

### Problema: Banco de dados não conecta

**Solução:**
```bash
# Verificar DATABASE_URL
echo $DATABASE_URL

# Testar conexão
psql $DATABASE_URL

# Rodar migrations novamente
npm run db:push
```

### Problema: Dashboard não aceita senha

**Solução:**
```typescript
// Verificar em client/src/pages/dashboard.tsx linha 28
const DASHBOARD_PASSWORD = "heightech2024"; // Deve corresponder ao .env

// Limpar localStorage
localStorage.removeItem("dashboard_auth");
```

### Problema: Formulários não enviam

**Solução:**
1. Verificar se API está respondendo: `GET /api/health`
2. Checar logs do servidor
3. Verificar CORS se API em domínio diferente
4. Testar endpoint diretamente:

```bash
curl -X POST https://seu-dominio.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@teste.com","message":"Teste"}'
```

### Problema: Imagens não carregam

**Solução:**
- Verificar URLs das imagens (Unsplash deve funcionar)
- Checar se OptimizedImage está funcionando
- Verificar console do browser por erros

### Problema: 404 em rotas do blog

**Solução:**
```bash
# Verificar se rota está registrada em App.tsx
# Linha 63: <Route path="/blog/:id" component={BlogPost} />

# Limpar cache e rebuild
rm -rf dist
npm run build
```

---

## 📱 CHECKLIST PRÉ-LANÇAMENTO

### Configuração
- [ ] Domínio configurado e SSL ativo
- [ ] Todas variáveis de ambiente configuradas
- [ ] Banco de dados de produção funcionando
- [ ] Migrations executadas
- [ ] Senha do dashboard alterada (não usar padrão!)

### Funcionalidades
- [ ] Todos os 16 serviços carregam
- [ ] Blog com 16 posts funcionando
- [ ] Dashboard acessível via `/dashboard`
- [ ] Formulário de contato salva no banco
- [ ] Formulário de orçamento funciona
- [ ] WhatsApp button abre com número correto
- [ ] Redes sociais nos links corretos

### SEO
- [ ] Sitemap.xml acessível (`/sitemap.xml`)
- [ ] Robots.txt configurado (`/robots.txt`)
- [ ] Google Analytics instalado
- [ ] Search Console configurado
- [ ] Meta tags em todas as páginas
- [ ] Open Graph tags configuradas

### Performance
- [ ] PageSpeed Score > 80
- [ ] Imagens otimizadas
- [ ] Lazy loading funcionando
- [ ] Cache configurado
- [ ] Sem erros no console

### Segurança
- [ ] HTTPS ativo
- [ ] Dashboard protegido por senha
- [ ] Inputs sanitizados (XSS prevention)
- [ ] CORS configurado se necessário
- [ ] Rate limiting (se houver)

---

## 🎯 PRÓXIMOS PASSOS PÓS-DEPLOY

1. **Marketing**
   - Anunciar nas redes sociais
   - Enviar para clientes existentes
   - Adicionar ao Google Meu Negócio

2. **SEO Contínuo**
   - Publicar mais posts no blog
   - Backlinks de sites relevantes
   - Atualizar conteúdo regularmente

3. **Melhorias**
   - Adicionar mais fotos de projetos reais
   - Implementar newsletter funcional
   - Adicionar depoimentos de clientes
   - Criar vídeos dos serviços

4. **Monitoramento**
   - Revisar analytics semanalmente
   - Ajustar estratégia conforme dados
   - Corrigir problemas reportados

---

## 📞 SUPORTE

Em caso de problemas:

1. **Documentação:**
   - [Vercel Docs](https://vercel.com/docs)
   - [Railway Docs](https://docs.railway.app)
   - [Vite Docs](https://vitejs.dev)

2. **Comunidade:**
   - Discord do Vercel
   - Stack Overflow
   - GitHub Issues

---

## 📝 COMANDOS ÚTEIS

```bash
# Ver status do deployment
vercel ls

# Rollback para versão anterior
vercel rollback <deployment-url>

# Logs em tempo real
vercel logs --follow

# Testar build localmente
npm run build && npm start

# Verificar variáveis de ambiente
vercel env ls

# Adicionar variável
vercel env add DATABASE_URL production
```

---

## ✅ DEPLOY CONCLUÍDO!

Parabéns! Seu site está no ar 🎉

**URL de Produção:** `https://seu-dominio.com`
**Dashboard:** `https://seu-dominio.com/dashboard`
**Senha:** [a que você configurou]

---

**Última atualização:** 2025-11-19
**Versão:** 1.0.0
**Status:** ✅ Pronto para produção
