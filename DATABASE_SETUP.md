# Configuração do Banco de Dados PostgreSQL

## Status Atual

✅ **Banco de dados configurado e funcionando!**

- Conexão testada com sucesso
- Migrações aplicadas (tabelas criadas)
- Pronto para desenvolvimento local

---

## Conexões Disponíveis

### 🧪 TESTE (Ambiente Local - ATUAL)

**URL de Conexão:**
```
postgresql://pedro:067d02cadf3cb79545e8@185.215.165.19:9091/dataabse1?sslmode=disable
```

**Quando usar:**
- Desenvolvimento local no Windows
- Testes antes do deploy
- Debugging

**Configurado em:** `.env` (linha 3)

---

### 🚀 PRODUÇÃO (Easypanel)

**URL de Conexão:**
```
postgresql://pedro:067d02cadf3cb79545e8@private_siteheightech1:5432/dataabse1?sslmode=disable
```

**Quando usar:**
- Deploy no Easypanel
- Ambiente de produção
- Acesso interno do container Docker

**Como trocar:**
1. No Easypanel, ao configurar as variáveis de ambiente
2. Use a URL de produção em vez da de teste
3. OU descomente a linha 4 do `.env` e comente a linha 3

---

## Tabelas Criadas

O banco possui as seguintes tabelas:

1. **users** - Usuários do sistema (admin)
2. **blog_posts** - Posts do blog
3. **analytics_events** - Eventos de tracking (cliques, visualizações)
4. **contact_submissions** - Formulários de contato enviados

---

## Comandos Úteis

### Aplicar mudanças no schema
```bash
npm run db:push
```

### Testar conexão
```bash
npm run dev
```
O servidor vai se conectar automaticamente ao banco configurado no `.env`

---

## Testando a Conexão

1. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

2. **Acesse o site:**
   ```
   http://localhost:5000
   ```

3. **Verifique o blog:**
   - Acesse `/blog` - Se carregar a página, está conectado!
   - Se houver posts no banco, eles serão exibidos
   - Se não houver posts, aparecerá "Nenhum post publicado ainda"

4. **Teste o formulário de contato:**
   - Acesse `/contato`
   - Preencha e envie o formulário
   - Os dados serão salvos na tabela `contact_submissions`

---

## Próximos Passos para Deploy no Easypanel

Quando for fazer o deploy:

1. **Crie o serviço PostgreSQL no Easypanel** (se ainda não tiver)

2. **Configure as variáveis de ambiente no Easypanel:**
   ```env
   DATABASE_URL=postgresql://pedro:067d02cadf3cb79545e8@private_siteheightech1:5432/dataabse1?sslmode=disable
   SESSION_SECRET=hT9kL2mN5pQ7rS4vW8xZ1aC3dF6gH0jK
   NODE_ENV=production
   PORT=3000
   ```

3. **No primeiro deploy, rode as migrações:**
   - O Dockerfile já está configurado para rodar automaticamente
   - Ou rode manualmente: `npm run db:push`

4. **Verifique logs** para confirmar conexão

---

## Troubleshooting

### Erro: "relation does not exist"
**Solução:** Rode `npm run db:push` para criar as tabelas

### Erro: "connection refused"
**Solução:**
- Verifique se a URL está correta no `.env`
- Confirme que o servidor PostgreSQL está acessível
- Teste a porta (9091 para teste, 5432 para produção)

### Erro: "password authentication failed"
**Solução:** Verifique usuário e senha na DATABASE_URL

---

## Informações Importantes

- **Nome do Banco:** `dataabse1` (note o typo original)
- **Usuário:** `pedro`
- **Senha:** `067d02cadf3cb79545e8`
- **Porta Teste:** 9091
- **Porta Produção:** 5432
- **SSL Mode:** disabled (para testes)

---

## Segurança

⚠️ **IMPORTANTE:**

1. **Não commite o arquivo `.env`** no Git (já está no .gitignore)
2. **No Easypanel, use variáveis de ambiente** em vez de .env
3. **Em produção, considere habilitar SSL** (remova `?sslmode=disable`)
4. **Mantenha as credenciais seguras**

---

## Status das Migrações

✅ Schema aplicado com sucesso
✅ Todas as tabelas criadas
✅ Índices configurados
✅ Pronto para uso

**Data da última migração:** 2025-01-19
