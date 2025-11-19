import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Zap, Shield, Award, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function CargoHoisting() {
  const features = [
    "Equipamentos certificados e inspecionados",
    "Equipe especializada e treinada",
    "Planejamento detalhado da operação",
    "Análise de riscos e segurança",
    "Içamento de máquinas e equipamentos",
    "Movimentação em locais de difícil acesso"
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Içamento de Cargas em Altura - Balneário Camboriú"
        description="Serviço especializado de içamento e movimentação de cargas em altura em Balneário Camboriú. Equipamentos certificados e equipe treinada."
        keywords={[
          "içamento de cargas",
          "movimentação em altura",
          "guincho manual",
          "transporte vertical",
          "içamento industrial"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Içamento Profissional</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Içamento de Cargas
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Serviço especializado de içamento e movimentação de cargas em altura com máxima segurança e planejamento rigoroso.
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
                src="https://images.unsplash.com/photo-1565452884095-55b8d4cdb8b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Içamento de cargas"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Içamento Seguro</h2>
              <p className="text-gray-600 mb-6">
                Realizamos içamento e movimentação de cargas em altura utilizando técnicas de acesso por corda e equipamentos certificados, garantindo total segurança na operação.
              </p>
              <p className="text-gray-600">
                Ideal para locais onde guindastes convencionais não têm acesso.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Características</h3>
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
            Precisa Içar Equipamentos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Consulte nossa equipe técnica
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
