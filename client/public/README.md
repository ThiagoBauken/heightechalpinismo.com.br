# Public Assets

Esta pasta contém arquivos estáticos que serão copiados para a raiz do build durante o processo de compilação.

## Como usar

Qualquer arquivo colocado aqui será acessível publicamente em produção:

```
client/public/logo.png → https://seusite.com/logo.png
client/public/favicon.ico → https://seusite.com/favicon.ico
client/public/robots.txt → https://seusite.com/robots.txt
```

## Estrutura recomendada

```
client/public/
├── logo.png          # Logo principal do site
├── favicon.ico       # Favicon
├── og-image.jpg      # Imagem para Open Graph (redes sociais)
├── robots.txt        # SEO
└── sitemap.xml       # SEO
```

## Imagens de uploads (blog)

As imagens enviadas pelo admin do blog ficam em `public/uploads/` (raiz do projeto, não aqui).

## Imagens em componentes

Para referenciar imagens desta pasta em componentes React:

```tsx
// ✅ Correto - referência pública
<img src="/logo.png" alt="Logo" />

// ❌ Errado - não usar import para arquivos públicos
import logo from '/logo.png'
```

## Build

Durante o `npm run build`, o Vite copia automaticamente todos os arquivos desta pasta para `dist/public/`.
