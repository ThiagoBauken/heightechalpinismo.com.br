# 🎥 Como Adicionar Vídeo na Home

## ✅ Opção 1: YouTube (RECOMENDADO - Mais Rápido!)

### Por que YouTube?
- ✅ Carrega super rápido
- ✅ Não usa espaço do seu servidor
- ✅ YouTube cuida da compressão
- ✅ Funciona em qualquer conexão
- ✅ Grátis!

### Passo a Passo

#### 1. Fazer Upload no YouTube

**a) Preparar o vídeo:**
- Duração ideal: 30-60 segundos
- Mostrar equipe trabalhando
- Antes/depois de um serviço
- Equipamentos profissionais

**b) Configurações do vídeo:**
1. Acesse: https://youtube.com/upload
2. Faça upload do vídeo
3. **Título:** "Heightech Alpinismo Industrial - Serviços em Altura"
4. **Descrição:** Breve descrição + link do site
5. **Visibilidade:**
   - **Não listado** (só quem tem link vê) ← RECOMENDADO
   - Ou **Público** (aparece no canal)

#### 2. Pegar o ID do Vídeo

Depois do upload, a URL será algo como:
```
https://youtube.com/watch?v=ABC123XYZ
                           ↑
                    Este é o ID!
```

**Copie apenas a parte depois de `v=`**

#### 3. Configurar no Site

Abra o arquivo:
```
client/src/components/home/hero-section.tsx
```

Procure por:
```tsx
youtubeId="SEU_YOUTUBE_ID_AQUI"
```

Substitua por:
```tsx
youtubeId="ABC123XYZ"  // ← Seu ID aqui
```

**Pronto!** O vídeo aparecerá na home! 🎉

---

## Opção 2: Vídeo Local (Upload no Servidor)

### Quando usar?
- Quer mais controle
- Vídeo muito curto (< 10 segundos)
- Não quer usar YouTube

### ⚠️ IMPORTANTE: Otimizar o Vídeo ANTES!

**Sem otimização:** Vídeo de 50MB = site lento
**Com otimização:** Vídeo de 3MB = site rápido!

### Como Otimizar

#### Método 1: HandBrake (Grátis - Recomendado)

1. Baixe: https://handbrake.fr/
2. Abra seu vídeo
3. Configure:
   - **Preset:** "Web" → "Gmail Large 3 Minutes 720p30"
   - **Resolução:** 1280x720 (720p)
   - **Frame Rate:** 30 FPS
   - **Quality:** RF 28-32
4. Clique em "Start"
5. Salve como `hero.mp4`

**Resultado:** Vídeo 80-90% menor!

#### Método 2: Online (Mais fácil)

1. Acesse: https://www.freeconvert.com/video-compressor
2. Faça upload do vídeo
3. Configure:
   - Target size: 5MB
   - Resolution: 720p
   - Format: MP4
4. Baixe o vídeo otimizado

#### Método 3: FFmpeg (Linha de comando)

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -vf scale=1280:-2 -acodec aac -b:a 128k hero.mp4
```

### Fazer Upload do Vídeo

**1. Colocar na pasta `public/videos/`**
```
IndustrialClimbers/
  └── public/
      └── videos/
          └── hero.mp4  ← Seu vídeo aqui
```

**2. Configurar no código**

Abra: `client/src/components/home/hero-section.tsx`

Procure por:
```tsx
// videoUrl="/videos/hero.mp4"
```

Descomente (remova //) e configure:
```tsx
videoUrl="/videos/hero.mp4"

// E comente/remova a linha do YouTube:
// youtubeId="SEU_YOUTUBE_ID_AQUI"
```

---

## 📱 Otimizações Automáticas

O componente **já faz automaticamente:**

✅ **Mobile:** Não carrega vídeo em mobile (economiza dados)
✅ **Conexão lenta:** Mostra só imagem
✅ **Fallback:** Se vídeo falhar, mostra imagem
✅ **Lazy loading:** Só carrega quando necessário
✅ **Autoplay mudo:** Reproduz automaticamente sem som

---

## 🎬 Dicas para Gravar o Vídeo

### O que filmar?

**Primeiros 5 segundos (CRUCIAL!):**
- Logo da empresa
- Equipe em ação
- Vista impressionante

**Segundos 5-30:**
- Variedade de serviços
- Equipamentos profissionais
- Trabalho em altura
- Cliente satisfeito

**Últimos segundos:**
- Resultado final (antes/depois)
- Logo + "heightechalpinismo.com.br"

### Dicas técnicas:

1. **Grave na horizontal** (landscape)
2. **Boa iluminação** (de preferência dia claro)
3. **Estável:** Use tripé ou estabilizador
4. **Qualidade:** Mínimo 1080p
5. **Áudio:** Música de fundo (baixo volume) ou sem áudio

### Música de fundo (Grátis):

- YouTube Audio Library: https://youtube.com/audiolibrary
- Epidemic Sound (pago mas profissional)
- Artlist (pago)

**Dica:** Música instrumental, não muito agitada.

---

## 📊 Comparação

| Característica | YouTube | Vídeo Local |
|---|---|---|
| Velocidade | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Custo servidor | Grátis | Usa servidor |
| Controle | Médio | Total |
| Setup | Fácil | Médio |
| Tamanho do vídeo | Ilimitado | Max 10-20MB |

**Recomendação:** Use YouTube!

---

## 🔧 Solução de Problemas

### Vídeo não aparece

**1. YouTube:**
- Verifique se o ID está correto
- Vídeo precisa estar "Não listado" ou "Público" (não "Privado")
- Espere 1-2 minutos após upload

**2. Vídeo Local:**
- Arquivo está em `public/videos/`?
- Nome está correto? (`hero.mp4`)
- Arquivo não está corrompido?

### Vídeo muito lento

**YouTube:**
- Normal levar 2-3 segundos para carregar
- Imagem aparece primeiro

**Vídeo Local:**
- Arquivo muito grande? Otimize!
- Use qualidade RF 28-32 no HandBrake
- Máximo recomendado: 5-10MB

### Vídeo não reproduz no mobile

**Normal!** O componente desabilita vídeo em mobile para economizar dados.
Solução: Mostra imagem no mobile, vídeo no desktop.

---

## 📋 Checklist Final

Antes de fazer deploy:

- [ ] Vídeo otimizado (< 10MB se local)
- [ ] Duração 30-60 segundos
- [ ] Mostra serviços principais
- [ ] Qualidade boa (mínimo 720p)
- [ ] Sem áudio ou música baixa
- [ ] Testado em desktop
- [ ] Testado em mobile
- [ ] ID do YouTube correto OU
- [ ] Arquivo em `public/videos/hero.mp4`

---

## 🎯 Exemplo de Configuração Final

### Com YouTube (Recomendado):
```tsx
<VideoBackground
  youtubeId="dQw4w9WgXcQ"  // ← Seu ID aqui
  posterImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
/>
```

### Com Vídeo Local:
```tsx
<VideoBackground
  videoUrl="/videos/hero.mp4"
  posterImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
/>
```

---

**Qualquer dúvida, me chame!** 🚀
