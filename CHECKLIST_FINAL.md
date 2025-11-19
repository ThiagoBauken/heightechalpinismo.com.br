# ✅ CHECKLIST FINAL PRÉ-DEPLOY

## Dados Atualizados ✅

### Telefone/WhatsApp
- [x] WhatsApp button: **+55 47 9214-5961**
- [x] Footer: **(47) 9214-5961**
- [x] Schema.org Home: **+55 47 9214-5961**

### Redes Sociais
- [x] Facebook: https://www.facebook.com/heightechalpinismo
- [x] Instagram: https://www.instagram.com/heightechalpinismo
- [x] LinkedIn: https://www.linkedin.com/company/heightechalpinismo
- [x] YouTube: https://www.youtube.com/@heightechalpinismo

---

## ⚠️ AINDA PRECISA FAZER

### 1. Configurar Vídeo na Home (PRIORITÁRIO!)

**Opção A: YouTube (Recomendado)**
```tsx
// Abra: client/src/components/home/hero-section.tsx
// Linha 13, substitua:
youtubeId="ABC123XYZ"  // ← Cole o ID do seu vídeo do YouTube
```

**Opção B: Vídeo Local**
1. Otimize o vídeo com HandBrake
2. Coloque em `public/videos/hero.mp4`
3. Configure no código

📖 **Guia completo:** [VIDEO_SETUP.md](VIDEO_SETUP.md)

---

### 2. Atualizar Schema.org na Home

**Arquivo:** `client/src/pages/home.tsx`

**Linha 25:** Endereço Real
```tsx
"streetAddress": "Rua Exemplo, 123, Centro",  // ← Seu endereço
```

**Linhas 42-45:** Redes Sociais Reais
```tsx
"sameAs": [
  "https://www.facebook.com/SEU_PERFIL_REAL",  // ← Seus links
  "https://www.instagram.com/SEU_PERFIL_REAL"
]
```

---

### 3. Criar `.env` com Dados Reais

```bash
cp .env.example .env
```

**Depois edite `.env` e preencha:**

```env
# Database (do Easypanel)
DATABASE_URL=postgresql://user:pass@host:5432/database

# Session Secret (gere com: openssl rand -base64 32)
SESSION_SECRET=sua-chave-super-secreta-aqui

# Dados da Empresa
VITE_COMPANY_EMAIL=contato@heightechalpinismo.com.br
VITE_COMPANY_PHONE=+55 47 9214-5961
VITE_WHATSAPP_NUMBER=554792145961

# Endereço Real
VITE_COMPANY_ADDRESS=Seu endereço real
VITE_COMPANY_CITY=Balneário Camboriú
VITE_COMPANY_STATE=Santa Catarina
VITE_COMPANY_ZIPCODE=88330-000
```

---

### 4. Adicionar Logo e Imagens

**Logo da Empresa:**
```
public/
  ├── logo.png          ← Logo principal (PNG transparente)
  ├── og-image.jpg      ← Imagem para redes sociais (1200x630px)
  └── favicon.ico       ← Ícone do navegador
```

**Dicas:**
- Logo: Fundo transparente, 512x512px mínimo
- OG Image: Pode ser logo + texto, 1200x630px
- Favicon: 32x32px ou usar https://favicon.io/

---

### 5. Configurar Redes Sociais (SE AINDA NÃO TEM)

Se ainda não criou, crie agora:

**Facebook:**
1. https://www.facebook.com/pages/create
2. Nome: Heightech Alpinismo Industrial
3. Categoria: Serviços de Construção
4. Poste 3-5 fotos de serviços
5. Link: heightechalpinismo.com.br

**Instagram:**
1. Criar conta comercial
2. @heightechalpinismo
3. Bio: Link do site
4. Poste 9-12 fotos antes de lançar

**Depois atualize os links no código!**

---

## 📋 CHECKLIST PRÉ-DEPLOY

### Código
- [x] 12 páginas de serviço criadas
- [x] SEO adicionado em todas as páginas
- [x] Telefone atualizado (47 9214-5961)
- [x] WhatsApp configurado
- [x] Footer atualizado
- [ ] **Vídeo YouTube configurado** ← FAZER!
- [ ] **Schema.org atualizado** ← FAZER!

### Arquivos
- [ ] `.env` criado e preenchido
- [ ] Logo em `public/logo.png`
- [ ] OG Image em `public/og-image.jpg`
- [ ] Favicon em `public/favicon.ico`

### Conteúdo
- [ ] Vídeo do YouTube pronto
- [ ] 5-10 fotos de serviços reais
- [ ] Endereço real definido
- [ ] Email configurado
- [ ] Redes sociais criadas

### Extras (Opcional mas Recomendado)
- [ ] Google Meu Negócio criado
- [ ] Facebook/Instagram criados
- [ ] Depoimentos de 3-5 clientes
- [ ] Logos de clientes (se autorizado)

---

## 🚀 ORDEM DE EXECUÇÃO

### Hoje (30 min):
1. **Criar `.env`** e preencher (5 min)
2. **Upload vídeo YouTube** "Não listado" (10 min)
3. **Configurar vídeo no código** (2 min)
4. **Atualizar Schema.org** com endereço real (3 min)
5. **Adicionar logo** em `public/` (10 min)

### Amanhã:
6. Deploy no Easypanel
7. Testar tudo
8. Configurar Google Search Console
9. Criar Google Meu Negócio

### Semana que vem:
10. Coletar depoimentos
11. Tirar fotos profissionais
12. Criar perfis redes sociais

---

## 🎯 MÍNIMO PARA DEPLOY

**Pode fazer deploy HOJE se tiver:**
- [x] Telefone configurado ✅
- [ ] Vídeo YouTube OU deixar imagem
- [ ] `.env` preenchido
- [ ] Logo (ou usar placeholder)

**Não é obrigatório mas ajuda:**
- Endereço real no Schema
- Redes sociais criadas
- Fotos reais de serviços

---

## 📞 NÚMEROS DE CONTATO CONFIGURADOS

### WhatsApp
```
Número: +55 47 9214-5961
Formato código: 554792145961
Link: https://wa.me/554792145961
```

### Telefone
```
Exibição: (47) 9214-5961
Formato internacional: +55 47 9214-5961
Link tel: tel:+5547992145961
```

---

## 🔗 LINKS ÚTEIS

### Documentação
- [DEPLOY.md](DEPLOY.md) - Como fazer deploy
- [SEO_GUIDE.md](SEO_GUIDE.md) - Como aparecer no Google
- [VIDEO_SETUP.md](VIDEO_SETUP.md) - Como adicionar vídeo
- [CONFIGURATION.md](CONFIGURATION.md) - Configurações finais
- [DATABASE.md](DATABASE.md) - Informações do banco

### Melhorias Futuras
- [MELHORIAS.md](MELHORIAS.md) - Ideias para deixar site TOP

---

## ✅ ESTÁ PRONTO PARA DEPLOY?

**SIM, se:**
- [ ] Criou `.env` com DATABASE_URL
- [ ] Configurou vídeo OU deixou imagem
- [ ] Logo adicionado OU usa placeholder

**Depois do deploy:**
1. Execute `npm run db:push` para criar tabelas
2. Cadastre no Google Search Console
3. Crie Google Meu Negócio

---

**Última verificação:** 15/01/2025
**Telefone:** +55 47 9214-5961 ✅
**Email:** contato@heightechalpinismo.com.br ✅
