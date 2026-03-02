import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, SprayCan, Shield, Clock, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function FacadeCleaning() {
  const serviceFeatures = [
    "Limpeza de vidros, fachadas cortina e especÃ­fico em ACM",
    "RemoÃ§Ã£o de poluiÃ§Ã£o, fuligem e manchas climÃ¡ticas",
    "Limpeza pÃ³s-obra (remoÃ§Ã£o de respingos de tinta e cimento)",
    "RemoÃ§Ã£o de limo e fungos para evitar infiltraÃ§Ãµes",
    "Hidrojateamento com produtos especializados",
    "Acabamento profissional sem manchas"
  ];

  const buildingTypes = [
    "EdifÃ­cios comerciais e residenciais",
    "Arranha-cÃ©us e fachadas cortina",
    "Fachadas de lojas e shopping centers",
    "Hospitais e escolas com mÃºltiplos andares",
    "Silos industriais e chaminÃ©s"
  ];

  const equipment = [
    "Cordas duplas (principal e seguranÃ§a)",
    "ArnÃªs tipo paraquedista e cadeirinha de posicionamento",
    "MosquetÃµes de aÃ§o e conectores certificados",
    "Descensor para controle de descida e ascensor para subidas",
    "Capacete, luvas e Ã³culos de proteÃ§Ã£o",
    "MÃ¡quina de hidrojato e produtos especializados"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Agilidade",
      description: "ExecuÃ§Ã£o rÃ¡pida sem necessidade de andaimes tradicionais"
    },
    {
      icon: Shield,
      title: "SeguranÃ§a",
      description: "Equipamentos certificados e profissionais treinados"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Acabamento profissional com produtos especializados"
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="LavaÃ§Ã£o Predial em BalneÃ¡rio CamboriÃº e Itapema"
        description="LavaÃ§Ã£o e limpeza profissional de fachadas prediais em BalneÃ¡rio CamboriÃº e Itapema. Limpeza de vidros, remoÃ§Ã£o de sujeira e acabamento impecÃ¡vel."
        keywords={[
          "lavaÃ§Ã£o predial",
          "limpeza de fachada",
          "limpeza de prÃ©dio",
          "limpeza de vidros",
          "hidrojateamento"
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">ServiÃ§o Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limpeza de Fachadas
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Lavagem e higienizaÃ§Ã£o profissional de superfÃ­cies externas com hidrojateamento e produtos especializados, garantindo a conservaÃ§Ã£o e valorizaÃ§Ã£o do seu imÃ³vel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar OrÃ§amento
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Play className="w-5 h-5 mr-2" />
                  Ver DemonstraÃ§Ã£o
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Limpeza profissional de fachadas"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Realizamos o ServiÃ§o</h2>
              <p className="text-gray-600 mb-6">
                O serviÃ§o de limpeza de fachadas consiste na lavagem e higienizaÃ§Ã£o das superfÃ­cies externas de prÃ©dios por tÃ©cnicos especializados em acesso por corda. Nossa equipe avalia o tipo de revestimento e o nÃ­vel de sujeira para escolher os mÃ©todos adequados.
              </p>
              <p className="text-gray-600 mb-6">
                Utilizamos escovas com produtos especiais e realizamos hidrojateamento (jato de Ã¡gua de alta pressÃ£o) para remover poeira, poluiÃ§Ã£o, fuligem, limo e outras impurezas. Em fachadas de vidro, apÃ³s a lavagem, a Ã¡gua Ã© puxada com rodos para um acabamento sem manchas.
              </p>
              <p className="text-gray-600">
                A limpeza regular de fachadas previne a deterioraÃ§Ã£o da construÃ§Ã£o e melhora significativamente a aparÃªncia e valor do imÃ³vel.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">ServiÃ§os Inclusos</h3>
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

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens do Nosso ServiÃ§o</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Por que escolher o acesso por corda para limpeza de fachadas
            </p>
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

      {/* Building Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Estruturas Atendidas</h2>
              <ul className="space-y-3">
                {buildingTypes.map((type, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipamentos Utilizados</h2>
              <ul className="space-y-3">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <SprayCan className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Processo de Trabalho</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos um protocolo rigoroso para garantir qualidade e seguranÃ§a
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "AvaliaÃ§Ã£o",
                description: "AnÃ¡lise do tipo de revestimento e nÃ­vel de sujeira"
              },
              {
                step: "02",
                title: "PreparaÃ§Ã£o",
                description: "InstalaÃ§Ã£o de pontos de ancoragem e equipamentos"
              },
              {
                step: "03",
                title: "Limpeza",
                description: "AplicaÃ§Ã£o de produtos e hidrojateamento"
              },
              {
                step: "04",
                title: "Acabamento",
                description: "FinalizaÃ§Ã£o com rodos e inspeÃ§Ã£o final"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa de Limpeza de Fachadas?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para um orÃ§amento personalizado e mantenha seu imÃ³vel sempre valorizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar OrÃ§amento Gratuito
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Ver Outros ServiÃ§os
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
