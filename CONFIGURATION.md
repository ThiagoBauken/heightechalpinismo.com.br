# Guia de Configuração Final - Heightech Alpinismo

## Configurações OBRIGATÓRIAS antes do Deploy

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (copie do `.env.example`):

```bash
cp .env.example .env
```

Depois edite `.env` e preencha:

#### Banco de Dados
```env
DATABASE_URL=postgresql://user:pass@host:5432/database
```
→ Use a connection string fornecida pelo Easypanel

#### Session Secret
```env
SESSION_SECRET=abc123xyz789...
```
→ Gere com: `openssl rand -base64 32`

#### Informações da Empresa
```env
VITE_COMPANY_NAME=Heightech Alpinismo Industrial
VITE_COMPANY_EMAIL=contato@heightechalpinismo.com.br
VITE_COMPANY_PHONE=+55 47 3367-XXXX
VITE_WHATSAPP_NUMBER=5547999999999
```
→ **IMPORTANTE:** Substitua pelo telefone/WhatsApp real!

#### Endereço (para SEO Local)
```env
VITE_COMPANY_ADDRESS=Rua Exemplo, 123, Centro
VITE_COMPANY_CITY=Balneário Camboriú
VITE_COMPANY_STATE=Santa Catarina
VITE_COMPANY_ZIPCODE=88330-000
```
→ Use o endereço comercial real da empresa

---

## Configurações no Código

### 1. Atualizar Schema.org na Home

Edite: `client/src/pages/home.tsx`

Procure por `structuredData` e atualize:

```tsx
"telephone": "+55-47-XXXX-XXXX",  // ← Seu telefone real
"address": {
  "streetAddress": "Rua Real, 123",  // ← Endereço real
  // ...
},
"sameAs": [
  "https://www.facebook.com/heightech",  // ← Suas redes sociais
  "https://www.instagram.com/heightech"
]
```

### 2. Adicionar SEO em TODAS as Páginas de Serviço

Use o guia em [SEO_TEMPLATE.md](SEO_TEMPLATE.md)

**Páginas que precisam de SEO:**
- [ ] `anchor-points.tsx`
- [ ] `acm-installation.tsx`
- [ ] `glass-cleaning.tsx`
- [ ] `glass-restoration.tsx`
- [ ] `cargo-hoisting.tsx`
- [ ] `led-installation.tsx`
- [ ] `silo-cleaning.tsx`
- [ ] `building-painting.tsx`
- [ ] `building-maintenance.tsx`
- [ ] `waterproofing.tsx`
- [ ] `technical-inspection.tsx`
- [ ] `equipment-installation.tsx`

**Como fazer:**
1. Abra o arquivo da página
2. Importe: `import SEOHead from "@/components/shared/seo-head";`
3. Adicione `<SEOHead>` conforme template
4. Salve e teste

### 3. Configurar WhatsApp Button

Edite: `client/src/components/shared/whatsapp-button.tsx`

Atualize o número do WhatsApp:

```tsx
const phoneNumber = "5547999999999"; // ← Seu número com DDI + DDD
```

### 4. Configurar Formulário de Contato

Edite: `client/src/components/shared/quote-form.tsx`

Verifique se o email está correto ou configure backend para envio.

---

## Checklist Pré-Deploy

### Código
- [ ] Todas as variáveis em `.env` estão preenchidas
- [ ] Schema.org atualizado com dados reais (home.tsx)
- [ ] WhatsApp number configurado
- [ ] SEO adicionado em todas as páginas
- [ ] Logo e imagens da empresa adicionadas em `public/`
- [ ] Favicon atualizado

### Conteúdo
- [ ] Telefone e email reais em todo o site
- [ ] Endereço comercial válido
- [ ] Links de redes sociais funcionando
- [ ] Fotos de trabalhos reais (não apenas stock photos)

### SEO
- [ ] sitemap.xml atualizado com data atual
- [ ] robots.txt configurado
- [ ] Meta tags em todas as páginas

---

## Checklist Pós-Deploy

### Imediato (Dia 1)
- [ ] Site acessível em heightechalpinismo.com.br
- [ ] Testar formulário de contato
- [ ] Testar botão WhatsApp
- [ ] Verificar se todas as páginas carregam
- [ ] Testar em mobile

### Primeira Semana
- [ ] Cadastrar no Google Search Console
- [ ] Enviar sitemap.xml
- [ ] Criar Google Meu Negócio
- [ ] Adicionar endereço e fotos
- [ ] Cadastrar no Bing Webmaster Tools

### Primeiro Mês
- [ ] Validar Schema.org no Google Rich Results Test
- [ ] Verificar indexação das páginas
- [ ] Conseguir primeiras avaliações Google
- [ ] Publicar 2-3 posts no blog
- [ ] Adicionar Google Analytics (opcional)

---

## Arquivos Importantes

### Para Deploy
- `Dockerfile` - Configuração do container
- `.dockerignore` - Arquivos a ignorar no build
- `DEPLOY.md` - Guia completo de deploy no Easypanel

### Para SEO
- `SEO_GUIDE.md` - Guia completo de SEO
- `SEO_TEMPLATE.md` - Templates para adicionar SEO
- `public/sitemap.xml` - Mapa do site
- `public/robots.txt` - Configuração de crawlers

### Configuração
- `.env.example` - Template de variáveis de ambiente
- `CONFIGURATION.md` - Este arquivo

---

## Contatos e Suporte

### Ferramentas Úteis
- **Google Search Console:** https://search.google.com/search-console
- **Google Meu Negócio:** https://business.google.com
- **Bing Webmaster:** https://www.bing.com/webmasters
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev

### Para Gerar Secrets
```bash
# Session Secret
openssl rand -base64 32

# Password Hash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Perguntas Frequentes

### Onde adiciono o logo da empresa?
Coloque em `public/logo.png` e `public/og-image.jpg`

### Como adiciono fotos de projetos?
1. Otimize as imagens (max 500KB cada)
2. Coloque em `public/projects/`
3. Edite `client/src/components/home/project-gallery.tsx`

### Como edito o rodapé?
Edite `client/src/components/layout/footer.tsx`

### Como adiciono uma nova página de serviço?
1. Copie uma página existente de `client/src/pages/services/`
2. Atualize conteúdo e SEO
3. Adicione rota em `client/src/App.tsx`
4. Adicione card em `client/src/components/home/services-overview.tsx`
5. Atualize `public/sitemap.xml`

---

**Última atualização:** 14/01/2025
