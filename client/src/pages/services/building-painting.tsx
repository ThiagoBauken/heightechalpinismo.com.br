import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, PaintBucket, Shield, Clock, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function BuildingPainting() {
  const serviceFeatures = [
    "PreparaÃ§Ã£o completa da superfÃ­cie com limpeza e reparo",
    "Tratamento de ferragem exposta e oxidaÃ§Ã£o",
    "VedaÃ§Ã£o de fissuras, trincas e rachaduras com massa apropriada",
    "AplicaÃ§Ã£o de selador/primer para garantir aderÃªncia",
    "Pintura em 2 a 3 demÃ£os com rolo ou pistola airless",
    "Pintura anticorrosiva para estruturas metÃ¡licas",
    "Acabamento uniforme e proteÃ§Ã£o contra intempÃ©ries"
  ];

  const applicationTypes = [
    "Repintura periÃ³dica de prÃ©dios residenciais e comerciais",
    "Pintura de Ã¡reas difÃ­ceis (shafts tÃ©cnicos, empenas altas)",
    "Revestimento anticorrosivo de estruturas metÃ¡licas",
    "Pintura de detalhes arquitetÃ´nicos e murais em altura",
    "Pintura de tanques elevados e silos metÃ¡licos"
  ];

  const equipment = [
    "Kit completo de acesso por corda certificado",
    "Baldes de tinta com sistema anti-gotejamento",
    "Rolos e pincÃ©is de longo alcance",
    "Pistolas de pintura airless com compressor",
    "Ferramentas de preparaÃ§Ã£o (escova de aÃ§o, espÃ¡tulas)",
    "Materiais de reparo (massa acrÃ­lica, selantes)"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapidez",
      description: "ExecuÃ§Ã£o Ã¡gil sem necessidade de andaimes complexos"
    },
    {
      icon: Shield,
      title: "Durabilidade",
      description: "PreparaÃ§Ã£o adequada garante maior vida Ãºtil da pintura"
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
        title="RestauraÃ§Ã£o e Pintura de Fachadas - Tratamento de Ferragem e VedaÃ§Ã£o | BalneÃ¡rio CamboriÃº"
        description="RestauraÃ§Ã£o completa e pintura de fachadas em BalneÃ¡rio CamboriÃº e Itapema. Tratamento de ferragem, vedaÃ§Ã£o de fissuras e pintura predial."
        keywords={[
          "restauraÃ§Ã£o de fachadas",
          "pintura de fachada",
          "tratamento de ferragem",
          "vedaÃ§Ã£o de fissuras",
          "reforma de prÃ©dio"
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">ServiÃ§o Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                RestauraÃ§Ã£o e Pintura de Fachadas
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Pintura e repintura de superfÃ­cies externas utilizando tÃ©cnicas de rapel com preparaÃ§Ã£o completa e produtos de alta qualidade para mÃ¡xima durabilidade.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Realizamos o ServiÃ§o</h2>
              <p className="text-gray-600 mb-6">
                O serviÃ§o de restauraÃ§Ã£o e pintura de fachadas envolve pintar ou repintar as superfÃ­cies externas de edifÃ­cios utilizando tÃ©cnicas de rapel. Nossos alpinistas industriais preparam cuidadosamente a Ã¡rea, limpando a fachada, tratando ferragens expostas e reparando imperfeiÃ§Ãµes antes da pintura.
              </p>
              <p className="text-gray-600 mb-6">
                A vedaÃ§Ã£o de fissuras, trincas e rachaduras Ã© feita com massa apropriada e lixada, aplicando-se um selador/primer em toda a superfÃ­cie para garantir aderÃªncia da tinta e uniformidade. A pintura Ã© feita em 2 a 3 demÃ£os usando rolo ou pistola airless.
              </p>
              <p className="text-gray-600">
                Este serviÃ§o em altura permite alcanÃ§ar todas as partes da fachada sem andaimes, garantindo agilidade e reduÃ§Ã£o significativa de custos.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da Pintura por Acesso por Corda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BenefÃ­cios Ãºnicos da nossa tÃ©cnica especializada
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
                description: "PreparaÃ§Ã£o e limpeza completa da superfÃ­cie"
              },
              {
                step: "02",
                title: "Reparo",
                description: "Selagem de trincas e correÃ§Ã£o de imperfeiÃ§Ãµes"
              },
              {
                step: "03",
                title: "Primer",
                description: "AplicaÃ§Ã£o de selador para melhor aderÃªncia"
              },
              {
                step: "04",
                title: "Pintura",
                description: "AplicaÃ§Ã£o das demÃ£os de tinta especificada"
              },
              {
                step: "05",
                title: "Acabamento",
                description: "FinalizaÃ§Ã£o e limpeza da Ã¡rea de trabalho"
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
              Atendemos diversos tipos de edificaÃ§Ãµes e estruturas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "EdifÃ­cios Residenciais",
                description: "PrÃ©dios de apartamentos necessitando renovaÃ§Ã£o da pintura externa"
              },
              {
                title: "Complexos Industriais",
                description: "GalpÃµes e torres metÃ¡licas que requerem pintura anticorrosiva"
              },
              {
                title: "EdificaÃ§Ãµes Institucionais",
                description: "Hospitais, hotÃ©is e edificaÃ§Ãµes antigas em processo de restauraÃ§Ã£o"
              },
              {
                title: "Estruturas Especiais",
                description: "Tanques elevados e silos metÃ¡licos com pintura protetiva"
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
            Renove e proteja seu imÃ³vel com nossa pintura profissional em altura
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
