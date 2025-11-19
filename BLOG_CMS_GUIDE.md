# Blog Dinâmico + CMS - Guia Completo

## 🎉 O que foi implementado

Você agora tem um **sistema completo de Blog com CMS** integrado ao seu site!

### ✅ Funcionalidades Completas

1. **Backend API RESTful** ([server/routes.ts](server/routes.ts))
   - `GET /api/blog/posts` - Listar posts publicados
   - `GET /api/blog/posts?all=true` - Listar todos (incluindo rascunhos)
   - `GET /api/blog/posts/:slug` - Buscar post por slug
   - `POST /api/blog/posts` - Criar novo post
   - `PUT /api/blog/posts/:id` - Atualizar post
   - `DELETE /api/blog/posts/:id` - Deletar post

2. **Banco de Dados** ([shared/schema.ts](shared/schema.ts))
   - Tabela `blog_posts` com campos completos:
     - `id`, `slug`, `title`, `excerpt`, `content`
     - `author`, `category`, `tags[]`
     - `imageUrl`, `readTime`
     - `published`, `publishedAt`
     - `createdAt`, `updatedAt`

3. **Página Pública do Blog** ([client/src/pages/blog.tsx](client/src/pages/blog.tsx))
   - Busca posts da API em tempo real
   - Filtros por categoria (Segurança, Normas, Casos, Manutenção)
   - Layout responsivo com cards
   - Loading states e error handling
   - Cache inteligente (5 minutos)
   - Analytics integrado

4. **Painel de Administração** ([client/src/pages/blog-admin.tsx](client/src/pages/blog-admin.tsx))
   - Interface completa de CRUD
   - Criar novos posts
   - Editar posts existentes
   - Deletar posts
   - Preview de rascunhos
   - Publicar/despublicar posts
   - Geração automática de slug
   - Formulário validado com React Hook Form

---

## 🚀 Como Usar

### 1. Acessar o Painel de Administração

Navegue para:
```
http://localhost:5000/blog/admin
```

ou em produção:
```
https://heightechalpinismo.com.br/blog/admin
```

### 2. Criar Seu Primeiro Post

1. Clique em **"Novo Post"**
2. Preencha os campos:
   - **Título**: O título do post (slug é gerado automaticamente)
   - **Resumo**: Breve descrição (aparece nos cards)
   - **Conteúdo**: Texto completo do artigo
   - **Autor**: Seu nome ou "Equipe Heightech"
   - **Categoria**: Escolha uma categoria
   - **Tags**: Separadas por vírgula (ex: "NR-35, Segurança, Alpinismo")
   - **URL da Imagem**: Link para imagem de capa (opcional)
   - **Tempo de Leitura**: Em minutos
   - **Publicar**: Marque para publicar imediatamente

3. Clique em **"Criar Post"**

### 3. Visualizar Posts

Acesse a página pública do blog:
```
http://localhost:5000/blog
```

Posts publicados aparecerão automaticamente!

---

## 📝 Exemplo de Post

Aqui está um exemplo de post que você pode criar:

```
Título: Guia Completo da NR-35: Tudo sobre Trabalho em Altura 2024

Slug: guia-completo-nr35-2024 (gerado automaticamente)

Resumo: Entenda todas as diretrizes da Norma Regulamentadora 35 e como garantir máxima segurança em trabalhos em altura.

Conteúdo:
A NR-35 estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente com esta atividade.

## O que é considerado trabalho em altura?

De acordo com a NR-35, considera-se trabalho em altura toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.

## Principais Requisitos

1. Capacitação dos trabalhadores
2. Planejamento e análise de risco
3. Equipamentos de proteção individual (EPIs)
4. Sistema de proteção contra quedas

... (continue o conteúdo)

Autor: Equipe Técnica Heightech

Categoria: normas

Tags: NR-35, Segurança, Legislação, Altura

URL da Imagem: https://images.unsplash.com/photo-1541888946425-d81bb19240f5

Tempo de Leitura: 8

☑️ Publicar imediatamente
```

---

## 🎨 Categorias Disponíveis

- **seguranca** - Segurança (EPIs, procedimentos, treinamentos)
- **normas** - Normas (NR-35, NR-33, IRATA, etc.)
- **casos** - Casos de Sucesso (projetos realizados)
- **manutencao** - Manutenção (dicas, cronogramas, técnicas)

---

## 📊 Fluxo de Publicação

### Modo Rascunho
1. Crie um post SEM marcar "Publicar imediatamente"
2. Post fica salvo como rascunho (não aparece no blog público)
3. Você pode editar e revisar quantas vezes quiser
4. Quando estiver pronto, edite e marque "Publicar"

### Modo Publicado
1. Crie um post COM "Publicar imediatamente" marcado
2. Post aparece instantaneamente no blog público
3. Campo `publishedAt` é preenchido automaticamente
4. Você pode editar a qualquer momento

---

## 🔧 Recursos Técnicos

### Geração Automática de Slug

O slug (URL amigável) é gerado automaticamente:
- Remove acentos
- Converte para minúsculas
- Substitui espaços por hífens
- Remove caracteres especiais

**Exemplo:**
```
Título: "Técnicas Avançadas de Impermeabilização em Altura"
Slug: "tecnicas-avancadas-de-impermeabilizacao-em-altura"
```

### Imagens

Se você não fornecer uma URL de imagem, o sistema usa uma imagem padrão baseada na categoria.

**Onde encontrar imagens gratuitas:**
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

### Tags

Use tags para melhorar a organização e SEO:
```
Boas práticas:
✅ "NR-35, Segurança, Legislação, Altura"
✅ "EPIs, Equipamentos, Cordas, Segurança"
❌ "nr35,seguranca,legislacao" (sem espaço após vírgula)
```

