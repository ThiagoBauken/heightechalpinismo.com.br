# 🔄 Como Fazer as Imagens Voltarem

## ✅ O problema foi corrigido no código!

Agora você precisa **reiniciar o servidor** para aplicar as mudanças.

---

## 🚀 OPÇÃO 1: Build e Start (Produção)

```bash
# Parar o servidor atual (Ctrl + C)

# Build do projeto
npm run build

# Iniciar servidor
npm start
```

---

## 🚀 OPÇÃO 2: Desenvolvimento

```bash
# Parar o servidor atual (Ctrl + C)

# Reiniciar em modo desenvolvimento
npm run dev
```

---

## 🚀 OPÇÃO 3: Se estiver no Docker

```bash
# Rebuild da imagem
docker-compose build

# Restart dos containers
docker-compose restart
```

---

## 🧹 IMPORTANTE: Limpar Cache do Navegador

Depois de reiniciar o servidor:

### Chrome/Edge:
1. Pressione `Ctrl + Shift + Delete` (ou `Cmd + Shift + Delete` no Mac)
2. Selecione **"Imagens e arquivos em cache"**
3. Clique em **"Limpar dados"**
4. Recarregue a página: `Ctrl + F5`

### Firefox:
1. Pressione `Ctrl + Shift + Delete`
2. Selecione **"Cache"**
3. Clique em **"Limpar agora"**
4. Recarregue a página: `Ctrl + F5`

---

## ✅ O que vai funcionar depois do restart:

| Tipo de Imagem | Status |
|----------------|--------|
| Logo no Header | ✅ Funcionando |
| Logo no Footer | ✅ Funcionando |
| Imagens de Capa | ✅ Funcionando |
| Imagens do Unsplash | ✅ Funcionando |
| Thumbnails de Vídeo | ✅ Funcionando |
| Vídeos do YouTube | ✅ Funcionando |
| Google Analytics | ✅ Funcionando |

---

## 🔍 Como Verificar se Funcionou:

1. **Abra o Console (F12)**
2. **Vá para a aba Console**
3. **Recarregue a página**

### ✅ SUCESSO - Não deve ter esses erros:
```
❌ Loading the image violates CSP directive (NÃO DEVE APARECER)
❌ Framing violates CSP directive (NÃO DEVE APARECER)
```

### ✅ SUCESSO - Deve ver:
```
✅ Sem erros de CSP
✅ Imagens carregando normalmente
```

---

## 🐛 Se as imagens AINDA não aparecerem:

### 1. Verificar se o servidor reiniciou
```bash
# Deve mostrar a configuração de CSP nos logs
# Procure por: "Security middleware - Helmet"
```

### 2. Verificar variável de ambiente
```bash
# No terminal
echo $NODE_ENV

# Deve retornar 'production' ou vazio
```

### 3. Hard Reload (Recarregamento forçado)
```
Windows/Linux: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

### 4. Testar em janela anônima
```
Ctrl + Shift + N (Chrome)
Ctrl + Shift + P (Firefox)
```

---

## 📊 Resumo Rápido:

```bash
# 1. Parar servidor
Ctrl + C

# 2. Build
npm run build

# 3. Iniciar
npm start

# 4. Limpar cache do navegador
Ctrl + Shift + Delete

# 5. Recarregar página
Ctrl + F5
```

---

🎉 **Pronto! As imagens de capa vão aparecer!**
