# 🚀 Deploy no Easypanel

## ✅ Status Atual

- ✅ Código no GitHub: `https://github.com/ThiagoBauken/heightechalpinismo.com.br.git`
- ✅ Banco PostgreSQL configurado
- ✅ Dockerfile pronto
- ✅ Variáveis de ambiente configuradas

---

## 📋 Passo a Passo para Deploy

### 1️⃣ No Easypanel - Criar Aplicação

1. Acesse seu Easypanel
2. Clique em **"Create Service"** ou **"New App"**
3. Escolha **"From GitHub"**
4. Selecione o repositório: `ThiagoBauken/heightechalpinismo.com.br`
5. Branch: `main`

### 2️⃣ Configurar Build

**Tipo de Build:** Docker

O Easypanel vai detectar automaticamente o `Dockerfile` na raiz do projeto.

**Configurações:**
- **Build Context:** `/` (raiz)
- **Dockerfile:** `Dockerfile`
- **Port:** `3000` (porta interna do container)

### 3️⃣ Configurar Variáveis de Ambiente

No Easypanel, adicione as seguintes variáveis de ambiente:

```env
# Database
DATABASE_URL=postgresql://pedro:067d02cadf3cb79545e8@private_siteheightech1:5432/dataabse1?sslmode=disable

# Session
SESSION_SECRET=hT9kL2mN5pQ7rS4vW8xZ1aC3dF6gH0jK

# Node
NODE_ENV=production
PORT=3000

# Website
VITE_SITE_URL=https://heightechalpinismo.com.br
VITE_COMPANY_NAME=Heightech Alpinismo Industrial
VITE_COMPANY_EMAIL=contato@heightechalpinismo.com.br
VITE_COMPANY_PHONE=+55 47 9214-5961
VITE_WHATSAPP_NUMBER=554792145961

# Address
VITE_COMPANY_ADDRESS=Rua Exemplo, 123
VITE_COMPANY_CITY=Balneário Camboriú
VITE_COMPANY_STATE=Santa Catarina
VITE_COMPANY_ZIPCODE=88330-000
VITE_COMPANY_COUNTRY=Brasil

# Geolocation
VITE_COMPANY_LATITUDE=-26.9964
VITE_COMPANY_LONGITUDE=-48.6357

# Dashboard
VITE_DASHBOARD_PASSWORD=pedrinho21
```

### 4️⃣ Configurar Domínio

1. No Easypanel, vá em **"Domains"**
2. Adicione seu domínio: `heightechalpinismo.com.br`
3. Configure o SSL (Easypanel faz automaticamente com Let's Encrypt)
4. Adicione também `www.heightechalpinismo.com.br` se quiser

### 5️⃣ Deploy

1. Clique em **"Deploy"**
2. O Easypanel vai:
   - Clonar o repositório
   - Buildar o Docker image
   - Rodar as migrações do banco
   - Iniciar a aplicação

---

## 🔍 Verificação Pós-Deploy

Após o deploy, teste:

### ✅ Checklist de Teste

- [ ] Site abre em `https://heightechalpinismo.com.br`
- [ ] Navegação funciona (Início, Serviços, Projetos, Blog, Contato)
- [ ] Click em serviços abre páginas corretas
- [ ] Click em projetos abre detalhes
- [ ] Blog carrega posts do banco de dados
- [ ] Formulário de contato envia (testa em `/contato`)
- [ ] Dashboard abre em `/dashboard` (senha: `pedrinho21`)
- [ ] Scroll suave funciona ao clicar em "Serviços"

---

## 📊 Logs e Monitoramento

### Ver Logs no Easypanel

1. Acesse seu serviço no Easypanel
2. Clique em **"Logs"**
3. Procure por:
   - ✅ `serving on http://...` - Servidor iniciou
   - ✅ Mensagens de conexão com banco
   - ❌ Erros (se houver)

### Comandos Úteis (se tiver acesso SSH)

```bash
# Ver logs
docker logs <container-id>

# Entrar no container
docker exec -it <container-id> sh

# Ver banco de dados
psql $DATABASE_URL -c "SELECT * FROM blog_posts LIMIT 5;"
```

---

## 🔄 Atualizações Futuras

Para fazer atualizações no site:

1. **Faça alterações no código local**
2. **Commit e push:**
   ```bash
   git add .
   git commit -m "Descrição da alteração"
   git push origin main
   ```
3. **No Easypanel:**
   - Clique em **"Redeploy"**
   - OU configure **Auto Deploy** para fazer automaticamente

---

## 🐛 Troubleshooting

### Erro: "Could not connect to database"

**Solução:**
- Verifique se `DATABASE_URL` está correta nas variáveis de ambiente
- Certifique-se de usar `private_siteheightech1` (não IP externo)
- Verifique se o serviço PostgreSQL está rodando

### Erro: "Port already in use"

**Solução:**
- Verifique se `PORT=3000` está nas variáveis de ambiente
- Não deve ter outro serviço usando a porta 3000

### Erro: "Build failed"

**Solução:**
- Verifique os logs de build no Easypanel
- Certifique-se que o `Dockerfile` está correto
- Pode precisar dar um `npm install` local para atualizar `package-lock.json`

### Site não carrega CSS/JS

**Solução:**
- Verifique se `NODE_ENV=production` está configurado
- O build deve ter gerado os arquivos em `dist/public`
- Verifique os logs para ver se o build completou

---

## 📁 Estrutura de Deploy

```
Container:
├── /app                          # Diretório da aplicação
│   ├── dist/                     # Build da aplicação
│   │   ├── index.js              # Servidor
│   │   └── public/               # Arquivos estáticos (CSS, JS, imagens)
│   ├── node_modules/             # Dependências
│   └── package.json
```

---

## 🎯 Próximos Passos Após Deploy

1. **Configure Google Analytics** (opcional)
   - Crie conta no Google Analytics
   - Adicione `VITE_GA_TRACKING_ID` nas variáveis

2. **Configure Google Maps** (opcional)
   - Crie API key no Google Cloud
   - Adicione `VITE_GOOGLE_MAPS_API_KEY`

3. **Otimize o logo**
   - Siga o guia em `OTIMIZAR_LOGO.md`
   - Substitua `public/logo.png`

4. **Adicione posts no blog**
   - Acesse `/blog-admin`
   - OU use o SQL direto no banco

5. **Configure backup do banco**
   - Configure backup automático no Easypanel
   - Ou use `pg_dump` manualmente

---

## 📞 Suporte

Se algo não funcionar:

1. Verifique os logs no Easypanel
2. Teste localmente com `npm run dev`
3. Consulte a documentação em:
   - `DATABASE_SETUP.md` - Problemas com banco
   - `CONFIGURATION.md` - Configurações gerais
   - `STATUS_DO_SITE.md` - Status completo

---

## ✅ Checklist Final

Antes de considerar o deploy completo:

- [ ] Site está no ar e acessível
- [ ] SSL/HTTPS funcionando
- [ ] Todas as páginas carregam
- [ ] Formulário de contato salva no banco
- [ ] Blog carrega posts
- [ ] Dashboard acessível
- [ ] Logo otimizado e carregando
- [ ] WhatsApp button funcionando
- [ ] Scroll suave nos links âncora
- [ ] Projetos clicáveis
- [ ] Mobile responsivo

---

**Status:** Pronto para deploy! 🚀

**Conexão do Banco:** Interna (private_siteheightech1:5432)

**Última atualização:** 2025-01-19
