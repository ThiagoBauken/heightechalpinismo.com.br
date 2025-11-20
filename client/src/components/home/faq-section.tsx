import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que é alpinismo industrial?",
      answer: "Alpinismo industrial é uma técnica de acesso por corda que permite trabalhar em locais de altura de forma segura e eficiente. É utilizado para manutenção, limpeza, pintura e instalação em edifícios, pontes, torres e outras estruturas elevadas."
    },
    {
      question: "Quais certificações a Heightech possui?",
      answer: "Nossa equipe é certificada pela NR-35 (Norma Regulamentadora de Trabalho em Altura) e possui certificações IRATA (International Rope Access Trade Association). Todos os profissionais passam por treinamentos regulares e reciclagem de conhecimentos."
    },
    {
      question: "A Heightech atende emergências?",
      answer: "Sim! Oferecemos atendimento 24 horas para situações de emergência. Nossa equipe está preparada para responder rapidamente a chamados urgentes, garantindo segurança e qualidade mesmo em situações críticas."
    },
    {
      question: "Quais regiões a Heightech atende?",
      answer: "Atendemos principalmente Balneário Camboriú, Itapema e toda a região Sul do Brasil (Santa Catarina, Paraná e Rio Grande do Sul). Trabalhamos nos maiores edifícios da região. Para projetos em outras localidades, fazemos uma avaliação específica. Entre em contato para verificar disponibilidade."
    },
    {
      question: "Como é feito o orçamento dos serviços?",
      answer: "O orçamento é gratuito e personalizado. Nossa equipe técnica realiza uma visita ao local para avaliar as necessidades específicas, condições de acesso, complexidade do trabalho e prazo desejado. Com base nessa análise, elaboramos uma proposta detalhada."
    },
    {
      question: "Quanto tempo leva para executar um projeto?",
      answer: "O prazo varia conforme a complexidade e tamanho do projeto. Serviços simples podem ser executados em 1-2 dias, enquanto projetos maiores podem levar algumas semanas. Sempre respeitamos os prazos acordados e mantemos comunicação constante com o cliente."
    },
    {
      question: "A Heightech tem seguro para os trabalhos?",
      answer: "Sim, todos os nossos serviços são cobertos por seguro de responsabilidade civil. Além disso, seguimos rigorosamente as normas de segurança para garantir zero acidentes em nossos projetos."
    },
    {
      question: "Vocês trabalham em qualquer tipo de clima?",
      answer: "A segurança é nossa prioridade. Não realizamos trabalhos em condições climáticas adversas como chuva forte, ventos acima de 40km/h ou tempestades. Monitoramos constantemente as condições meteorológicas e remarcamos quando necessário."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de alpinismo industrial
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-white border-x border-b rounded-b-lg p-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
            Entre em Contato Conosco
          </button>
        </div>
      </div>
    </section>
  );
}