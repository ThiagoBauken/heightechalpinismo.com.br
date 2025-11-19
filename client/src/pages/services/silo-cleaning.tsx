import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Container, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function SiloCleaning() {
  const features = [
    "Limpeza interna e externa de silos",
    "Técnicas especializadas de acesso por corda",
    "Segurança certificada NR-33 (espaços confinados)",
    "Remoção de resíduos e incrustações",
    "Inspeção e manutenção preventiva",
    "Equipe treinada para ambientes industriais"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Limpeza de Silos Industriais - Balneário Camboriú"
        description="Limpeza especializada de silos industriais com técnicas de acesso por corda em Balneário Camboriú. Conforme NR-33."
        keywords={[
          "limpeza de silos",
          "limpeza industrial",
          "espaço confinado",
          "NR-33",
          "silo industrial"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Limpeza Industrial</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limpeza de Silos
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Limpeza especializada de silos industriais com técnicas de acesso por corda e total conformidade com normas de segurança.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limpeza Profissional</h2>
              <p className="text-gray-600 mb-6">
                Realizamos limpeza completa de silos industriais, tanto interna quanto externa, utilizando técnicas avançadas de alpinismo industrial e em conformidade com a NR-33 para trabalhos em espaços confinados.
              </p>
              <p className="text-gray-600">
                Equipe certificada e experiente em ambientes industriais de alto risco.
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
            Precisa Limpar Silos Industriais?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Consulte nossa equipe especializada
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
