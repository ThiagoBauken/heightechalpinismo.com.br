import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, SprayCan, Shield, Clock, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function FacadeCleaning() {
  const serviceFeatures = [
    "Limpeza de vidros e fachadas cortina",
    "Remoção de poluição, fuligem e manchas climáticas",
    "Limpeza pós-obra (remoção de respingos de tinta e cimento)",
    "Remoção de limo e fungos para evitar infiltrações",
    "Hidrojateamento com produtos especializados",
    "Acabamento profissional sem manchas"
  ];

  const buildingTypes = [
    "Edifícios comerciais e residenciais",
    "Arranha-céus e fachadas cortina",
    "Fachadas de lojas e shopping centers",
    "Hospitais e escolas com múltiplos andares",
    "Silos industriais e chaminés"
  ];

  const equipment = [
    "Cordas duplas (principal e segurança)",
    "Arnês tipo paraquedista e cadeirinha de posicionamento",
    "Mosquetões de aço e conectores certificados",
    "Descensor para controle de descida e ascensor para subidas",
    "Capacete, luvas e óculos de proteção",
    "Máquina de hidrojato e produtos especializados"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Agilidade",
      description: "Execução rápida sem necessidade de andaimes tradicionais"
    },
    {
      icon: Shield,
      title: "Segurança",
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
        title="Lavação Predial em Balneário Camboriú e Itapema"
        description="Lavação e limpeza profissional de fachadas prediais em Balneário Camboriú e Itapema. Limpeza de vidros, remoção de sujeira e acabamento impecável."
        keywords={[
          "lavação predial",
          "limpeza de fachada",
          "limpeza de prédio",
          "limpeza de vidros",
          "hidrojateamento"
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Serviço Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limpeza de Fachadas
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Lavagem e higienização profissional de superfícies externas com hidrojateamento e produtos especializados, garantindo a conservação e valorização do seu imóvel.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Realizamos o Serviço</h2>
              <p className="text-gray-600 mb-6">
                O serviço de limpeza de fachadas consiste na lavagem e higienização das superfícies externas de prédios por técnicos especializados em acesso por corda. Nossa equipe avalia o tipo de revestimento e o nível de sujeira para escolher os métodos adequados.
              </p>
              <p className="text-gray-600 mb-6">
                Utilizamos escovas ou brochas com detergentes especiais e realizamos hidrojateamento (jato de água de alta pressão) para remover poeira, poluição, fuligem, limo e outras impurezas. Em fachadas de vidro, após a lavagem, a água é puxada com rodos para um acabamento sem manchas.
              </p>
              <p className="text-gray-600">
                A limpeza regular de fachadas previne a deterioração da construção e melhora significativamente a aparência e valor do imóvel.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens do Nosso Serviço</h2>
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
              Seguimos um protocolo rigoroso para garantir qualidade e segurança
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Avaliação",
                description: "Análise do tipo de revestimento e nível de sujeira"
              },
              {
                step: "02",
                title: "Preparação",
                description: "Instalação de pontos de ancoragem e equipamentos"
              },
              {
                step: "03",
                title: "Limpeza",
                description: "Aplicação de produtos e hidrojateamento"
              },
              {
                step: "04",
                title: "Acabamento",
                description: "Finalização com rodos e inspeção final"
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
            Entre em contato conosco para um orçamento personalizado e mantenha seu imóvel sempre valorizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-yellow-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento Gratuito
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Ver Outros Serviços
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
