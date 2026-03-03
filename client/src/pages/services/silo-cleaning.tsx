import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Container, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";
import { getWhatsAppOrcamentoUrl } from "@/lib/whatsapp";

export default function SiloCleaning() {
  const features = [
    "Limpeza de caixas d'água",
    "Limpeza e manutenção em poços de elevador",
    "Limpeza interna e externa de silos industriais",
    "Aferição de gases e monitoramento contínuo",
    "Segurança certificada NR-33 (espaços confinados)",
    "Equipe treinada para ambientes e resgate industrial"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Limpeza em Espaço Confinado - Balneário Camboriú"
        description="Limpeza especializada em espaços confinados: caixas d'água, poços de elevador, silos com aferição de gases em Balneário Camboriú. Conforme NR-33."
        keywords={[
          "limpeza espaço confinado",
          "limpeza caixa d'água",
          "poço elevador",
          "aferição de gases",
          "NR-33",
          "silo industrial"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Espaço Confinado NR-33</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limpeza em Espaço Confinado
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Limpeza especializada em ambientes de acesso restrito como caixas d'água, poços de elevador e silos industriais, com aferição de gases e total conformidade com normas de segurança.
              </p>
              <a href={getWhatsAppOrcamentoUrl()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </a>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trabalhos em Espaços Regulamentados</h2>
              <p className="text-gray-600 mb-6">
                Nossa equipe é especializada em acessar, limpar e realizar manutenções em espaços confinados de alto risco, como caixas d'água em altura, poços de elevadores prediais e silos industriais.
              </p>
              <p className="text-gray-600">
                A operação inclui procedimentos rigorosos, como a aferição de gases e plano de resgate, utilizando técnicas de alpinismo industrial em total conformidade com a NR-33.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Serviços</h3>
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
            Precisa de Limpeza em Espaço Confinado?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Consulte nossa equipe especializada
          </p>
          <a href={getWhatsAppOrcamentoUrl()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
