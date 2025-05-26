import { Award, Users, Building, Clock } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Building,
      number: "500+",
      label: "Projetos Concluídos",
      description: "Edifícios e estruturas atendidas"
    },
    {
      icon: Users,
      number: "15+",
      label: "Anos de Experiência",
      description: "Especialistas em alpinismo industrial"
    },
    {
      icon: Award,
      number: "100%",
      label: "Segurança",
      description: "Zero acidentes em nossos projetos"
    },
    {
      icon: Clock,
      number: "24h",
      label: "Atendimento",
      description: "Suporte para emergências"
    }
  ];

  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Números que Comprovam Nossa Excelência
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conquistamos a confiança de nossos clientes através de resultados consistentes e segurança total
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}