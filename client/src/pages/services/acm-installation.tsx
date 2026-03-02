import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Package, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function AcmInstallation() {
  const features = [
    "InstalaÃ§Ã£o profissional de ACM (Aluminium Composite Material)",
    "Estrutura de fixaÃ§Ã£o segura e durÃ¡vel",
    "Acabamento impecÃ¡vel e alinhamento perfeito",
    "Isolamento tÃ©rmico e acÃºstico",
    "Resistente a intempÃ©ries e corrosÃ£o",
    "Grande variedade de cores e acabamentos"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="InstalaÃ§Ã£o de ACM em Fachadas - BalneÃ¡rio CamboriÃº e Itapema"
        description="InstalaÃ§Ã£o profissional de painÃ©is ACM (Aluminium Composite Material) em fachadas comerciais e residenciais em BalneÃ¡rio CamboriÃº."
        keywords={[
          "instalaÃ§Ã£o ACM",
          "painel composto de alumÃ­nio",
          "fachada ACM",
          "revestimento de fachada",
          "fachada moderna"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Revestimento Moderno</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                InstalaÃ§Ã£o de ACMs
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                InstalaÃ§Ã£o de painÃ©is de alumÃ­nio composto para revestimento moderno e durÃ¡vel de fachadas comerciais e residenciais.
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="InstalaÃ§Ã£o de ACM"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">O que Ã© ACM?</h2>
              <p className="text-gray-600 mb-6">
                ACM (Aluminium Composite Material) Ã© um material composto por duas chapas de alumÃ­nio com nÃºcleo de polietileno, amplamente utilizado em fachadas modernas por sua durabilidade, leveza e versatilidade estÃ©tica.
              </p>
              <p className="text-gray-600">
                Nossa equipe especializada realiza todo o projeto, estruturaÃ§Ã£o e instalaÃ§Ã£o garantindo seguranÃ§a e acabamento perfeito.
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
            Modernize sua Fachada com ACM
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato para um projeto personalizado
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
