import ServiceCard from "@/components/shared/service-card";
import { SprayCan, PaintBucket, Wrench, Shield, Search, Settings, Zap, TreePine } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: SprayCan,
      title: "Limpeza de Fachadas",
      description: "Lavagem e higienização profissional de superfícies externas com hidrojateamento e produtos especializados",
      features: [
        "Vidros e fachadas cortina",
        "Remoção de poluição e fuligem",
        "Limpeza pós-obra"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/limpeza-fachadas"
    },
    {
      icon: PaintBucket,
      title: "Pintura Predial",
      description: "Pintura e repintura de fachadas com preparação completa da superfície e produtos de alta qualidade",
      features: [
        "Preparação e selagem",
        "Pintura anticorrosiva",
        "Acabamento profissional"
      ],
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/pintura-predial"
    },
    {
      icon: Wrench,
      title: "Manutenção Predial",
      description: "Reparos e serviços de conservação em locais de difícil acesso, garantindo a integridade estrutural",
      features: [
        "Reparo de revestimentos",
        "Manutenção hidráulica",
        "Instalações elétricas"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/manutencao-predial"
    },
    {
      icon: Shield,
      title: "Impermeabilização",
      description: "Vedação de fissuras e aplicação de sistemas impermeabilizantes para proteção contra infiltrações",
      features: [
        "Selagem de fissuras",
        "Membranas protetivas",
        "Tratamento de juntas"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/impermeabilizacao"
    },
    {
      icon: Search,
      title: "Inspeção Técnica",
      description: "Avaliação detalhada de estruturas em altura para identificação de problemas e recomendações",
      features: [
        "Análise estrutural",
        "Relatórios técnicos",
        "Diagnóstico preciso"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/inspecao-tecnica"
    },
    {
      icon: Settings,
      title: "Instalação de Equipamentos",
      description: "Montagem e manutenção de equipamentos em locais de difícil acesso com máxima segurança",
      features: [
        "Sistemas de climatização",
        "Antenas e comunicação",
        "Letreiros e sinalização"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/instalacao-equipamentos"
    },
    {
      icon: Zap,
      title: "Soldas e Reparos Estruturais",
      description: "Soldas especializadas em altura e reparos estruturais em locais de difícil acesso",
      features: [
        "Soldas em estruturas metálicas",
        "Reparos de estruturas",
        "Reforços estruturais"
      ],
      image: "https://images.unsplash.com/photo-1565452884095-55b8d4cdb8b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/soldas-reparos"
    },
    {
      icon: TreePine,
      title: "Poda de Árvores em Altura",
      description: "Poda técnica e remoção de árvores próximas a estruturas e redes elétricas",
      features: [
        "Poda técnica especializada",
        "Remoção segura",
        "Próximo a redes elétricas"
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/poda-arvores"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
