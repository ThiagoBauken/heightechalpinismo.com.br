import { useEffect, useState, useRef } from "react";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOutQuad));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold text-primary">
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </div>
  );
}

export default function SocialProof() {
  const stats = [
    {
      icon: Building2,
      value: 500,
      suffix: "+",
      label: "Projetos Concluídos",
      description: "Em todo o Brasil"
    },
    {
      icon: Users,
      value: 300,
      suffix: "+",
      label: "Clientes Satisfeitos",
      description: "Empresas e condomínios"
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Anos de Experiência",
      description: "No mercado"
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Taxa de Satisfação",
      description: "Avaliação dos clientes"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais de uma década transformando fachadas e garantindo segurança em altura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Ícone */}
                  <div className="mb-4 p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Contador Animado */}
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {stat.label}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-gray-600 mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Certificação NR-35</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Profissionais Treinados</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Equipamentos de Ponta</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Seguro Total</span>
          </div>
        </div>
      </div>
    </section>
  );
}
