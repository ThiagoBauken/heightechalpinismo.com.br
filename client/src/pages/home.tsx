import HeroSection from "@/components/home/hero-section";
import ServicesOverview from "@/components/home/services-overview";
import AboutSection from "@/components/home/about-section";
import StatsSection from "@/components/home/stats-section";
import VideoSection from "@/components/home/video-section";
import ProjectGallery from "@/components/home/project-gallery";
import Certifications from "@/components/home/certifications";
import Testimonials from "@/components/home/testimonials";
import FAQSection from "@/components/home/faq-section";
import CTASection from "@/components/home/cta-section";
import SEOHead from "@/components/shared/seo-head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Heightech Alpinismo Industrial",
    "image": "https://heightechalpinismo.com.br/logo.png",
    "@id": "https://heightechalpinismo.com.br",
    "url": "https://heightechalpinismo.com.br",
    "telephone": "+55 47 9214-5961",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Endereço da empresa",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/heightechalpinismo",
      "https://www.instagram.com/heightechalpinismo"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Balneário Camboriú"
      },
      {
        "@type": "City",
        "name": "Itapema"
      },
      {
        "@type": "City",
        "name": "Camboriú"
      },
      {
        "@type": "City",
        "name": "Bombinhas"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10"
    }
  };

  return (
    <div>
      <SEOHead
        title="Alpinismo Industrial em Balneário Camboriú e Itapema"
        description="Empresa especializada em trabalhos em altura com acesso por corda. Limpeza de fachadas, pintura predial, instalação de pontos de ancoragem e mais em Balneário Camboriú e Itapema - SC."
        keywords={[
          "limpeza de fachada",
          "pintura de prédio",
          "manutenção predial",
          "limpeza de vidros",
          "trabalho em altura",
          "pontos de ancoragem",
          "restauração de fachadas",
          "pintura industrial",
          "içamento de cargas"
        ]}
        structuredData={structuredData}
      />
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <StatsSection />
      <VideoSection />
      <ProjectGallery />
      <Certifications />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
