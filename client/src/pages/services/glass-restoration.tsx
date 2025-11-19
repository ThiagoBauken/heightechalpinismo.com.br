import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function GlassRestoration() {
  const features = [
    "Remoção de arranhões superficiais e médios",
    "Polimento profissional de alta qualidade",
    "Tratamento anti-manchas e proteção",
    "Restauração de vidros oxidados",
    "Remoção de manchas de água e calcário",
    "Acabamento cristalino"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Restauração de Vidros - Remoção de Arranhões | Balneário Camboriú"
        description="Restauração profissional de vidros com remoção de arranhões e manchas em Balneário Camboriú e Itapema. Economia de até 80% vs troca."
        keywords={[
          "restauração de vidros",
          "remoção de arranhões",
          "polimento de vidro",
          "vidro arranhado",
          "recuperação de vidro"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Restauração Especializada</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Restauração de Vidros
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Restauração, polimento e tratamento de vidros danificados, removendo arranhões e manchas para aparência de novo.
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
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Restauração de vidros"
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
                Através de técnicas avançadas de polimento e restauração, conseguimos remover arranhões, manchas e oxidação, devolvendo a transparência e brilho original dos vidros.
              </p>
              <p className="text-gray-600">
                Economia de até 80% comparado à troca dos vidros.
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
            Restaure seus Vidros com Economia
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite uma avaliação gratuita
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
              Solicitar Avaliação
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
