import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, FileCheck, Shield, Clock, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function AnchorPoints() {
  const serviceFeatures = [
    "Instalação certificada conforme ABNT NBR 16325",
    "Teste de ancoragem com carga de ruptura",
    "Laudo técnico completo e detalhado",
    "ART (Anotação de Responsabilidade Técnica) inclusa",
    "Dimensionamento estrutural adequado",
    "Teste de carga e resistência periódico",
    "Certificado de conformidade"
  ];

  const buildingTypes = [
    "Edifícios comerciais e residenciais",
    "Indústrias e fábricas",
    "Hospitais e escolas",
    "Shopping centers e centros comerciais",
    "Silos e estruturas especiais"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Conformidade total com normas técnicas de segurança"
    },
    {
      icon: FileCheck,
      title: "Documentação",
      description: "Laudo técnico e ART para regularização"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Profissionais certificados e equipamentos homologados"
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Instalação e Teste de Pontos de Ancoragem com ART - Balneário Camboriú"
        description="Instalação certificada e teste de pontos de ancoragem com laudo técnico e ART em Balneário Camboriú e Itapema. Conforme ABNT NBR 16325."
        keywords={[
          "pontos de ancoragem",
          "teste de ancoragem",
          "ART ancoragem",
          "laudo técnico",
          "NR-35",
          "segurança em altura"
        ]}
      />
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Serviço Certificado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Instalação e Teste de Pontos de Ancoragem
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Instalação certificada e teste de pontos de ancoragem com laudo técnico e ART para segurança em trabalhos em altura conforme NR-35.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Instalação de pontos de ancoragem"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">O que são Pontos de Ancoragem?</h2>
              <p className="text-gray-600 mb-6">
                Pontos de ancoragem são dispositivos instalados em estruturas para permitir trabalhos em altura com segurança. São essenciais para proteger profissionais que realizam serviços como limpeza, manutenção e pintura em fachadas.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa equipe realiza o projeto estrutural, instalação e certificação conforme a ABNT NBR 16325, garantindo total segurança e conformidade legal.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Serviços Inclusos</h3>
              <ul className="space-y-3">
                {serviceFeatures.map((feature, index) => (
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

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens do Nosso Serviço</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa Instalar Pontos de Ancoragem?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato para um projeto personalizado com toda documentação necessária
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento Gratuito
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
