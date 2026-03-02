import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Lightbulb, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function LedInstallation() {
  const features = [
    "InstalaÃ§Ã£o de fachadas de LED",
    "Letreiros luminosos e letra caixa",
    "PainÃ©is de LED para comunicaÃ§Ã£o visual",
    "ManutenÃ§Ã£o preventiva e corretiva",
    "SubstituiÃ§Ã£o de mÃ³dulos e componentes",
    "ProgramaÃ§Ã£o e configuraÃ§Ã£o"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="InstalaÃ§Ã£o e ManutenÃ§Ã£o de LED em Fachadas - BalneÃ¡rio CamboriÃº"
        description="InstalaÃ§Ã£o e manutenÃ§Ã£o de sistemas de iluminaÃ§Ã£o LED em fachadas e letreiros em BalneÃ¡rio CamboriÃº e Itapema."
        keywords={[
          "instalaÃ§Ã£o de LED",
          "fachada de LED",
          "letreiro LED",
          "iluminaÃ§Ã£o de fachada",
          "manutenÃ§Ã£o LED"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">IluminaÃ§Ã£o Profissional</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                InstalaÃ§Ã£o e ManutenÃ§Ã£o de LEDs
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                InstalaÃ§Ã£o e manutenÃ§Ã£o de sistemas de iluminaÃ§Ã£o LED em fachadas e locais de difÃ­cil acesso com qualidade e seguranÃ§a.
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
                src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="InstalaÃ§Ã£o de LEDs"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IluminaÃ§Ã£o em Altura</h2>
              <p className="text-gray-600 mb-6">
                Nossa equipe especializada realiza instalaÃ§Ã£o e manutenÃ§Ã£o de sistemas de LED em fachadas, letreiros e locais de difÃ­cil acesso utilizando tÃ©cnicas de alpinismo industrial.
              </p>
              <p className="text-gray-600">
                Garantimos qualidade na instalaÃ§Ã£o e manutenÃ§Ã£o rÃ¡pida quando necessÃ¡rio.
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
            Ilumine sua Fachada
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite um orÃ§amento personalizado
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
