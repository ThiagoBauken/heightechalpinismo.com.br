import { useState } from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/shared/optimized-image";
import { analytics } from "@/lib/analytics-tracker";
import { Link } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: "seguranca" | "normas" | "casos" | "manutencao";
  tags: string[];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const blogPosts: BlogPost[] = [
    {
      id: "nr35-completa-2024",
      title: "Guia Completo da NR-35: Tudo sobre Trabalho em Altura 2024",
      excerpt: "Entenda todas as diretrizes da Norma Regulamentadora 35 e como garantir máxima segurança em trabalhos em altura.",
      content: "A NR-35 estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura...",
      author: "Equipe Técnica Heightech",
      date: "2024-01-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "normas",
      tags: ["NR-35", "Segurança", "Legislação", "Altura"]
    },
    {
      id: "equipamentos-seguranca-alpinismo",
      title: "Equipamentos de Segurança em Alpinismo Industrial: Lista Essencial",
      excerpt: "Conheça todos os equipamentos obrigatórios e suas funções para garantir a segurança total em trabalhos de altura.",
      content: "Os equipamentos de proteção individual (EPIs) são fundamentais para a segurança...",
      author: "João Silva",
      date: "2024-01-10",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "seguranca",
      tags: ["EPIs", "Equipamentos", "Cordas", "Segurança"]
    },
    {
      id: "caso-estudo-limpeza-fachada-comercial",
      title: "Caso de Estudo: Limpeza de Fachada de Edifício Comercial de 30 Andares",
      excerpt: "Acompanhe como executamos com sucesso a limpeza completa de um edifício comercial em São Paulo.",
      content: "Este projeto desafiador envolveu a limpeza de 5.000m² de fachada em vidro e granito...",
      author: "Maria Santos",
      date: "2024-01-05",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "casos",
      tags: ["Limpeza", "Fachada", "Caso Real", "Edifício Comercial"]
    },
    {
      id: "manutencao-preventiva-predios",
      title: "Manutenção Preventiva em Prédios: Cronograma e Benefícios",
      excerpt: "Descubra como um programa de manutenção preventiva pode economizar até 40% em custos de reparo.",
      content: "A manutenção preventiva é essencial para preservar a vida útil dos edifícios...",
      author: "Carlos Oliveira",
      date: "2023-12-28",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "manutencao",
      tags: ["Manutenção", "Preventiva", "Economia", "Planejamento"]
    },
    {
      id: "certificacao-irata-alpinismo",
      title: "Certificação IRATA: Por que é Importante no Alpinismo Industrial",
      excerpt: "Entenda os benefícios da certificação internacional IRATA e como ela garante a qualidade dos serviços.",
      content: "A IRATA (International Rope Access Trade Association) é o padrão internacional...",
      author: "Equipe Técnica Heightech",
      date: "2023-12-20",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "normas",
      tags: ["IRATA", "Certificação", "Qualidade", "Internacional"]
    },
    {
      id: "impermeabilizacao-altura-tecnicas",
      title: "Técnicas Avançadas de Impermeabilização em Altura",
      excerpt: "Conheça as melhores técnicas e materiais para impermeabilização de estruturas em altura.",
      content: "A impermeabilização em altura requer técnicas especializadas e materiais adequados...",
      author: "Roberto Costa",
      date: "2023-12-15",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      category: "casos",
      tags: ["Impermeabilização", "Técnicas", "Materiais", "Altura"]
    }
  ];

  const categories = [
    { id: "all", label: "Todos os Posts", count: blogPosts.length },
    { id: "seguranca", label: "Segurança", count: blogPosts.filter(p => p.category === "seguranca").length },
    { id: "normas", label: "Normas", count: blogPosts.filter(p => p.category === "normas").length },
    { id: "casos", label: "Casos de Estudo", count: blogPosts.filter(p => p.category === "casos").length },
    { id: "manutencao", label: "Manutenção", count: blogPosts.filter(p => p.category === "manutencao").length }
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handlePostClick = (post: BlogPost) => {
    analytics.trackEvent('blog_post_click', {
      postId: post.id,
      postTitle: post.title,
      category: post.category
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog Técnico Heightech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos especializados sobre alpinismo industrial, normas de segurança, 
            casos de estudo e dicas técnicas para profissionais do setor
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filtros de Categoria */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              {/* Imagem */}
              <div className="aspect-[16/9] overflow-hidden">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={225}
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                {/* Metadados */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Autor e CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="bg-white rounded-xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Receba Nossos Artigos por Email
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Cadastre-se para receber nossos artigos técnicos, dicas de segurança 
            e novidades do setor de alpinismo industrial diretamente no seu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <Button className="bg-primary hover:bg-red-700">
              Cadastrar
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}