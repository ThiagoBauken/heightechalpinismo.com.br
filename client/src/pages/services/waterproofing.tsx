import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Shield, Droplets, Clock, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function Waterproofing() {
  const serviceFeatures = [
    "IdentificaÃ§Ã£o e tratamento de fissuras e trincas",
    "PreparaÃ§Ã£o da superfÃ­cie com raspagem e escovaÃ§Ã£o",
    "AplicaÃ§Ã£o de massa selante ou epÃ³xi para preenchimento",
    "ImpermeabilizaÃ§Ã£o com mÃºltiplas camadas cruzadas",
    "AplicaÃ§Ã£o de membranas acrÃ­licas e poliuretano",
    "VedaÃ§Ã£o de juntas de dilataÃ§Ã£o e pontos crÃ­ticos",
    "Tratamento de calhas e sistemas de drenagem",
    "Garantia contra infiltraÃ§Ãµes e umidade"
  ];

  const applicationTypes = [
    "VedaÃ§Ã£o de fissuras em paredes e estruturas",
    "ImpermeabilizaÃ§Ã£o de coberturas e terraÃ§os",
    "Tratamento de juntas de dilataÃ§Ã£o",
    "Selagem de pontos de infiltraÃ§Ã£o em fachadas",
    "ImpermeabilizaÃ§Ã£o de reservatÃ³rios e tanques",
    "VedaÃ§Ã£o de estruturas subterrÃ¢neas"
  ];

  const materials = [
    "Membranas acrÃ­licas de alta performance",
    "Selantes de poliuretano e silicone estrutural",
    "Massa epÃ³xi para reparos estruturais",
    "Primers de aderÃªncia para diferentes superfÃ­cies",
    "Mantas lÃ­quidas impermeabilizantes",
    "Sistemas de vedaÃ§Ã£o para juntas",
    "Aditivos impermeabilizantes para argamassa",
    "Telas de reforÃ§o para Ã¡reas crÃ­ticas"
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "ProteÃ§Ã£o Total",
      description: "EliminaÃ§Ã£o completa de infiltraÃ§Ãµes e problemas de umidade"
    },
    {
      icon: Shield,
      title: "Durabilidade",
      description: "Sistemas impermeabilizantes de longa duraÃ§Ã£o"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Materiais de primeira linha e aplicaÃ§Ã£o especializada"
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="VedaÃ§Ã£o de Fachadas contra InfiltraÃ§Ãµes - BalneÃ¡rio CamboriÃº"
        description="VedaÃ§Ã£o profissional de fachadas contra infiltraÃ§Ãµes em BalneÃ¡rio CamboriÃº e Itapema. Selagem de juntas e proteÃ§Ã£o contra intempÃ©ries."
        keywords={[
          "vedaÃ§Ã£o de fachada",
          "selagem de juntas",
          "infiltraÃ§Ã£o em fachada",
          "impermeabilizaÃ§Ã£o",
          "proteÃ§Ã£o de fachada"
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">ServiÃ§o Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ImpermeabilizaÃ§Ã£o e Selagem
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                VedaÃ§Ã£o de fissuras e aplicaÃ§Ã£o de sistemas impermeabilizantes para proteÃ§Ã£o completa contra infiltraÃ§Ãµes, garantindo a durabilidade da sua estrutura.
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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="ImpermeabilizaÃ§Ã£o em altura"
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
                Este serviÃ§o foca em eliminar infiltraÃ§Ãµes e vedar pontos vulnerÃ¡veis na estrutura externa, usando alpinismo industrial para alcanÃ§ar locais crÃ­ticos. Nossos profissionais identificam fissuras, trincas em paredes e juntas de dilataÃ§Ã£o por onde hÃ¡ entrada de Ã¡gua.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos o preparo da superfÃ­cie com raspagem e escovaÃ§Ã£o ao redor da fissura, limpando partÃ­culas soltas. As trincas sÃ£o entÃ£o tratadas com massa selante ou epÃ³xi para preenchimento completo. Depois da preparaÃ§Ã£o, utilizamos impermeabilizante apropriado em mÃºltiplas camadas cruzadas.
              </p>
              <p className="text-gray-600">
                Aplicamos membranas acrÃ­licas, poliuretano ou outros sistemas impermeabilizantes para garantir vedaÃ§Ã£o completa e proteÃ§Ã£o duradoura contra infiltraÃ§Ãµes.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da ImpermeabilizaÃ§Ã£o Profissional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BenefÃ­cios exclusivos do nosso sistema de impermeabilizaÃ§Ã£o em altura
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

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AplicaÃ§Ãµes Comuns</h2>
              <ul className="space-y-3">
                {applicationTypes.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materiais Utilizados</h2>
              <ul className="space-y-3">
                {materials.map((material, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{material}</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de ImpermeabilizaÃ§Ã£o</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia tÃ©cnica para garantir vedaÃ§Ã£o completa e duradoura
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "DiagnÃ³stico",
                description: "IdentificaÃ§Ã£o de pontos de infiltraÃ§Ã£o e avaliaÃ§Ã£o estrutural"
              },
              {
                step: "02",
                title: "PreparaÃ§Ã£o",
                description: "Limpeza e preparo da superfÃ­cie para aplicaÃ§Ã£o"
              },
              {
                step: "03",
                title: "Tratamento",
                description: "Selagem de fissuras com massa apropriada"
              },
              {
                step: "04",
                title: "ImpermeabilizaÃ§Ã£o",
                description: "AplicaÃ§Ã£o de sistema impermeabilizante em camadas"
              },
              {
                step: "05",
                title: "Teste",
                description: "VerificaÃ§Ã£o da eficÃ¡cia e teste de estanqueidade"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principais Problemas que Solucionamos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos e tratamos diversos tipos de infiltraÃ§Ãµes e problemas de umidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "InfiltraÃ§Ãµes em Fachadas",
                description: "Tratamento de fissuras e pontos de entrada de Ã¡gua em paredes externas",
                icon: "ðŸ¢"
              },
              {
                title: "Problemas em Coberturas",
                description: "ImpermeabilizaÃ§Ã£o de lajes, terraÃ§os e sistemas de cobertura",
                icon: "ðŸ "
              },
              {
                title: "Juntas de DilataÃ§Ã£o",
                description: "VedaÃ§Ã£o especializada de juntas estruturais e movimentaÃ§Ã£o",
                icon: "ðŸ”§"
              },
              {
                title: "ReservatÃ³rios e Tanques",
                description: "ImpermeabilizaÃ§Ã£o interna e externa de estruturas de armazenamento",
                icon: "ðŸ’§"
              },
              {
                title: "Estruturas SubterrÃ¢neas",
                description: "Tratamento de infiltraÃ§Ãµes em subsolos e fundaÃ§Ãµes",
                icon: "ðŸ—ï¸"
              },
              {
                title: "Calhas e Drenagem",
                description: "VedaÃ§Ã£o e impermeabilizaÃ§Ã£o de sistemas de drenagem pluvial",
                icon: "ðŸŒ§ï¸"
              }
            ].map((problem, index) => (
              <Card key={index} className="p-6 text-center h-full">
                <CardContent className="pt-0">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
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
            Problemas de InfiltraÃ§Ã£o?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Proteja seu patrimÃ´nio com nossa impermeabilizaÃ§Ã£o especializada e definitiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar OrÃ§amento Gratuito
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Outros ServiÃ§os
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
