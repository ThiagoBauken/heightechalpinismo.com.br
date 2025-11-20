/**
 * BlogPosting Schema.org for AI Discoverability
 * Helps search engines and AIs understand blog content
 */

export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  imageUrl?: string;
  slug: string;
  category: string;
  tags?: string[];
  readTime?: number;
}

export function generateBlogPostingSchema(
  post: BlogPost,
  siteUrl: string = 'https://heightechalpinismo.com.br'
) {
  const url = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.imageUrl || `${siteUrl}/og-image.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl,
    "datePublished": post.publishedAt.toISOString(),
    "dateModified": (post.updatedAt || post.publishedAt).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Heightech Alpinismo Industrial",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleBody": post.content,
    "articleSection": post.category,
    "keywords": post.tags?.join(', '),
    "timeRequired": post.readTime ? `PT${post.readTime}M` : undefined,
    "inLanguage": "pt-BR",
    "isAccessibleForFree": true,
    "author": {
      "@type": "Organization",
      "name": "Equipe Heightech",
      "url": siteUrl
    }
  };
}

// Helper para injetar blog schema no head
export function injectBlogPostingSchema(post: BlogPost) {
  if (typeof window === 'undefined') return;

  // Remove schema antigo se existir
  const existingSchema = document.getElementById('blog-schema');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Cria novo schema
  const script = document.createElement('script');
  script.id = 'blog-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(generateBlogPostingSchema(post));
  document.head.appendChild(script);
}

// Blog list schema (for main blog page)
export function generateBlogListSchema(
  posts: BlogPost[],
  siteUrl: string = 'https://heightechalpinismo.com.br'
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Heightech - Alpinismo Industrial",
    "description": "Artigos sobre alpinismo industrial, trabalho em altura, segurança em NR-35, manutenção predial e técnicas de acesso por corda.",
    "url": `${siteUrl}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Heightech Alpinismo Industrial",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "blogPost": posts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `${siteUrl}/blog/${post.slug}`,
      "datePublished": post.publishedAt.toISOString(),
      "image": post.imageUrl
    }))
  };
}
