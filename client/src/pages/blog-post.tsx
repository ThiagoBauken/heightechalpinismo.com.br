import { useRoute, Link } from "wouter";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/shared/optimized-image";
import SEOHead from "@/components/shared/seo-head";

// Mesma interface e dados do blog.tsx
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

const blogPosts: BlogPost[] = [
  {
    id: "nr35-completa-2024",
    title: "Guia Completo da NR-35: Tudo sobre Trabalho em Altura 2024",
    excerpt: "Entenda todas as diretrizes da Norma Regulamentadora 35 e como garantir máxima segurança em trabalhos em altura.",
    content: `
      <h2>O que é a NR-35?</h2>
      <p>A NR-35 estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente com esta atividade.</p>

      <h2>Principais Pontos da NR-35</h2>
      <h3>1. Definição de Trabalho em Altura</h3>
      <p>Considera-se trabalho em altura toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.</p>

      <h3>2. Responsabilidades do Empregador</h3>
      <ul>
        <li>Garantir a implementação das medidas de proteção estabelecidas na NR-35</li>
        <li>Assegurar a realização da Análise de Risco (AR) e a emissão da Permissão de Trabalho (PT)</li>
        <li>Desenvolver procedimento operacional para as atividades rotineiras</li>
        <li>Assegurar a realização de avaliação prévia das condições no local do trabalho</li>
      </ul>

      <h3>3. Capacitação e Treinamento</h3>
      <p>O empregador deve promover programa para capacitação dos trabalhadores à realização de trabalho em altura, com carga horária mínima de oito horas e conteúdo programático que inclua:</p>
      <ul>
        <li>Normas e regulamentos aplicáveis ao trabalho em altura</li>
        <li>Análise de Risco e condições impeditivas</li>
        <li>Riscos potenciais inerentes ao trabalho em altura e medidas de prevenção</li>
        <li>Sistemas, equipamentos e procedimentos de proteção coletiva</li>
        <li>Equipamentos de Proteção Individual: seleção, inspeção, conservação e limitação de uso</li>
      </ul>

      <h2>Equipamentos de Proteção</h2>
      <p>A NR-35 exige o uso de equipamentos de proteção individual (EPIs) adequados, incluindo:</p>
      <ul>
        <li>Cinturão de segurança tipo paraquedista</li>
        <li>Trava-quedas</li>
        <li>Talabarte</li>
        <li>Capacete com jugular</li>
        <li>Mosquetões</li>
      </ul>

      <h2>Conclusão</h2>
      <p>A NR-35 é fundamental para garantir a segurança dos trabalhadores em altura. O cumprimento rigoroso dessas normas não apenas protege vidas, mas também reduz custos com acidentes e afastamentos.</p>
    `,
    author: "Equipe Técnica Heightech",
    date: "2024-01-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "normas",
    tags: ["NR-35", "Segurança", "Legislação", "Altura"]
  },
  {
    id: "equipamentos-seguranca-alpinismo",
    title: "Equipamentos de Segurança em Alpinismo Industrial: Lista Essencial",
    excerpt: "Conheça todos os equipamentos obrigatórios e suas funções para garantir a segurança total em trabalhos de altura.",
    content: `
      <h2>Equipamentos Essenciais para Alpinismo Industrial</h2>
      <p>Os equipamentos de proteção individual (EPIs) são fundamentais para a segurança em trabalhos de altura. Conheça os principais equipamentos e suas funções.</p>

      <h3>1. Cinturão de Segurança Tipo Paraquedista</h3>
      <p>O cinturão tipo paraquedista é o EPI mais importante para trabalhos em altura. Ele distribui as forças de impacto por todo o corpo em caso de queda, minimizando lesões.</p>

      <h3>2. Trava-quedas</h3>
      <p>O trava-quedas é um dispositivo de segurança que trava automaticamente a corda em caso de queda, impedindo que o trabalhador caia.</p>

      <h2>Conclusão</h2>
      <p>O uso correto dos EPIs é fundamental para garantir a segurança em trabalhos de altura.</p>
    `,
    author: "João Silva",
    date: "2024-01-10",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "seguranca",
    tags: ["EPIs", "Equipamentos", "Cordas", "Segurança"]
  },
  {
    id: "caso-estudo-limpeza-fachada-comercial",
    title: "Caso de Estudo: Limpeza de Fachada de Edifício Comercial de 30 Andares",
    excerpt: "Acompanhe como executamos com sucesso a limpeza completa de um edifício comercial em São Paulo.",
    content: `<h2>O Desafio</h2><p>Este projeto desafiador envolveu a limpeza de 5.000m² de fachada em vidro e granito de um edifício comercial icônico localizado na Avenida Paulista.</p><h2>Planejamento</h2><p>Nossa equipe realizou uma inspeção detalhada e desenvolveu um plano de trabalho considerando o alto fluxo de pessoas e veículos na região.</p><h2>Execução</h2><p>O trabalho foi realizado em 15 dias, utilizando técnicas de rapel e plataformas elevatórias, com equipe de 8 profissionais certificados.</p><h2>Resultados</h2><p>Fachada completamente limpa, sem danos ao revestimento, zero acidentes e satisfação total do cliente.</p>`,
    author: "Maria Santos",
    date: "2024-01-05",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "casos",
    tags: ["Limpeza", "Fachada", "Caso Real", "Edifício Comercial"]
  },
  {
    id: "manutencao-preventiva-predios",
    title: "Manutenção Preventiva em Prédios: Cronograma e Benefícios",
    excerpt: "Descubra como um programa de manutenção preventiva pode economizar até 40% em custos de reparo.",
    content: `<h2>Por que Manutenção Preventiva?</h2><p>A manutenção preventiva é essencial para preservar a vida útil dos edifícios e evitar reparos emergenciais custosos.</p><h2>Cronograma Recomendado</h2><ul><li>Inspeção visual: Mensal</li><li>Limpeza de fachadas: Semestral</li><li>Impermeabilização: Anual</li><li>Pintura: A cada 3-5 anos</li></ul><h2>Benefícios Comprovados</h2><p>Economia de até 40% em custos de reparo, valorização do imóvel, segurança garantida e conformidade com normas técnicas.</p>`,
    author: "Carlos Oliveira",
    date: "2023-12-28",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "manutencao",
    tags: ["Manutenção", "Preventiva", "Economia", "Planejamento"]
  },
  {
    id: "certificacao-irata-alpinismo",
    title: "Certificação IRATA: Por que é Importante no Alpinismo Industrial",
    excerpt: "Entenda os benefícios da certificação internacional IRATA e como ela garante a qualidade dos serviços.",
    content: `<h2>O que é IRATA?</h2><p>A IRATA (International Rope Access Trade Association) é o padrão internacional de excelência em trabalhos de acesso por corda.</p><h2>Níveis de Certificação</h2><p>Nível 1: Técnico, Nível 2: Supervisor, Nível 3: Inspetor/Instrutor. Cada nível requer treinamento específico e experiência comprovada.</p><h2>Por que Escolher Profissionais IRATA</h2><p>Garantia de segurança, qualidade internacional, conformidade com padrões globais e redução de riscos.</p>`,
    author: "Equipe Técnica Heightech",
    date: "2023-12-20",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "normas",
    tags: ["IRATA", "Certificação", "Qualidade", "Internacional"]
  },
  {
    id: "impermeabilizacao-altura-tecnicas",
    title: "Técnicas Avançadas de Impermeabilização em Altura",
    excerpt: "Conheça as melhores técnicas e materiais para impermeabilização de estruturas em altura.",
    content: `<h2>Tipos de Impermeabilização</h2><p>Mantas asfálticas, membranas de PVC, poliuretano e sistemas cimentícios. Cada tipo adequado para diferentes aplicações.</p><h2>Preparação da Superfície</h2><p>Limpeza completa, correção de fissuras e regularização são etapas críticas para o sucesso.</p><h2>Aplicação em Altura</h2><p>Técnicas especializadas de alpinismo industrial garantem aplicação uniforme mesmo em locais de difícil acesso.</p>`,
    author: "Roberto Costa",
    date: "2023-12-15",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "casos",
    tags: ["Impermeabilização", "Técnicas", "Materiais", "Altura"]
  },
  {
    id: "nr18-construcao-civil",
    title: "NR-18: Segurança na Construção Civil e Trabalho em Altura",
    excerpt: "Como a NR-18 complementa a NR-35 e garante segurança total em canteiros de obra.",
    content: `<h2>Escopo da NR-18</h2><p>A NR-18 estabelece diretrizes de segurança para a indústria da construção civil, incluindo trabalhos em altura em canteiros de obras.</p><h2>Principais Requisitos</h2><p>Proteções coletivas (guarda-corpos, redes), andaimes seguros, plataformas de trabalho adequadas e sinalização de áreas de risco.</p><h2>Complemento à NR-35</h2><p>Enquanto a NR-35 foca em trabalho em altura em geral, a NR-18 traz especificidades para a construção civil.</p>`,
    author: "Equipe Técnica Heightech",
    date: "2024-01-20",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "normas",
    tags: ["NR-18", "Construção Civil", "Segurança", "Canteiro"]
  },
  {
    id: "inspecao-fachadas-vidro",
    title: "Inspeção de Fachadas em Vidro: O que Verificar",
    excerpt: "Checklist completo para inspeção técnica de fachadas envidraçadas e identificação de problemas.",
    content: `<h2>Pontos de Inspeção</h2><p>Verificação de fixações, silicone estrutural, vedações, integridade do vidro e sistemas de drenagem.</p><h2>Problemas Comuns</h2><p>Desgaste de silicone, infiltrações, corrosão de fixadores e quebras por tensão térmica.</p><h2>Periodicidade</h2><p>Inspeção visual: Semestral. Inspeção técnica detalhada: Anual. Manutenção preventiva conforme laudo.</p>`,
    author: "Ana Paula Ferreira",
    date: "2024-01-18",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "manutencao",
    tags: ["Inspeção", "Vidro", "Fachada", "Manutenção"]
  },
  {
    id: "ancoragem-pontos-seguros",
    title: "Pontos de Ancoragem: Como Escolher e Instalar Corretamente",
    excerpt: "Guia completo sobre seleção, instalação e manutenção de pontos de ancoragem para trabalho em altura.",
    content: `<h2>Tipos de Ancoragem</h2><p>Permanentes (fixos na estrutura) e temporários (instalados conforme necessidade). Cada tipo tem aplicações específicas.</p><h2>Critérios de Instalação</h2><p>Resistência mínima de 2.200 kgf por trabalhador, fixação em estrutura certificada e posicionamento estratégico.</p><h2>Inspeção e Manutenção</h2><p>Inspeção visual antes de cada uso e inspeção técnica anual com laudo de engenheiro.</p>`,
    author: "Fernando Alves",
    date: "2024-01-12",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1590065707529-f760eb5f95cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "seguranca",
    tags: ["Ancoragem", "Instalação", "Segurança", "EPCs"]
  },
  {
    id: "restauracao-fachadas-historicas",
    title: "Restauração de Fachadas Históricas: Desafios e Técnicas",
    excerpt: "Como restaurar fachadas de edifícios históricos preservando suas características originais.",
    content: `<h2>Preservação do Patrimônio</h2><p>A restauração de edificações históricas exige técnicas especializadas e respeito ao patrimônio cultural.</p><h2>Técnicas Especiais</h2><p>Limpeza com jateamento suave, restauração de ornamentos, aplicação de argamassas especiais compatíveis com materiais originais.</p><h2>Desafios</h2><p>Trabalhar em estruturas antigas, preservar características originais e atender normas de preservação histórica.</p>`,
    author: "Patricia Lima",
    date: "2024-01-08",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1548585744-a7f2f3f9d9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "casos",
    tags: ["Restauração", "Patrimônio", "Histórico", "Preservação"]
  },
  {
    id: "limpeza-silos-industriais",
    title: "Limpeza de Silos Industriais: Procedimentos de Segurança",
    excerpt: "Protocolos essenciais para limpeza segura de silos em ambientes confinados.",
    content: `<h2>Riscos em Espaços Confinados</h2><p>A limpeza de silos é uma atividade de alto risco que requer protocolos rigorosos da NR-33.</p><h2>Procedimentos de Segurança</h2><p>Medição de gases, ventilação forçada, equipe de resgate externa, comunicação permanente e EPIs específicos.</p><h2>Técnicas de Limpeza</h2><p>Limpeza manual, aspiração industrial e jateamento, dependendo do material armazenado.</p>`,
    author: "Marcos Ribeiro",
    date: "2024-01-03",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "seguranca",
    tags: ["Silos", "Espaço Confinado", "NR-33", "Limpeza"]
  },
  {
    id: "instalacao-led-fachadas",
    title: "Instalação de LEDs em Fachadas: Projeto e Execução",
    excerpt: "Passo a passo para instalação profissional de iluminação LED em fachadas comerciais.",
    content: `<h2>Planejamento do Projeto</h2><p>A instalação de LEDs em fachadas combina técnicas de alpinismo com conhecimento elétrico especializado.</p><h2>Execução</h2><p>Fixação de trilhos, passagem de cabos, instalação de módulos LED e testes de funcionamento.</p><h2>Manutenção</h2><p>LEDs modernos têm vida útil de 50.000+ horas, mas requerem inspeções periódicas de conexões e drivers.</p>`,
    author: "Thiago Mendes",
    date: "2023-12-30",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "casos",
    tags: ["LED", "Iluminação", "Fachada", "Instalação"]
  },
  {
    id: "nr33-espacos-confinados",
    title: "NR-33: Segurança em Espaços Confinados",
    excerpt: "Tudo sobre a norma que regula trabalhos em tanques, silos e outros espaços confinados.",
    content: `<h2>O que é Espaço Confinado</h2><p>A NR-33 define espaço confinado como qualquer área não projetada para ocupação humana contínua com ventilação insuficiente.</p><h2>Medidas Obrigatórias</h2><p>Permissão de Entrada e Trabalho (PET), vigia permanente, medição de atmosfera e equipe de resgate treinada.</p><h2>EPIs Específicos</h2><p>Detector de gases, respirador, linha de vida, comunicação e iluminação à prova de explosão.</p>`,
    author: "Equipe Técnica Heightech",
    date: "2023-12-25",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1513828742301-8b4eb7fc95a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "normas",
    tags: ["NR-33", "Espaço Confinado", "Segurança", "Legislação"]
  },
  {
    id: "pintura-industrial-altura",
    title: "Pintura Industrial em Altura: Materiais e Técnicas",
    excerpt: "Conheça as melhores práticas e materiais para pintura industrial em estruturas elevadas.",
    content: `<h2>Tipos de Revestimentos</h2><p>Epóxi, poliuretano, acrílico e esmaltes sintéticos. Cada um adequado para diferentes ambientes e necessidades.</p><h2>Preparação da Superfície</h2><p>Limpeza, lixamento, aplicação de primer anticorrosivo e tratamento de pontos de ferrugem.</p><h2>Técnicas de Aplicação</h2><p>Pistola airless, rolo ou pincel, dependendo da área e tipo de superfície. Aplicação em múltiplas demãos.</p>`,
    author: "Lucas Andrade",
    date: "2023-12-18",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "manutencao",
    tags: ["Pintura", "Industrial", "Revestimento", "Proteção"]
  },
  {
    id: "caso-icamento-equipamentos-pesados",
    title: "Caso de Estudo: Içamento de Equipamentos de 5 Toneladas",
    excerpt: "Como realizamos com sucesso o içamento de equipamentos industriais pesados em edifício de 20 andares.",
    content: `<h2>O Desafio</h2><p>Este projeto complexo envolveu o içamento de um chiller de ar condicionado de 5 toneladas até o 20º andar de um edifício comercial.</p><h2>Planejamento</h2><p>Análise estrutural, cálculo de carga, seleção de equipamentos (talhas de 10 ton) e logística de acesso.</p><h2>Execução</h2><p>Trabalho realizado em período noturno, equipe de 12 profissionais, içamento gradual com pausas para inspeção.</p><h2>Resultado</h2><p>Equipamento instalado com sucesso, zero danos e conformidade total com normas de segurança.</p>`,
    author: "Ricardo Santos",
    date: "2023-12-10",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "casos",
    tags: ["Içamento", "Equipamentos", "Logística", "Caso Real"]
  },
  {
    id: "primeiros-socorros-altura",
    title: "Primeiros Socorros em Trabalhos de Altura",
    excerpt: "Protocolos de emergência e primeiros socorros específicos para acidentes em altura.",
    content: `<h2>Preparação para Emergências</h2><p>Saber agir rapidamente em caso de acidente em altura pode salvar vidas. Todo trabalhador deve ter treinamento básico.</p><h2>Síndrome do Suspensão</h2><p>Risco grave em quedas com trava-quedas. Resgate deve ocorrer em até 15 minutos para evitar complicações graves.</p><h2>Protocolos de Resgate</h2><p>Comunicação imediata, estabilização da vítima, descida controlada e atendimento médico especializado.</p><h2>Kit de Primeiros Socorros</h2><p>Além do kit básico, incluir maca de resgate, tala cervical e equipamentos de descida de emergência.</p>`,
    author: "Dra. Juliana Martins",
    date: "2023-12-05",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    category: "seguranca",
    tags: ["Primeiros Socorros", "Emergência", "Resgate", "Saúde"]
  }
];

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = blogPosts.find(p => p.id === params?.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
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
        keywords={post.tags}
        ogImage={post.image}
      />

      {/* Hero Image */}
      <div className="w-full h-[400px] relative">
        <OptimizedImage
          src={post.image}
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
            {post.category === "seguranca" && "Segurança"}
            {post.category === "normas" && "Normas"}
            {post.category === "casos" && "Casos de Estudo"}
            {post.category === "manutencao" && "Manutenção"}
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
              <span>{new Date(post.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} de leitura</span>
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
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
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

        {/* Related Posts - Opcional */}
        <div className="mt-12 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
