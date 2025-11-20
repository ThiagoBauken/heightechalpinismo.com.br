import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, User, ArrowLeft, Tag, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/shared/optimized-image";
import SEOHead from "@/components/shared/seo-head";
import ReactMarkdown from 'react-markdown';

// Interface do blog post da API
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[] | null;
  imageUrl: string | null;
  readTime: number;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// Posts agora vêm da API

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // Buscar post da API
  const { data: post, isLoading, error } = useQuery({
    queryKey: [`/api/blog/posts/${slug}`],
    queryFn: async () => {
      if (!slug) throw new Error('Slug não encontrado');
      const response = await fetch(`/api/blog/posts/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post não encontrado');
        }
        throw new Error('Erro ao carregar post');
      }
      const result = await response.json();
      return result.post as BlogPost;
    },
    enabled: !!slug,
    refetchOnWindowFocus: false,
  });

  const categories: Record<string, string> = {
    seguranca: "Segurança",
    normas: "Normas",
    casos: "Casos de Sucesso",
    manutencao: "Manutenção",
    servicos: "Serviços",
    tecnicas: "Técnicas",
    guias: "Guias"
  };

  const getDefaultImage = (category: string): string => {
    const defaultImages: Record<string, string> = {
      seguranca: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      normas: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      casos: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      manutencao: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      servicos: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      tecnicas: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      guias: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
    };
    return defaultImages[category] || defaultImages.seguranca;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Carregando post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
          <p className="text-gray-600 mb-6">
            {error instanceof Error ? error.message : 'O post que você procura não existe ou foi removido.'}
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={post.tags || []}
        ogImage={post.imageUrl || getDefaultImage(post.category)}
      />

      {/* Hero Image */}
      <div className="w-full h-[400px] relative">
        <OptimizedImage
          src={post.imageUrl || getDefaultImage(post.category)}
          alt={post.title}
          className="w-full h-full object-cover"
          width={1200}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="outline" className="mb-6 bg-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>
        </Link>

        {/* Post Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {categories[post.category] || post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} min de leitura</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-li:text-gray-700
              prose-strong:text-gray-900 prose-strong:font-semibold"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
              <Tag className="w-5 h-5 text-gray-400" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Precisa de Serviços de Alpinismo Industrial?
            </h3>
            <p className="text-gray-600 mb-4">
              Entre em contato conosco para um orçamento personalizado
            </p>
            <Link href="/contato">
              <Button className="bg-primary hover:bg-red-700">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
