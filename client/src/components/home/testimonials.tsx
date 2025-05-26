import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "João Silva",
      role: "Síndico - Edifício Copacabana",
      content: "Excelente trabalho! A equipe da Heightech realizou a limpeza completa da nossa fachada com total profissionalismo. Recomendo sem hesitar.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Gerente de Facilities - Grupo XYZ",
      content: "Parceria de longa data. A Heightech sempre entrega serviços de qualidade superior, dentro do prazo e orçamento acordados.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor - Industrial ABC",
      content: "Profissionais extremamente competentes. Realizaram a manutenção dos nossos silos com máxima segurança e eficiência.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Depoimentos de clientes satisfeitos com nossos serviços profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-3">
                "{testimonial.content}"
              </p>
              <div className="flex text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
