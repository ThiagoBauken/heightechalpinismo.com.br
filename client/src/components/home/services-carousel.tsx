import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/shared/service-card";
import { SprayCan, PaintBucket, Wrench, Shield, Search, Settings, Zap, TreePine } from "lucide-react";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: SprayCan,
      title: "Limpeza de Fachadas",
      description: "Limpeza especializada de fachadas prediais com técnicas avançadas e produtos específicos",
      features: [
        "Limpeza química especializada",
        "Remoção de poluição urbana",
        "Restauração do visual original"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/limpeza-fachadas"
    },
    {
      icon: PaintBucket,
      title: "Pintura Predial",
      description: "Pintura externa de edifícios com acabamento profissional e materiais de alta qualidade",
      features: [
        "Tintas especiais para altura",
        "Proteção contra intempéries",
        "Acabamento profissional"
      ],
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/pintura-predial"
    },
    {
      icon: Wrench,
      title: "Manutenção Predial",
      description: "Manutenção preventiva e corretiva em estruturas prediais com acesso por corda",
      features: [
        "Manutenção preventiva",
        "Reparos estruturais",
        "Inspeções regulares"
      ],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/manutencao-predial"
    },
    {
      icon: Shield,
      title: "Impermeabilização",
      description: "Aplicação de sistemas de impermeabilização para proteção contra infiltrações",
      features: [
        "Sistemas avançados",
        "Proteção duradoura",
        "Garantia estendida"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      href: "/servicos/impermeabilizacao"
    },
    {
      icon: Search,
      title: "Inspeção Técnica",
      description: "Laudos técnicos e inspeções detalhadas de estruturas prediais em altura",
      features: [
        "Laudos técnicos",
        "Relatórios detalhados",
        "Certificações"
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

  const itemsPerPage = 1;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="md:hidden">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}