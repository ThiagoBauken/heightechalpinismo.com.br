/**
 * Service Schema.org for AI Discoverability
 * Individual service schemas for better AI understanding
 */

export interface ServiceDetails {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
  priceRange?: string;
  provider?: {
    name: string;
    telephone: string;
    email: string;
  };
  availableChannel?: {
    availableLanguage: string;
    serviceUrl: string;
    servicePhone: string;
  };
  category?: string;
  termsOfService?: string;
  serviceType?: string;
}

export function generateServiceSchema(
  service: ServiceDetails,
  siteUrl: string = 'https://heightechalpinismo.com.br'
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.serviceType || "Serviço de Alpinismo Industrial",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "image": service.image || `${siteUrl}/services/${service.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    "areaServed": service.areaServed || [
      {
        "@type": "City",
        "name": "Balneário Camboriú",
        "containedIn": {
          "@type": "State",
          "name": "Santa Catarina"
        }
      },
      {
        "@type": "City",
        "name": "Itapema",
        "containedIn": {
          "@type": "State",
          "name": "Santa Catarina"
        }
      }
    ],
    "provider": {
      "@type": "LocalBusiness",
      "name": service.provider?.name || "Heightech Alpinismo Industrial",
      "telephone": service.provider?.telephone || "+55 47 9214-5961",
      "email": service.provider?.email || "contato@heightechalpinismo.com.br",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Balneário Camboriú",
        "addressRegion": "SC",
        "postalCode": "88330-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.9964,
        "longitude": -48.6357
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "150"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        },
        "priceCurrency": "BRL",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "BRL",
          "price": service.priceRange || "Sob consulta"
        },
        "availability": "https://schema.org/InStock",
        "availableDeliveryMethod": "https://schema.org/OnSitePickup"
      }]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": service.availableChannel?.serviceUrl || `${siteUrl}/contato`,
      "servicePhone": service.availableChannel?.servicePhone || "+55 47 9214-5961",
      "availableLanguage": {
        "@type": "Language",
        "name": "Português",
        "alternateName": "pt-BR"
      },
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Balneário Camboriú",
          "addressRegion": "Santa Catarina",
          "addressCountry": "BR"
        }
      }
    },
    "category": service.category || "Construção e Manutenção Predial",
    "termsOfService": service.termsOfService || `${siteUrl}/termos-de-servico`,
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "additionalType": "https://schema.org/ProfessionalService"
  };
}

// Helper para injetar service schema
export function injectServiceSchema(service: ServiceDetails) {
  if (typeof window === 'undefined') return;

  const existingSchema = document.getElementById('service-schema');
  if (existingSchema) {
    existingSchema.remove();
  }

  const script = document.createElement('script');
  script.id = 'service-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(generateServiceSchema(service));
  document.head.appendChild(script);
}

// Predefined services for easy use
export const services = {
  facadeCleaning: {
    name: "Limpeza de Fachadas",
    description: "Serviço especializado em limpeza de fachadas prediais utilizando técnicas de alpinismo industrial e acesso por corda. Limpeza profissional com produtos específicos para cada tipo de revestimento.",
    url: "https://heightechalpinismo.com.br/servicos/lavacao-predial",
    serviceType: "Limpeza e Conservação de Fachadas",
    category: "Manutenção Predial",
    priceRange: "$$"
  },
  buildingPainting: {
    name: "Pintura Predial em Altura",
    description: "Pintura externa de prédios e fachadas com técnicas de alpinismo industrial. Utilizamos tintas de alta qualidade e garantia estendida. Ideal para edifícios altos sem necessidade de andaimes.",
    url: "https://heightechalpinismo.com.br/servicos/restauracao-fachadas",
    serviceType: "Pintura de Fachadas",
    category: "Pintura e Acabamento",
    priceRange: "$$"
  },
  anchorPoints: {
    name: "Instalação de Pontos de Ancoragem",
    description: "Instalação e certificação de pontos de ancoragem para trabalho em altura conforme NR-35. Laudos técnicos e ART inclusos. Essencial para segurança em manutenções futuras.",
    url: "https://heightechalpinismo.com.br/servicos/pontos-ancoragem",
    serviceType: "Instalação de Equipamentos de Segurança",
    category: "Segurança em Altura",
    priceRange: "$$"
  },
  glassCleaning: {
    name: "Limpeza de Vidros em Altura",
    description: "Limpeza especializada de vidros de fachadas, coberturas e janelas em altura. Resultado cristalino sem marcas ou riscos. Produtos profissionais que garantem durabilidade da limpeza.",
    url: "https://heightechalpinismo.com.br/servicos/limpeza-vidros",
    serviceType: "Limpeza de Vidros",
    category: "Limpeza e Conservação",
    priceRange: "$"
  },
  waterproofing: {
    name: "Impermeabilização e Vedação de Fachadas",
    description: "Serviços de impermeabilização e vedação de fachadas para eliminar infiltrações. Utilizamos produtos de alta performance com garantia de até 5 anos. Inspeção técnica gratuita.",
    url: "https://heightechalpinismo.com.br/servicos/vedacao-fachadas",
    serviceType: "Impermeabilização",
    category: "Manutenção e Reforma",
    priceRange: "$$"
  }
};
