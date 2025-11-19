import ServiceCard from "@/components/shared/service-card";
import ServicesCarousel from "./services-carousel";
import { SprayCan, PaintBucket, Wrench, Shield, Search, Settings, Zap, Package, Lightbulb, Factory, Container, FileCheck, HardHat, Cpu, Map, Building2 } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: SprayCan,
      title: "Lavação Predial",
      description: "Lavagem e higienização profissional de superfícies externas com hidrojateamento e produtos especializados",
      features: [
        "Vidros e fachadas cortina",
        "Remoção de poluição e fuligem",
        "Limpeza pós-obra"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/lavacao-predial"
    },
    {
      icon: FileCheck,
      title: "Instalação e Teste de Pontos de Ancoragem",
      description: "Instalação certificada e teste de pontos de ancoragem com laudo técnico e ART para segurança em trabalhos em altura",
      features: [
        "Teste de carga e resistência",
        "Laudo técnico completo",
        "ART inclusa"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/pontos-ancoragem"
    },
    {
      icon: PaintBucket,
      title: "Restauração de Fachadas",
      description: "Pintura, aplicação de pastilhas, reboco e restauração completa de fachadas com técnicas especializadas",
      features: [
        "Pintura e repintura",
        "Aplicação de pastilhas",
        "Reboco e textura"
      ],
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/restauracao-fachadas"
    },
    {
      icon: Package,
      title: "Instalação de ACM e Fachada Ventilada",
      description: "Instalação de Aluminium Composite Material e fachada ventilada para revestimento moderno e durável",
      features: [
        "ACM profissional",
        "Fachada ventilada",
        "Estrutura de fixação"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/instalacao-acms"
    },
    {
      icon: Search,
      title: "Limpeza Fina de Vidros",
      description: "Limpeza especializada e polimento de vidros em altura com produtos específicos e acabamento profissional",
      features: [
        "Polimento especializado",
        "Produtos premium",
        "Sem manchas ou riscos"
      ],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/limpeza-vidros"
    },
    {
      icon: Shield,
      title: "Restauração de Vidros",
      description: "Restauração, polimento e tratamento de vidros danificados, removendo arranhões e manchas",
      features: [
        "Remoção de arranhões",
        "Polimento profissional",
        "Tratamento anti-manchas"
      ],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/restauracao-vidros"
    },
    {
      icon: Zap,
      title: "Içamento de Cargas",
      description: "Serviço especializado de içamento e movimentação de cargas em altura com máxima segurança",
      features: [
        "Equipamentos certificados",
        "Equipe especializada",
        "Planejamento detalhado"
      ],
      image: "https://images.unsplash.com/photo-1565452884095-55b8d4cdb8b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/icamento-cargas"
    },
    {
      icon: Settings,
      title: "Instalação de Banners e Letra Caixa",
      description: "Instalação profissional de banners, letreiros e letras caixa em fachadas e locais de altura",
      features: [
        "Banners e faixas",
        "Letras caixa iluminadas",
        "Fixação segura"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/banners-letra-caixa"
    },
    {
      icon: Lightbulb,
      title: "Instalação e Manutenção de LEDs",
      description: "Instalação e manutenção de sistemas de iluminação LED em fachadas e locais de difícil acesso",
      features: [
        "Fachadas de LED",
        "Letreiros luminosos",
        "Manutenção preventiva"
      ],
      image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/leds"
    },
    {
      icon: Wrench,
      title: "Vedação de Fachadas",
      description: "Vedação profissional de fachadas contra infiltrações, ventos e intempéries",
      features: [
        "Selagem de juntas",
        "Vedação de esquadrias",
        "Proteção contra infiltração"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/vedacao-fachadas"
    },
    {
      icon: Factory,
      title: "Pintura Industrial",
      description: "Pintura especializada para ambientes industriais com produtos anticorrosivos e de alta resistência",
      features: [
        "Pintura anticorrosiva",
        "Produtos industriais",
        "Alta durabilidade"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/pintura-industrial"
    },
    {
      icon: Container,
      title: "Limpeza de Silos",
      description: "Limpeza especializada de silos industriais com técnicas de acesso por corda e segurança total",
      features: [
        "Limpeza interna e externa",
        "Técnicas especializadas",
        "Segurança certificada"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/limpeza-silos"
    },
    {
      icon: HardHat,
      title: "Trabalhos Diversos Industriais",
      description: "Soluções completas para diversos trabalhos industriais em altura com equipe especializada",
      features: [
        "Serviços personalizados",
        "Equipe multidisciplinar",
        "Segurança certificada"
      ],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/trabalhos-industriais"
    },
    {
      icon: Cpu,
      title: "Manutenções Elétricas e Eletrônicas",
      description: "Manutenção e instalação de sistemas elétricos e eletrônicos em locais de difícil acesso",
      features: [
        "Manutenção elétrica",
        "Sistemas eletrônicos",
        "Equipe certificada"
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/manutencoes-eletricas"
    },
    {
      icon: Map,
      title: "Mapeamento de Fachadas",
      description: "Inspeção e mapeamento técnico de fachadas para identificação de patologias e necessidades de manutenção",
      features: [
        "Inspeção detalhada",
        "Relatório técnico",
        "Registro fotográfico"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/mapeamento-fachadas"
    },
    {
      icon: Building2,
      title: "Reforma Predial",
      description: "Reformas e modernizações prediais completas com técnicas de alpinismo industrial",
      features: [
        "Reforma completa",
        "Modernização",
        "Acabamento profissional"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/reforma-predial"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços Especializados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em altura com técnicas de acesso por corda, seguindo as normas NR-35 e certificações internacionais
          </p>
        </div>

        {/* Mobile Carousel */}
        <ServicesCarousel />

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
