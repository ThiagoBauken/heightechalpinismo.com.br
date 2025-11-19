import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Shield, Droplets, Clock, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function Waterproofing() {
  const serviceFeatures = [
    "Identificação e tratamento de fissuras e trincas",
    "Preparação da superfície com raspagem e escovação",
    "Aplicação de massa selante ou epóxi para preenchimento",
    "Impermeabilização com múltiplas camadas cruzadas",
    "Aplicação de membranas acrílicas e poliuretano",
    "Vedação de juntas de dilatação e pontos críticos",
    "Tratamento de calhas e sistemas de drenagem",
    "Garantia contra infiltrações e umidade"
  ];

  const applicationTypes = [
    "Vedação de fissuras em paredes e estruturas",
    "Impermeabilização de coberturas e terraços",
    "Tratamento de juntas de dilatação",
    "Selagem de pontos de infiltração em fachadas",
    "Impermeabilização de reservatórios e tanques",
    "Vedação de estruturas subterrâneas"
  ];

  const materials = [
    "Membranas acrílicas de alta performance",
    "Selantes de poliuretano e silicone estrutural",
    "Massa epóxi para reparos estruturais",
    "Primers de aderência para diferentes superfícies",
    "Mantas líquidas impermeabilizantes",
    "Sistemas de vedação para juntas",
    "Aditivos impermeabilizantes para argamassa",
    "Telas de reforço para áreas críticas"
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "Proteção Total",
      description: "Eliminação completa de infiltrações e problemas de umidade"
    },
    {
      icon: Shield,
      title: "Durabilidade",
      description: "Sistemas impermeabilizantes de longa duração"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Materiais de primeira linha e aplicação especializada"
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Vedação de Fachadas contra Infiltrações - Balneário Camboriú"
        description="Vedação profissional de fachadas contra infiltrações em Balneário Camboriú e Itapema. Selagem de juntas e proteção contra intempéries."
        keywords={[
          "vedação de fachada",
          "selagem de juntas",
          "infiltração em fachada",
          "impermeabilização",
          "proteção de fachada"
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Serviço Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Impermeabilização e Selagem
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Vedação de fissuras e aplicação de sistemas impermeabilizantes para proteção completa contra infiltrações, garantindo a durabilidade da sua estrutura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demonstração
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Impermeabilização em altura"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Realizamos o Serviço</h2>
              <p className="text-gray-600 mb-6">
                Este serviço foca em eliminar infiltrações e vedar pontos vulneráveis na estrutura externa, usando alpinismo industrial para alcançar locais críticos. Nossos profissionais identificam fissuras, trincas em paredes e juntas de dilatação por onde há entrada de água.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos o preparo da superfície com raspagem e escovação ao redor da fissura, limpando partículas soltas. As trincas são então tratadas com massa selante ou epóxi para preenchimento completo. Depois da preparação, utilizamos impermeabilizante apropriado em múltiplas camadas cruzadas.
              </p>
              <p className="text-gray-600">
                Aplicamos membranas acrílicas, poliuretano ou outros sistemas impermeabilizantes para garantir vedação completa e proteção duradoura contra infiltrações.
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

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da Impermeabilização Profissional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios exclusivos do nosso sistema de impermeabilização em altura
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Aplicações Comuns</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de Impermeabilização</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica para garantir vedação completa e duradoura
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description: "Identificação de pontos de infiltração e avaliação estrutural"
              },
              {
                step: "02",
                title: "Preparação",
                description: "Limpeza e preparo da superfície para aplicação"
              },
              {
                step: "03",
                title: "Tratamento",
                description: "Selagem de fissuras com massa apropriada"
              },
              {
                step: "04",
                title: "Impermeabilização",
                description: "Aplicação de sistema impermeabilizante em camadas"
              },
              {
                step: "05",
                title: "Teste",
                description: "Verificação da eficácia e teste de estanqueidade"
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
              Identificamos e tratamos diversos tipos de infiltrações e problemas de umidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Infiltrações em Fachadas",
                description: "Tratamento de fissuras e pontos de entrada de água em paredes externas",
                icon: "🏢"
              },
              {
                title: "Problemas em Coberturas",
                description: "Impermeabilização de lajes, terraços e sistemas de cobertura",
                icon: "🏠"
              },
              {
                title: "Juntas de Dilatação",
                description: "Vedação especializada de juntas estruturais e movimentação",
                icon: "🔧"
              },
              {
                title: "Reservatórios e Tanques",
                description: "Impermeabilização interna e externa de estruturas de armazenamento",
                icon: "💧"
              },
              {
                title: "Estruturas Subterrâneas",
                description: "Tratamento de infiltrações em subsolos e fundações",
                icon: "🏗️"
              },
              {
                title: "Calhas e Drenagem",
                description: "Vedação e impermeabilização de sistemas de drenagem pluvial",
                icon: "🌧️"
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
            Problemas de Infiltração?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Proteja seu patrimônio com nossa impermeabilização especializada e definitiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento Gratuito
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Outros Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
