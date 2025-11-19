import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, PaintBucket, Shield, Clock, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function BuildingPainting() {
  const serviceFeatures = [
    "Preparação completa da superfície com limpeza e reparo",
    "Selagem de trincas e rachaduras com massa apropriada",
    "Aplicação de selador/primer para garantir aderência",
    "Pintura em 2 a 3 demãos com rolo ou pistola airless",
    "Pintura anticorrosiva para estruturas metálicas",
    "Acabamento uniforme e proteção contra intempéries"
  ];

  const applicationTypes = [
    "Repintura periódica de prédios residenciais e comerciais",
    "Pintura de áreas difíceis (shafts técnicos, empenas altas)",
    "Revestimento anticorrosivo de estruturas metálicas",
    "Pintura de detalhes arquitetônicos e murais em altura",
    "Pintura de tanques elevados e silos metálicos"
  ];

  const equipment = [
    "Kit completo de acesso por corda certificado",
    "Baldes de tinta com sistema anti-gotejamento",
    "Rolos e pincéis de longo alcance",
    "Pistolas de pintura airless com compressor",
    "Ferramentas de preparação (escova de aço, espátulas)",
    "Materiais de reparo (massa acrílica, selantes)"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapidez",
      description: "Execução ágil sem necessidade de andaimes complexos"
    },
    {
      icon: Shield,
      title: "Durabilidade",
      description: "Preparação adequada garante maior vida útil da pintura"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Acabamento profissional com produtos de alta performance"
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Restauração de Fachadas - Pintura, Pastilha e Reboco | Balneário Camboriú"
        description="Restauração completa de fachadas em Balneário Camboriú e Itapema. Pintura predial, aplicação de pastilhas, reboco e textura."
        keywords={[
          "restauração de fachadas",
          "pintura de fachada",
          "aplicação de pastilha",
          "reboco de fachada",
          "reforma de prédio"
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Serviço Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pintura de Fachadas Prediais
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Pintura e repintura de superfícies externas utilizando técnicas de rapel com preparação completa e produtos de alta qualidade para máxima durabilidade.
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
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Pintura predial em altura"
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
                O serviço de pintura de fachadas envolve pintar ou repintar as superfícies externas de edifícios utilizando técnicas de rapel. Nossos alpinistas industriais preparam cuidadosamente a área, limpando a fachada e reparando imperfeições antes da pintura.
              </p>
              <p className="text-gray-600 mb-6">
                Trincas e rachaduras são seladas com massa apropriada e lixadas, aplicando-se um selador/primer em toda a superfície para garantir aderência da tinta e uniformidade. A pintura é feita em 2 a 3 demãos usando rolo ou pistola airless.
              </p>
              <p className="text-gray-600">
                Este serviço em altura permite alcançar todas as partes da fachada sem andaimes, garantindo agilidade e redução significativa de custos.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da Pintura por Acesso por Corda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios únicos da nossa técnica especializada
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipamentos Utilizados</h2>
              <ul className="space-y-3">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <PaintBucket className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de Pintura Profissional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Etapas detalhadas para garantir o melhor resultado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Limpeza",
                description: "Preparação e limpeza completa da superfície"
              },
              {
                step: "02",
                title: "Reparo",
                description: "Selagem de trincas e correção de imperfeições"
              },
              {
                step: "03",
                title: "Primer",
                description: "Aplicação de selador para melhor aderência"
              },
              {
                step: "04",
                title: "Pintura",
                description: "Aplicação das demãos de tinta especificada"
              },
              {
                step: "05",
                title: "Acabamento",
                description: "Finalização e limpeza da área de trabalho"
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

      {/* Types of Buildings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Estruturas Atendidas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos diversos tipos de edificações e estruturas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Edifícios Residenciais",
                description: "Prédios de apartamentos necessitando renovação da pintura externa"
              },
              {
                title: "Complexos Industriais",
                description: "Galpões e torres metálicas que requerem pintura anticorrosiva"
              },
              {
                title: "Edificações Institucionais",
                description: "Hospitais, hotéis e edificações antigas em processo de restauração"
              },
              {
                title: "Estruturas Especiais",
                description: "Tanques elevados e silos metálicos com pintura protetiva"
              }
            ].map((building, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="pt-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{building.title}</h3>
                  <p className="text-gray-600 text-sm">{building.description}</p>
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
            Precisa de Pintura Predial?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Renove e proteja seu imóvel com nossa pintura profissional em altura
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
