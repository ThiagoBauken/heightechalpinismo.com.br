/**
 * FAQPage Schema.org for AI Discoverability
 * Helps ChatGPT, Gemini, and Claude understand FAQs
 */

export interface FAQ {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// FAQ padrão do site (usado na home e páginas de serviço)
export const defaultFAQs: FAQ[] = [
  {
    question: "Quais são as certificações da empresa?",
    answer: "Somos certificados NR-35 (Trabalho em Altura) e IRATA (International Rope Access Trade Association), garantindo os mais altos padrões internacionais de segurança. Também seguimos as normas ABNT NBR 16325 e temos ART (Anotação de Responsabilidade Técnica) em todos os projetos."
  },
  {
    question: "Em quais cidades vocês atendem?",
    answer: "Atendemos Balneário Camboriú, Itapema, Camboriú, Bombinhas e toda a região de Santa Catarina. Para projetos especiais, atendemos todo o Brasil. Temos experiência em 27 estados brasileiros."
  },
  {
    question: "Quanto tempo demora um serviço de limpeza de fachada?",
    answer: "Depende do tamanho do prédio. Um edifício residencial de 10 andares leva em média 3-5 dias. Fazemos visita técnica gratuita para avaliar o projeto e dar um prazo exato. Em casos emergenciais, podemos iniciar em 24-48 horas."
  },
  {
    question: "Os serviços podem ser realizados com o prédio ocupado?",
    answer: "Sim! Nossos serviços são realizados com total segurança e mínimo de interferência para moradores e usuários. Utilizamos técnicas de acesso por corda que não requerem andaimes ou estruturas grandes. Agendamos os trabalhos no melhor horário para o condomínio."
  },
  {
    question: "Como funciona o orçamento?",
    answer: "Fazemos visita técnica gratuita onde avaliamos: altura do prédio, tipo de fachada, condições atuais e escopo do trabalho. Após a visita, enviamos orçamento detalhado em até 24 horas com valores, prazos e garantias. O orçamento não gera compromisso."
  },
  {
    question: "Vocês têm seguro e responsabilidade civil?",
    answer: "Sim! Temos seguro de responsabilidade civil completo que cobre eventuais danos materiais e acidentes. Todos os equipamentos são certificados e inspecionados regularmente. Nossa equipe é 100% CLT com todos os treinamentos obrigatórios em dia."
  },
  {
    question: "Qual a garantia dos serviços?",
    answer: "Oferecemos garantia de 12 meses para limpeza de fachadas e até 36 meses para serviços de pintura e impermeabilização, dependendo do tipo de serviço e materiais utilizados. A garantia cobre retrabalho sem custos adicionais."
  },
  {
    question: "Preciso fornecer energia elétrica ou água?",
    answer: "Sim, para a maioria dos serviços precisamos de ponto de água e energia elétrica. Em casos onde não há acesso, podemos usar geradores e reservatórios próprios (pode ter custo adicional). Informamos todas as necessidades na visita técnica."
  },
  {
    question: "Como é feita a segurança no trabalho em altura?",
    answer: "Seguimos rigorosamente a NR-35. Utilizamos equipamentos certificados (cordas, mosquetões, cadeirinhas, capacetes), fazemos APR (Análise Preliminar de Risco) antes de cada serviço, temos equipe de resgate treinada e todos os profissionais têm curso NR-35 atualizado. Segurança é nossa prioridade número 1."
  },
  {
    question: "Vocês atendem emergências?",
    answer: "Sim! Temos equipe de plantão 24/7 para emergências como vidros quebrados, infiltrações urgentes, ou situações de risco. Entre em contato pelo WhatsApp (47) 9214-5961 para atendimento imediato."
  }
];

// Helper para injetar FAQ schema no head
export function injectFAQSchema(faqs: FAQ[] = defaultFAQs) {
  if (typeof window === 'undefined') return;

  // Remove schema antigo se existir
  const existingSchema = document.getElementById('faq-schema');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Cria novo schema
  const script = document.createElement('script');
  script.id = 'faq-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(generateFAQSchema(faqs));
  document.head.appendChild(script);
}
