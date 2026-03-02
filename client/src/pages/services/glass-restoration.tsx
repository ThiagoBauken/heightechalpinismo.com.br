import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function GlassRestoration() {
  const features = [
    "RemoÃ§Ã£o de arranhÃµes superficiais e mÃ©dios",
    "Polimento profissional de alta qualidade",
    "Polimento por Espelhamento",
    "Tratamento anti-manchas e proteÃ§Ã£o",
    "RestauraÃ§Ã£o de vidros oxidados e contaminados",
    "RemoÃ§Ã£o de manchas de Ã¡gua e calcÃ¡rio",
    "Acabamento cristalino"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="RestauraÃ§Ã£o de Vidros - RemoÃ§Ã£o de ArranhÃµes | BalneÃ¡rio CamboriÃº"
        description="RestauraÃ§Ã£o profissional de vidros com remoÃ§Ã£o de arranhÃµes e manchas em BalneÃ¡rio CamboriÃº e Itapema. Economia de atÃ© 80% vs troca."
        keywords={[
          "restauraÃ§Ã£o de vidros",
          "remoÃ§Ã£o de arranhÃµes",
          "polimento de vidro",
          "vidro arranhado",
          "recuperaÃ§Ã£o de vidro"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">RestauraÃ§Ã£o Especializada</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                RestauraÃ§Ã£o de Vidros
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                RestauraÃ§Ã£o, polimento e tratamento de vidros danificados, removendo arranhÃµes e manchas para aparÃªncia de novo.
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
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="RestauraÃ§Ã£o de vidros"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recupere seus Vidros</h2>
              <p className="text-gray-600 mb-6">
                AtravÃ©s de tÃ©cnicas avanÃ§adas de polimento e restauraÃ§Ã£o, conseguimos recuperar vidros danificados por riscos e contaminados. Removemos arranhÃµes, manchas e oxidaÃ§Ã£o, devolvendo a transparÃªncia e brilho original dos vidros.
              </p>
              <p className="text-gray-600">
                Economia de atÃ© 80% comparado Ã  troca dos vidros.
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
            Restaure seus Vidros com Economia
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite uma avaliaÃ§Ã£o gratuita
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
              Solicitar AvaliaÃ§Ã£o
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
