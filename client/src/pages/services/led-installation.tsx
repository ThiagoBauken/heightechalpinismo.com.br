import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Lightbulb, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function LedInstallation() {
  const features = [
    "Instalação de fachadas de LED",
    "Letreiros luminosos e letra caixa",
    "Painéis de LED para comunicação visual",
    "Manutenção preventiva e corretiva",
    "Substituição de módulos e componentes",
    "Programação e configuração"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Instalação e Manutenção de LED em Fachadas - Balneário Camboriú"
        description="Instalação e manutenção de sistemas de iluminação LED em fachadas e letreiros em Balneário Camboriú e Itapema."
        keywords={[
          "instalação de LED",
          "fachada de LED",
          "letreiro LED",
          "iluminação de fachada",
          "manutenção LED"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Iluminação Profissional</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Instalação e Manutenção de LEDs
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Instalação e manutenção de sistemas de iluminação LED em fachadas e locais de difícil acesso com qualidade e segurança.
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
                src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Instalação de LEDs"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Iluminação em Altura</h2>
              <p className="text-gray-600 mb-6">
                Nossa equipe especializada realiza instalação e manutenção de sistemas de LED em fachadas, letreiros e locais de difícil acesso utilizando técnicas de alpinismo industrial.
              </p>
              <p className="text-gray-600">
                Garantimos qualidade na instalação e manutenção rápida quando necessário.
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
            Ilumine sua Fachada
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite um orçamento personalizado
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
