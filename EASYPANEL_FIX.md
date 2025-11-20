# 🚨 EASYPANEL AINDA USANDO DOCKERFILE ANTIGO - SOLUÇÃO URGENTE

## ❌ PROBLEMA ATUAL:

O Easypanel está usando **CACHE da imagem Docker antiga** e tentando executar:
```bash
node dist/server/index.js  # ❌ COMANDO ANTIGO (não existe)
```

Ao invés de:
```bash
npm start  # ✅ COMANDO CORRETO (Dockerfile linha 37)
```

---

## ✅ VERIFICAÇÃO FEITA:

- ✅ Dockerfile está correto no GitHub (commit `9e36b93`)
- ✅ CMD está correto: `CMD ["npm", "start"]`
- ✅ Push foi feito com sucesso
- ❌ Easypanel NÃO pegou as mudanças (usando cache)

---

## 🔧 SOLUÇÕES (TESTAR NESTA ORDEM):

### 1️⃣ FORÇAR REBUILD SEM CACHE (MAIS PROVÁVEL)

No painel do Easypanel:

**Passo a Passo:**
1. Acesse seu app no Easypanel
2. Vá em "Settings" ou "Builds"
3. Procure por botão "Rebuild" ou "Redeploy"
4. **CRÍTICO:** Marque a opção:
   - ☑️ **"No Cache"** ou
   - ☑️ **"Clean Build"** ou
   - ☑️ **"Force Rebuild"**
5. Clique em "Rebuild"

**Por que funciona:**
- Docker usa cache de layers antigas
- Rebuild sem cache força usar o novo Dockerfile
- Garante que o CMD correto seja usado

---

### 2️⃣ VERIFICAR CMD OVERRIDE (SEGUNDA MAIS PROVÁVEL)

O Easypanel pode estar sobrescrevendo o CMD:

**Passo a Passo:**
1. Vá em "Settings" → "Service" ou "Advanced"
2. Procure por campo "**Command**" ou "**Start Command**"
3. Se houver algo como:
   ```
   node dist/server/index.js
   ```
   **SOLUÇÃO:**
   - DELETE completamente (deixe vazio) OU
   - Mude para: `npm start`

**Por que funciona:**
- Override de CMD ignora o Dockerfile
- Remover override usa o CMD do Dockerfile

---

### 3️⃣ VERIFICAR BRANCH E COMMIT

**Passo a Passo:**
1. Vá em "Settings" → "Source" ou "GitHub"
2. Verifique:
   - Branch: deve ser `main`
   - Último commit: deve mostrar `9e36b93` ou "Fix: Corrigir runtime Docker..."
3. Se não for o commit correto:
   - Force um "Sync" ou "Pull"
   - Rebuild depois

---

### 4️⃣ USAR DOCKER COMPOSE OVERRIDE (ALTERNATIVA)

Se o Easypanel suporta `docker-compose.override.yml`:

**Criar arquivo:** `docker-compose.override.yml`
```yaml
version: '3.8'
services:
  app:
    command: ["npm", "start"]
```

**Push para o repositório:**
```bash
git add docker-compose.override.yml
git commit -m "Add docker-compose override to fix CMD"
git push
```

---

### 5️⃣ VERIFICAR LOGS DO BUILD (DIAGNÓSTICO)

No Easypanel, durante o rebuild, verifique os logs:

**O que procurar:**
```
Step X/Y : CMD ["npm", "start"]
```

**Se aparecer:**
```
Step X/Y : CMD ["node", "dist/server/index.js"]  # ❌ ANTIGO
```

Significa que ainda está usando Dockerfile antigo do cache.

**Solução:** Rebuild sem cache (Solução #1)

---

## 🎯 CHECKLIST DE VERIFICAÇÃO:

Após aplicar as soluções, verifique nos logs do Easypanel:

✅ **Logs de Startup esperados:**
```
[STARTUP] ==========================================
[STARTUP] NODE_ENV: production
[STARTUP] Current working directory: /app
[STARTUP] Port: 5000
[STARTUP] ==========================================
```

✅ **Logs de Production esperados:**
```
[PRODUCTION] Current working directory: /app
[PRODUCTION] Static files path: /app/dist/public
[PRODUCTION] Directory exists: true
```

❌ **Se ainda aparecer:**
```
Error: Cannot find module '/app/dist/server/index.js'
```

Significa que o CMD ainda não foi atualizado.

---

## 🆘 SE NADA FUNCIONAR:

### Opção A: Contatar Suporte Easypanel

Informe que:
- Dockerfile foi atualizado no GitHub
- CMD correto: `CMD ["npm", "start"]`
- Cache Docker não está sendo limpo
- Solicite rebuild manual sem cache

### Opção B: Usar Entry Point Workaround

**Temporariamente**, adicionar no Dockerfile:

```dockerfile
# Depois da linha ENV NODE_ENV=production
ENTRYPOINT []
CMD ["npm", "start"]
```

Isso força o override de qualquer entrypoint anterior.

---

## 📞 SUPORTE:

Se precisar de ajuda:
1. Capture screenshot das configurações do Easypanel
2. Capture logs do build
3. Verifique se há arquivo `easypanel.yml` ou similar no projeto
