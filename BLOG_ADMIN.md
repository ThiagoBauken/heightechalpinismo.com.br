# Sistema de Gerenciamento de Blog

## 📝 Como Funciona Atualmente

Os posts do blog estão **hardcoded** no arquivo `client/src/pages/blog.tsx` e `client/src/pages/blog-post.tsx`.

## ✅ O Que Está Funcionando

- ✅ Posts do blog exibem corretamente
- ✅ Cards de posts são clicáveis e redirecionam para página do post
- ✅ Página individual de cada post com conteúdo completo
- ✅ SEO configurado para cada post
- ✅ Analytics tracking de cliques

## 📋 Como Adicionar/Editar Posts Agora

### 1. Editar arquivo de posts

Abra o arquivo: `client/src/pages/blog-post.tsx`

Procure o array `blogPosts`:

```typescript
const blogPosts: BlogPost[] = [
  {
    id: "meu-novo-post",  // ← URL amigável (slug)
    title: "Título do Meu Novo Post",
    excerpt: "Resumo do post que aparece na listagem",
    content: `
      <h2>Título da Seção</h2>
      <p>Conteúdo do post em HTML...</p>

      <h3>Subtítulo</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    `,
    author: "Seu Nome",
    date: "2024-01-15",  // ← Formato: YYYY-MM-DD
    readTime: "8 min",
    image: "https://URL-DA-IMAGEM.jpg",
    category: "seguranca",  // ← seguranca, normas, casos, manutencao
    tags: ["Tag1", "Tag2", "Tag3"]
  },
  // ... outros posts
];
```

### 2. Copiar o mesmo post para blog.tsx

Copie o post também para o arquivo: `client/src/pages/blog.tsx`

No array `blogPosts` (linha ~24), adicione o mesmo post.

## 🚀 Sistema de Admin com Banco de Dados (Futuro)

Para criar um painel admin completo, você precisará:

### 1. Criar tabela de posts no banco

```sql
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author VARCHAR(100),
  date DATE NOT NULL,
  read_time VARCHAR(20),
  image_url TEXT,
  category VARCHAR(50),
  tags TEXT[], -- Array de tags
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Criar rotas da API

No arquivo `server/routes.ts`, adicione:

```typescript
// GET todos os posts
app.get("/api/blog/posts", async (req, res) => {
  const posts = await db.select().from(blogPosts);
  res.json(posts);
});

// GET post por slug
app.get("/api/blog/posts/:slug", async (req, res) => {
  const post = await db.select()
    .from(blogPosts)
    .where(eq(blogPosts.slug, req.params.slug));
  res.json(post[0]);
});

// POST criar novo post
app.post("/api/blog/posts", async (req, res) => {
  const newPost = await db.insert(blogPosts).values(req.body).returning();
  res.json(newPost[0]);
});

// PUT atualizar post
app.put("/api/blog/posts/:id", async (req, res) => {
  const updated = await db.update(blogPosts)
    .set(req.body)
    .where(eq(blogPosts.id, req.params.id))
    .returning();
  res.json(updated[0]);
});

// DELETE remover post
app.delete("/api/blog/posts/:id", async (req, res) => {
  await db.delete(blogPosts).where(eq(blogPosts.id, req.params.id));
  res.json({ success: true });
});
```

### 3. Criar página Admin

Criar `client/src/pages/admin/blog.tsx`:

```typescript
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

export default function BlogAdmin() {
  const { data: posts } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: () => fetch("/api/blog/posts").then(r => r.json())
  });

  // Interface para criar/editar posts
  // Lista de posts com botões editar/deletar
  // Editor de conteúdo (pode usar um editor WYSIWYG como TinyMCE ou Quill)
}
```

### 4. Proteger com Autenticação

- Adicionar sistema de login/autenticação
- Proteger rotas `/admin/*` com middleware de autenticação
- Criar usuários admin no banco

## 📚 Ferramentas Recomendadas

### Editores de Conteúdo:
- **TinyMCE** - Editor WYSIWYG completo
- **Quill** - Editor rico e leve
- **Markdown Editor** - Se preferir Markdown ao invés de HTML

### Upload de Imagens:
- **Cloudinary** - CDN para hospedar imagens
- **AWS S3** - Storage de arquivos
- **ImgBB** - Upload gratuito de imagens

## 🔑 Acesso Rápido

Por enquanto, para editar posts:

1. Abra `client/src/pages/blog-post.tsx`
2. Edite o array `blogPosts`
3. Copie para `client/src/pages/blog.tsx`
4. Salve e recarregue o site

## ⚠️ Importante

Sempre mantenha os 2 arquivos sincronizados:
- `client/src/pages/blog.tsx` (listagem)
- `client/src/pages/blog-post.tsx` (página individual)

## 💡 Dicas

- Use IDs únicos e descritivos (slug) para cada post
- Imagens devem ter no mínimo 1200x600px
- Categorias: seguranca, normas, casos, manutencao
- Tags ajudam no SEO e na busca de posts relacionados
