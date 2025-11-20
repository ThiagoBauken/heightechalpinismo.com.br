/**
 * Review Schema.org for AI Discoverability
 * Customer testimonials structured for better AI understanding
 */

export interface Review {
  author: string;
  rating: number; // 1-5
  reviewBody: string;
  datePublished?: Date;
  reviewAspect?: string; // eg: "Qualidade", "Prazo", "Atendimento"
}

export function generateReviewSchema(
  reviews: Review[],
  businessName: string = "Heightech Alpinismo Industrial",
  siteUrl: string = 'https://heightechalpinismo.com.br'
) {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    "reviewCount": reviews.length,
    "bestRating": "5",
    "worstRating": "1"
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "aggregateRating": aggregateRating,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished?.toISOString() || new Date().toISOString(),
      "reviewAspect": review.reviewAspect || "Serviço"
    }))
  };
}

// Default testimonials from the site
export const defaultReviews: Review[] = [
  {
    author: "Carlos Mendes",
    rating: 5,
    reviewBody: "Excelente trabalho na limpeza da fachada do nosso edifício. Equipe profissional e pontual. O prédio ficou como novo!",
    datePublished: new Date('2024-01-15'),
    reviewAspect: "Qualidade do Serviço"
  },
  {
    author: "Marina Silva",
    rating: 5,
    reviewBody: "Contratem com confiança! Fizeram a pintura completa do nosso condomínio em tempo recorde. Resultado impecável.",
    datePublished: new Date('2024-02-03'),
    reviewAspect: "Prazo e Qualidade"
  },
  {
    author: "João Santos",
    rating: 5,
    reviewBody: "Precisávamos de um serviço urgente de impermeabilização. A Heightech atendeu no mesmo dia e resolveu o problema de infiltração. Recomendo!",
    datePublished: new Date('2024-02-20'),
    reviewAspect: "Atendimento de Emergência"
  },
  {
    author: "Ana Paula Costa",
    rating: 5,
    reviewBody: "Empresa séria e competente. Todas as certificações em dia, seguros, ART. Nos sentimos seguros contratando. O síndico aprovou!",
    datePublished: new Date('2024-03-10'),
    reviewAspect: "Confiabilidade"
  },
  {
    author: "Ricardo Oliveira",
    rating: 5,
    reviewBody: "Melhor custo-benefício de Balneário Camboriú. Fizeram limpeza de vidros e fachada do nosso prédio de 15 andares. Ficou perfeito!",
    datePublished: new Date('2024-03-28'),
    reviewAspect: "Custo-Benefício"
  },
  {
    author: "Fernanda Lima",
    rating: 5,
    reviewBody: "Instalaram pontos de ancoragem com laudo técnico completo. Agora podemos fazer manutenções com segurança. Parabéns pelo profissionalismo!",
    datePublished: new Date('2024-04-12'),
    reviewAspect: "Segurança e Documentação"
  },
  {
    author: "Paulo Henrique",
    rating: 5,
    reviewBody: "Equipe super educada e cuidadosa. Não sujaram nada nas áreas comuns. Serviço de limpeza de ACM ficou show!",
    datePublished: new Date('2024-05-05'),
    reviewAspect: "Limpeza e Organização"
  },
  {
    author: "Juliana Martins",
    rating: 5,
    reviewBody: "Atendimento nota 10 desde o orçamento até a conclusão. Tiraram todas as dúvidas e cumpriram tudo que prometeram. Empresa de confiança!",
    datePublished: new Date('2024-05-22'),
    reviewAspect: "Atendimento ao Cliente"
  },
  {
    author: "Marcos Roberto",
    rating: 5,
    reviewBody: "Fizeram restauração completa da fachada do prédio comercial. Trabalho de alta qualidade, respeitaram todos os prazos. Recomendo fortemente!",
    datePublished: new Date('2024-06-08'),
    reviewAspect: "Qualidade e Pontualidade"
  },
  {
    author: "Cristina Alves",
    rating: 5,
    reviewBody: "Precisávamos de manutenção elétrica em altura. A Heightech tem eletricistas certificados NR-35. Serviço foi feito com total segurança. Excelente!",
    datePublished: new Date('2024-06-30'),
    reviewAspect: "Especialização Técnica"
  }
];

// Helper para injetar review schema
export function injectReviewSchema(reviews: Review[] = defaultReviews) {
  if (typeof window === 'undefined') return;

  const existingSchema = document.getElementById('review-schema');
  if (existingSchema) {
    existingSchema.remove();
  }

  const script = document.createElement('script');
  script.id = 'review-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(generateReviewSchema(reviews));
  document.head.appendChild(script);
}
