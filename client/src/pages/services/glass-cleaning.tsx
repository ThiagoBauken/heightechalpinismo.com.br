import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Search, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function GlassCleaning() {
  const features = [
    "Polimento especializado sem riscos",
    "Produtos premium de alta qualidade",
    "Acabamento sem manchas ou marcas",
    "Limpeza de vidros temperados e laminados",
    "Remoção de respingos e manchas difíceis",
    "Tratamento anti-manchas opcional"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Limpeza Fina de Vidros em Altura - Balneário Camboriú"
        description="Limpeza especializada e polimento de vidros em altura em Balneário Camboriú e Itapema. Acabamento profissional sem manchas."
        keywords={[
          "limpeza de vidros",
          "limpeza de vidros em altura",
          "polimento de vidros",
          "limpeza de janelas",
          "vidros de prédio"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Limpeza Premium</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limpeza Fina de Vidros
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Limpeza especializada e polimento de vidros em altura com produtos específicos e acabamento profissional impecável.
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
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Limpeza fina de vidros"
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
                Nossa equipe especializada utiliza produtos profissionais e técnicas avançadas para garantir vidros cristalinos sem manchas, riscos ou marcas.
              </p>
              <p className="text-gray-600">
                Ideal para fachadas de vidro, sacadas, janelas de difícil acesso e grandes áreas envidraçadas.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Diferenciais</h3>
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
            Vidros Cristalinos e Impecáveis
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite um orçamento sem compromisso
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
