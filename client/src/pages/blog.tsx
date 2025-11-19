import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, User, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/shared/optimized-image";
import { analytics } from "@/lib/analytics-tracker";
import { Link } from "wouter";

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

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Buscar posts da API usando React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: async () => {
      const response = await fetch('/api/blog/posts');
      if (!response.ok) {
        throw new Error('Erro ao carregar posts');
      }
      const result = await response.json();
      return result.posts as BlogPost[];
    },
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // Cache por 5 minutos
  });

  const blogPosts = data || [];

  const categories = [
    { id: "all", name: "Todos" },
    { id: "seguranca", name: "Segurança" },
    { id: "normas", name: "Normas" },
    { id: "casos", name: "Casos de Sucesso" },
    { id: "manutencao", name: "Manutenção" },
  ];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getDefaultImage = (category: string): string => {
    const defaultImages: Record<string, string> = {
      seguranca: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      normas: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      casos: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      manutencao: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    };
    return defaultImages[category] || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog Heightech
            </h1>
            <p className="text-xl text-blue-100">
              Notícias, dicas de segurança, normas técnicas e cases de sucesso em alpinismo industrial
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.id);
                  analytics.trackButtonClick('blog_filter', category.name);
                }}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <span className="ml-3 text-gray-600">Carregando posts...</span>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-600 mb-4">Erro ao carregar posts do blog.</p>
              <p className="text-gray-600">
                Por favor, tente novamente mais tarde ou entre em contato conosco.
              </p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                {selectedCategory === "all"
                  ? "Nenhum post publicado ainda. Em breve teremos novidades!"
                  : `Nenhum post encontrado na categoria "${categories.find(c => c.id === selectedCategory)?.name}".`
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Imagem do Post */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={post.imageUrl || getDefaultImage(post.category)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(c => c.id === post.category)?.name || post.category}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Post */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Informações */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Link para o Post Completo */}
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="link"
                        className="p-0 h-auto font-semibold text-blue-600 group-hover:text-blue-700"
                        onClick={() => analytics.trackButtonClick('blog_read_more', post.title)}
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Serviços de Alpinismo Industrial?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para seu projeto
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={() => analytics.trackButtonClick('blog_cta_contact', 'Blog CTA')}
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
