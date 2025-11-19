# 🗄️ Setup do Banco de Dados PostgreSQL no Easypanel

## 📋 Resumo da Verificação

✅ **Site está completo e pronto para produção:**
- Sem dados mockados
- Todas as rotas implementadas
- Sistema de blog funcional
- Dashboard de analytics configurado
- Formulários de contato e orçamento prontos
- Sistema de autenticação implementado

---

## 🚀 Passo a Passo - Easypanel

### 1️⃣ Criar o Banco de Dados PostgreSQL

1. **Acesse seu Easypanel**
2. **Crie um novo serviço PostgreSQL:**
   - Clique em "New Service"
   - Selecione "PostgreSQL"
   - Nome: `heightech-db` (ou qualquer nome)
   - Versão: Latest (16.x)
   - Clique em "Create"

3. **Aguarde a criação do banco** (1-2 minutos)

### 2️⃣ Obter a Connection String

1. **No serviço PostgreSQL criado:**
   - Vá em "Connections"
   - Copie a **Connection String** completa
   - Exemplo: `postgresql://user:password@host.easypanel.host:5432/database`

### 3️⃣ Configurar a Variável de Ambiente

1. **No seu projeto principal (aplicação):**
   - Vá em "Environment"
   - Adicione a variável:
     ```
     DATABASE_URL=postgresql://user:password@host:5432/database
     ```
   - Salve as alterações

### 4️⃣ Criar as Tabelas do Banco

**Opção A: Via Terminal do Easypanel (Recomendado)**

1. Abra o Terminal do seu projeto no Easypanel
2. Execute:
   ```bash
   npm run db:push
   ```

**Opção B: Via SQL Manual**

1. No Easypanel, vá no serviço PostgreSQL
2. Abra o terminal PostgreSQL
3. Copie e cole todo o conteúdo do arquivo `database-setup.sql`
4. Execute

**Opção C: Via Script Bash**

1. No terminal do projeto:
   ```bash
   chmod +x setup-database.sh
   npm run db:setup
   ```

### 5️⃣ Criar Usuário Admin

Execute no terminal do Easypanel:

```bash
npm run create-admin
```

Isso criará o usuário:
- **Username:** `admin`
- **Password:** `admin123`

⚠️ **IMPORTANTE:** Altere a senha após primeiro login!

### 6️⃣ Testar a Conexão

1. Reinicie a aplicação no Easypanel
2. Acesse o site
3. Tente preencher o formulário de contato
4. Acesse `/dashboard` e faça login

---

## 📊 Estrutura do Banco Criado

O script SQL cria **5 tabelas:**

### 1. `users` - Usuários Admin
```sql
- id (serial)
- username (text, unique)
- password (text, bcrypt hash)
```

### 2. `contacts` - Contatos do Site
```sql
- id (serial)
- name, email, phone (text)
- service, city, message (text)
- created_at (timestamp)
```

### 3. `quotes` - Orçamentos
```sql
- id (serial)
- name, email, phone (text)
- service, city (text)
- project_description (text)
- building_type, building_height, urgency (text, opcional)
- created_at (timestamp)
```

### 4. `analytics_events` - Eventos de Analytics
```sql
- id (serial)
- event_id, event, page (text)
- timestamp (timestamp)
- session_id, user_agent, referrer, device_type (text)
- data (jsonb)
- created_at (timestamp)
```

### 5. `blog_posts` - Posts do Blog
```sql
- id (serial)
- slug (text, unique)
- title, excerpt, content (text)
- category (text)
- tags (text array)
- image_url, author (text)
- read_time (integer)
- published (boolean)
- published_at, created_at, updated_at (timestamp)
```

---

## 🔧 Comandos Úteis

### Verificar se as tabelas foram criadas
```bash
# No terminal PostgreSQL do Easypanel
\dt
```

### Ver dados de uma tabela
```bash
# No terminal PostgreSQL
SELECT * FROM contacts;
SELECT * FROM quotes;
SELECT * FROM users;
```

### Backup do banco
```bash
# No terminal do Easypanel
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql
```

### Restaurar backup
```bash
psql $DATABASE_URL < backup-20241119.sql
```

---

## 🔐 Segurança

✅ **Implementado:**
- Senhas com hash bcrypt
- Proteção contra SQL injection (Drizzle ORM)
- Validação de dados com Zod
- Sessões seguras

⚠️ **Recomendações:**
1. **Altere a senha admin** após primeiro login
2. **Use senha forte** no PostgreSQL
3. **Configure SSL** na connection string (Easypanel faz automaticamente)
4. **Faça backups regulares** (recomendado diário)

---

## 🐛 Solução de Problemas

### Erro: "DATABASE_URL must be set"
**Solução:** Adicione a variável `DATABASE_URL` no Environment do Easypanel

### Erro: "relation does not exist"
**Solução:** Execute `npm run db:push` para criar as tabelas

### Erro: "connection refused"
**Solução:**
- Verifique se o PostgreSQL está rodando
- Confirme que a connection string está correta
- Verifique se a aplicação pode acessar o banco (mesma network)

### Dashboard não carrega dados
**Solução:**
1. Verifique se as tabelas existem: `\dt` no terminal PostgreSQL
2. Execute `npm run db:push` novamente
3. Reinicie a aplicação

---

## 📝 Próximos Passos

1. ✅ Banco de dados criado
2. ✅ Usuário admin criado
3. ⬜ Alterar senha do admin
4. ⬜ Testar formulários do site
5. ⬜ Configurar backups automáticos
6. ⬜ Monitorar logs e performance

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do Easypanel
2. Teste a connection string localmente
3. Confirme que todas as variáveis de ambiente estão configuradas

---

**Última atualização:** 19/11/2024
