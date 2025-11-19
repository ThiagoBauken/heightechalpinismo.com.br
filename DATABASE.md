# Guia do Banco de Dados - Heightech Alpinismo

## O que o banco de dados armazena

O projeto usa **PostgreSQL** com 3 tabelas principais:

### 1. 📊 Tabela `contacts` (Contatos do Site)

Armazena mensagens enviadas pelo formulário de contato:

```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,              -- Nome do cliente
  email TEXT NOT NULL,             -- Email
  phone TEXT NOT NULL,             -- Telefone
  service TEXT NOT NULL,           -- Serviço solicitado
  city TEXT NOT NULL,              -- Cidade
  message TEXT NOT NULL,           -- Mensagem
  created_at TIMESTAMP DEFAULT NOW -- Data/hora
);
```

**Quando é usado:** Quando alguém preenche o formulário de contato no site.

### 2. 💰 Tabela `quotes` (Orçamentos)

Armazena pedidos de orçamento mais detalhados:

```sql
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,                   -- Nome
  email TEXT NOT NULL,                  -- Email
  phone TEXT NOT NULL,                  -- Telefone
  service TEXT NOT NULL,                -- Serviço
  city TEXT NOT NULL,                   -- Cidade
  project_description TEXT NOT NULL,    -- Descrição do projeto
  building_type TEXT,                   -- Tipo de prédio (opcional)
  building_height TEXT,                 -- Altura (opcional)
  urgency TEXT,                         -- Urgência (opcional)
  created_at TIMESTAMP DEFAULT NOW      -- Data/hora
);
```

**Quando é usado:** Quando alguém solicita um orçamento detalhado.

### 3. 👤 Tabela `users` (Usuários Admin)

Armazena usuários que podem acessar o dashboard:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,   -- Nome de usuário
  password TEXT NOT NULL            -- Senha (hash)
);
```

**Quando é usado:** Para login no dashboard `/dashboard`

---

## Como criar o banco de dados

### Opção 1: Easypanel (Recomendado)

**Passo 1:** No Easypanel, crie um serviço PostgreSQL
- Nome: `industrial-climbers-db`
- Versão: Latest
- Database: `industrial_climbers`

**Passo 2:** Copie a **Connection String**
```
postgresql://user:password@host:5432/database
```

**Passo 3:** Adicione no `.env`
```env
DATABASE_URL=postgresql://user:password@host:5432/database
```

**Passo 4:** Execute as migrações
```bash
npm run db:push
```

Isso criará automaticamente as 3 tabelas!

### Opção 2: PostgreSQL Local (Desenvolvimento)

```bash
# 1. Instalar PostgreSQL
# Windows: https://www.postgresql.org/download/windows/
# Mac: brew install postgresql

# 2. Criar banco
createdb industrial_climbers

# 3. Adicionar ao .env
DATABASE_URL=postgresql://postgres:password@localhost:5432/industrial_climbers

# 4. Executar migrações
npm run db:push
```

### Opção 3: Neon (Grátis)

1. Crie conta em https://neon.tech
2. Crie um projeto "Industrial Climbers"
3. Copie a connection string
4. Adicione ao `.env`
5. Execute `npm run db:push`

---

## Comandos úteis

### Criar as tabelas
```bash
npm run db:push
```

### Verificar se funcionou
```bash
# Via código Node.js
node -e "const { db } = require('./server/db'); db.select().from(require('./shared/schema').contacts).then(console.log)"
```

---

## O que acontece após o deploy

### 1. Formulários do Site

Quando alguém preenche um formulário:
1. Dados são salvos no banco
2. Você pode ver no **Dashboard** (`/dashboard`)
3. (Opcional) Pode configurar email de notificação

### 2. Dashboard

Acesse `/dashboard` para:
- ✅ Ver todos os contatos recebidos
- ✅ Ver orçamentos solicitados
- ✅ Filtrar por data, serviço, cidade
- ✅ Exportar dados

### 3. Criar Usuário Admin

**Após primeiro deploy**, crie um usuário para acessar o dashboard:

```bash
# Via terminal do Easypanel ou localmente:
npm run create-admin
```

Ou manualmente via SQL:
```sql
-- Senha: admin123 (hash bcrypt)
INSERT INTO users (username, password)
VALUES ('admin', '$2b$10$xyz...');
```

**IMPORTANTE:** Mude a senha após primeiro login!

---

## Estrutura de Dados

### Exemplo de Contato
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@empresa.com",
  "phone": "+55 47 9999-9999",
  "service": "Limpeza de Fachadas",
  "city": "Balneário Camboriú",
  "message": "Preciso de orçamento para limpeza de fachada de prédio comercial",
  "created_at": "2025-01-15T10:30:00Z"
}
```

### Exemplo de Orçamento
```json
{
  "id": 1,
  "name": "Maria Santos",
  "email": "maria@email.com",
  "phone": "+55 47 8888-8888",
  "service": "Instalação de ACM",
  "city": "Itapema",
  "project_description": "Instalação de ACM em fachada comercial de 200m²",
  "building_type": "Comercial",
  "building_height": "15 metros",
  "urgency": "Média",
  "created_at": "2025-01-15T14:20:00Z"
}
```

---

## Backup e Manutenção

### Backup Automático (Easypanel)

Configure backups automáticos:
1. Vá no serviço PostgreSQL
2. Ative **Automated Backups**
3. Escolha frequência (diário recomendado)

### Backup Manual

```bash
# Exportar banco
pg_dump $DATABASE_URL > backup.sql

# Importar banco
psql $DATABASE_URL < backup.sql
```

### Limpeza (Opcional)

Limpar contatos antigos (ex: mais de 1 ano):
```sql
DELETE FROM contacts WHERE created_at < NOW() - INTERVAL '1 year';
DELETE FROM quotes WHERE created_at < NOW() - INTERVAL '1 year';
```

---

## Solução de Problemas

### Erro: "DATABASE_URL is not defined"
**Solução:** Adicione a variável no `.env`

### Erro: "relation does not exist"
**Solução:** Execute `npm run db:push` para criar as tabelas

### Erro: "connection refused"
**Solução:** Verifique se o PostgreSQL está rodando e a connection string está correta

### Banco vazio após deploy
**Solução:** Normal! Execute `npm run db:push` no terminal do Easypanel

---

## Custos

### Easypanel
- PostgreSQL grátis até 1GB
- Depois: ~$5-10/mês

### Neon (Alternativa)
- Grátis até 0.5GB
- Mais barato para projetos pequenos

### Estimativa de uso
- ~100 contatos/mês = ~50KB
- Suporta milhares de contatos sem problemas

---

## Segurança

✅ **O que está seguro:**
- Senhas hashadas com bcrypt
- SQL injection protegido (Drizzle ORM)
- Validação de dados com Zod

⚠️ **Recomendações:**
- Use senha forte no PostgreSQL
- Mude senha admin após primeiro login
- Configure SSL na connection string (Easypanel faz isso automaticamente)
- Faça backups regulares

---

**Última atualização:** 15/01/2025
