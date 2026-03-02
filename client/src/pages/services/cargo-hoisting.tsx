import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Zap, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function CargoHoisting() {
  const features = [
    "IÃ§amos qualquer coisa",
    "Equipamentos certificados e inspecionados",
    "Equipe especializada e treinada",
    "Planejamento detalhado da operaÃ§Ã£o",
    "AnÃ¡lise de riscos e seguranÃ§a",
    "IÃ§amento de mÃ¡quinas e equipamentos",
    "MovimentaÃ§Ã£o em locais de difÃ­cil acesso"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="IÃ§amento de Cargas em Altura - BalneÃ¡rio CamboriÃº"
        description="ServiÃ§o especializado de iÃ§amento e movimentaÃ§Ã£o de cargas em altura em BalneÃ¡rio CamboriÃº. Equipamentos certificados e equipe treinada."
        keywords={[
          "iÃ§amento de cargas",
          "movimentaÃ§Ã£o em altura",
          "guincho manual",
          "transporte vertical",
          "iÃ§amento industrial"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">IÃ§amento Profissional</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IÃ§amento de Cargas
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                ServiÃ§o especializado de iÃ§amento e movimentaÃ§Ã£o de cargas em altura com mÃ¡xima seguranÃ§a e planejamento rigoroso.
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
                src="https://images.unsplash.com/photo-1565452884095-55b8d4cdb8b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="IÃ§amento de cargas"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IÃ§amento Seguro</h2>
              <p className="text-gray-600 mb-6">
                Realizamos iÃ§amento e movimentaÃ§Ã£o de cargas em altura utilizando tÃ©cnicas de acesso por corda e equipamentos certificados, garantindo total seguranÃ§a na operaÃ§Ã£o. IÃ§amos qualquer coisa, desde maquinÃ¡rios atÃ© mÃ³veis.
              </p>
              <p className="text-gray-600">
                Ideal para locais onde guindastes convencionais nÃ£o tÃªm acesso.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">CaracterÃ­sticas</h3>
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
            Precisa IÃ§ar Equipamentos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Consulte nossa equipe tÃ©cnica
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
