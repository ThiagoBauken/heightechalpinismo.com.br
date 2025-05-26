import ServiceCard from "@/components/shared/service-card";
import { SprayCan, PaintBucket, Wrench, Shield, Search, Settings } from "lucide-react";

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
      image: "https://pixabay.com/get/g19c21d3600343bf32c923ec16bab42a043ef2c7430c8451d33f1575a50bfbe15d02940f6f65a808ad7f594946408f0a5825a512fcf86887c564bdbe4320e5eb8_1280.jpg",
      href: "/servicos/instalacao-equipamentos"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
