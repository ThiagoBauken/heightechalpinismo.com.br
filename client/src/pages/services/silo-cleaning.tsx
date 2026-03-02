import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Container, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function SiloCleaning() {
  const features = [
    "Limpeza de caixas d'Ã¡gua",
    "Limpeza e manutenÃ§Ã£o em poÃ§os de elevador",
    "Limpeza interna e externa de silos industriais",
    "AferiÃ§Ã£o de gases e monitoramento contÃ­nuo",
    "SeguranÃ§a certificada NR-33 (espaÃ§os confinados)",
    "Equipe treinada para ambientes e resgate industrial"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Limpeza em EspaÃ§o Confinado - BalneÃ¡rio CamboriÃº"
        description="Limpeza especializada em espaÃ§os confinados: caixas d'Ã¡gua, poÃ§os de elevador, silos com aferiÃ§Ã£o de gases em BalneÃ¡rio CamboriÃº. Conforme NR-33."
        keywords={[
          "limpeza espaÃ§o confinado",
          "limpeza caixa d'Ã¡gua",
          "poÃ§o elevador",
          "aferiÃ§Ã£o de gases",
          "NR-33",
          "silo industrial"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">EspaÃ§o Confinado NR-33</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limpeza em EspaÃ§o Confinado
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Limpeza especializada em ambientes de acesso restrito como caixas d'Ã¡gua, poÃ§os de elevador e silos industriais, com aferiÃ§Ã£o de gases e total conformidade com normas de seguranÃ§a.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar OrÃ§amento
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Limpeza de silos"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trabalhos em EspaÃ§os Regulamentados</h2>
              <p className="text-gray-600 mb-6">
                Nossa equipe Ã© especializada em acessar, limpar e realizar manutenÃ§Ãµes em espaÃ§os confinados de alto risco, como caixas d'Ã¡gua em altura, poÃ§os de elevadores prediais e silos industriais.
              </p>
              <p className="text-gray-600">
                A operaÃ§Ã£o inclui procedimentos rigorosos, como a aferiÃ§Ã£o de gases e plano de resgate, utilizando tÃ©cnicas de alpinismo industrial em total conformidade com a NR-33.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ServiÃ§os</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa de Limpeza em EspaÃ§o Confinado?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Consulte nossa equipe especializada
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
              Solicitar OrÃ§amento
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