---

## 🔒 Segurança (TODO)

**IMPORTANTE:** Atualmente, o painel de administração está ABERTO (sem autenticação).

### Próximos Passos Recomendados:

1. **Adicionar Autenticação**
   - Proteger rota `/blog/admin` com login
   - Usar tabela `users` existente
   - Implementar sessão com Passport.js

2. **Permissões**
   - Apenas admins podem criar/editar/deletar
   - Visitantes só veem posts publicados

Por enquanto, você pode:
- Não compartilhar a URL `/blog/admin`
- Adicionar proteção via `.htaccess` ou NGINX
- Implementar autenticação básica temporária

---

## 📱 API Endpoints

### Listar Posts Publicados
```bash
GET /api/blog/posts
```

**Resposta:**
```json
{
  "success": true,
  "posts": [
    {
      "id": 1,
      "slug": "guia-nr35",
      "title": "Guia Completo da NR-35",
      "excerpt": "Entenda todas as diretrizes...",
      "content": "A NR-35 estabelece...",
      "author": "Equipe Heightech",
      "category": "normas",
      "tags": ["NR-35", "Segurança"],
      "imageUrl": "https://...",
      "readTime": 8,
      "published": true,
      "publishedAt": "2024-01-15T10:00:00.000Z",
      "createdAt": "2024-01-15T09:00:00.000Z",
      "updatedAt": "2024-01-15T09:00:00.000Z"
    }
  ]
}
```

### Criar Post
```bash
POST /api/blog/posts
Content-Type: application/json

{
  "title": "Meu Post",
  "slug": "meu-post",
  "excerpt": "Resumo...",
  "content": "Conteúdo completo...",
  "author": "João Silva",
  "category": "seguranca",
  "tags": ["Segurança", "EPIs"],
  "imageUrl": "https://...",
  "readTime": 5,
  "published": true,
  "publishedAt": "2024-01-15T10:00:00.000Z"
}
```

---

## 🎯 Boas Práticas de Conteúdo

### Estrutura de Post Ideal

1. **Título Atraente**
   - ✅ "Guia Completo da NR-35: Tudo sobre Trabalho em Altura 2024"
   - ❌ "NR-35"

2. **Resumo Descritivo**
   - 1-2 frases
   - Responde "por que ler este post?"
   - Inclui palavras-chave

3. **Conteúdo Formatado**
   - Use quebras de linha
   - Adicione subtítulos (## no Markdown)
   - Listas numeradas ou com bullets
   - Parágrafos curtos

4. **Imagens de Qualidade**
   - Resolução mínima: 800x400px
   - Relacionadas ao tema
   - Boa iluminação

5. **Tags Relevantes**
   - 3-5 tags por post
   - Palavras-chave importantes
   - Mix de termos gerais e específicos

### SEO Básico

- **Título**: 50-60 caracteres
- **Resumo**: 150-160 caracteres
- **Tags**: Palavras-chave principais
- **URL (slug)**: Curto e descritivo

---

## 🚀 Migração de Posts Antigos

Se você tinha posts hardcoded e quer migrar para o banco:

1. Acesse `/blog/admin`
2. Para cada post antigo:
   - Copie título, resumo, conteúdo
   - Crie um novo post no painel
   - Publique

Depois de migrar todos, os posts antigos podem ser removidos do código.

---

## 📊 Integração com Analytics

Os posts já estão integrados com o sistema de analytics:
- Cliques em "Ler mais" são trackados
- Filtros de categoria são trackados
- Conversões do blog são medidas

Você verá essas métricas no `/dashboard`!

---

## 🔮 Próximas Melhorias Sugeridas

### Curto Prazo
- [ ] Sistema de autenticação para `/blog/admin`
- [ ] Upload de imagens direto no painel
- [ ] Editor de texto rico (WYSIWYG)
- [ ] Preview do post antes de publicar

### Médio Prazo
- [ ] Comentários nos posts
- [ ] Sistema de busca no blog
- [ ] Posts relacionados automaticamente
- [ ] RSS Feed
- [ ] Compartilhamento social

### Longo Prazo
- [ ] Multi-autores com perfis
- [ ] Agendamento de publicações
- [ ] Versão multilíngue
- [ ] Newsletter integrada
- [ ] Analytics por post

---

## ✅ Checklist de Ativação

Antes de começar a usar em produção:

- [ ] Configurar PostgreSQL (ver [DASHBOARD_SETUP.md](DASHBOARD_SETUP.md))
- [ ] Executar `npm run db:push` para criar tabelas
- [ ] Acessar `/blog/admin` e criar primeiro post
- [ ] Testar visualização em `/blog`
- [ ] Adicionar autenticação ao painel admin (futuro)
- [ ] Criar política de backup dos posts

---

## 🆘 Troubleshooting

### "Nenhum post publicado ainda"
- Verifique se criou posts no `/blog/admin`
- Confirme que marcou "Publicar imediatamente"
- Veja se o banco de dados está configurado

### "Erro ao carregar posts"
- Verifique se o servidor está rodando
- Confirme que o PostgreSQL está conectado
- Veja os logs do servidor no terminal

### Post não aparece no blog público
- Confirme que o post está marcado como `published: true`
- Verifique se a data `publishedAt` está preenchida
- Recarregue a página do blog

### Slug duplicado
- Cada slug deve ser único
- O sistema impede slugs duplicados no banco
- Modifique o slug manualmente se necessário

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do servidor
2. Veja o console do navegador (F12 → Console)
3. Consulte a documentação do PostgreSQL
4. Revise este guia

**Tudo pronto para uso!** 🎊

Comece criando seus primeiros posts e compartilhando conhecimento sobre alpinismo industrial com seus clientes e visitantes!
