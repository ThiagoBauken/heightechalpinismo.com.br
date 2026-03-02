import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Search, FileText, AlertTriangle, Award, Phone, Play } from "lucide-react";

export default function TechnicalInspection() {
  const serviceFeatures = [
    "InspeÃ§Ã£o visual detalhada de estruturas em altura",
    "Testes de percussÃ£o para identificar Ã¡reas comprometidas",
    "AnÃ¡lise de fissuras, trincas e deformaÃ§Ãµes",
    "AvaliaÃ§Ã£o de sistemas de fixaÃ§Ã£o e ancoragem",
    "InspeÃ§Ã£o de revestimentos e vedaÃ§Ãµes",
    "VerificaÃ§Ã£o de sistemas de drenagem e impermeabilizaÃ§Ã£o",
    "DocumentaÃ§Ã£o fotogrÃ¡fica detalhada",
    "RelatÃ³rios tÃ©cnicos com recomendaÃ§Ãµes especÃ­ficas"
  ];

  const inspectionTypes = [
    "InspeÃ§Ã£o predial preventiva conforme IBAPE",
    "AvaliaÃ§Ã£o de fachadas e revestimentos externos",
    "InspeÃ§Ã£o de estruturas metÃ¡licas e concreto",
    "AnÃ¡lise de sistemas de impermeabilizaÃ§Ã£o",
    "VerificaÃ§Ã£o de equipamentos fixos em altura",
    "InspeÃ§Ã£o de seguranÃ§a para trabalhos em altura"
  ];

  const equipment = [
    "Equipamentos de acesso por corda certificados",
    "Instrumentos de mediÃ§Ã£o de precisÃ£o",
    "CÃ¢meras fotogrÃ¡ficas de alta resoluÃ§Ã£o",
    "Martelo de percussÃ£o para testes sonoros",
    "TrincÃ´metros para mediÃ§Ã£o de fissuras",
    "Equipamentos de detecÃ§Ã£o de umidade",
    "Ferramentas de anÃ¡lise nÃ£o destrutiva",
    "Software especializado para relatÃ³rios tÃ©cnicos"
  ];

  const benefits = [
    {
      icon: Search,
      title: "DiagnÃ³stico Preciso",
      description: "IdentificaÃ§Ã£o detalhada de problemas estruturais e pontos crÃ­ticos"
    },
    {
      icon: FileText,
      title: "RelatÃ³rios TÃ©cnicos",
      description: "DocumentaÃ§Ã£o completa com recomendaÃ§Ãµes e prazos"
    },
    {
      icon: AlertTriangle,
      title: "PrevenÃ§Ã£o",
      description: "AntecipaÃ§Ã£o de problemas evitando custos maiores"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">ServiÃ§o Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                InspeÃ§Ã£o TÃ©cnica Predial
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                AvaliaÃ§Ã£o detalhada de estruturas em altura para identificaÃ§Ã£o de problemas e elaboraÃ§Ã£o de recomendaÃ§Ãµes tÃ©cnicas precisas para manutenÃ§Ã£o preventiva.
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="InspeÃ§Ã£o tÃ©cnica predial"
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
                Nossa inspeÃ§Ã£o tÃ©cnica predial Ã© uma avaliaÃ§Ã£o detalhada de estruturas em altura para identificaÃ§Ã£o de problemas, deficiÃªncias e pontos que necessitam manutenÃ§Ã£o. Utilizamos tÃ©cnicas de acesso por corda para alcanÃ§ar todos os pontos da edificaÃ§Ã£o.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos inspeÃ§Ã£o visual minuciosa, testes de percussÃ£o para identificar Ã¡reas ocas ou com problemas de aderÃªncia, anÃ¡lise de fissuras e trincas, verificaÃ§Ã£o de sistemas de fixaÃ§Ã£o e avaliaÃ§Ã£o do estado geral da estrutura e revestimentos.
              </p>
              <p className="text-gray-600">
                Todo o processo Ã© documentado com fotografias de alta resoluÃ§Ã£o e resulta em relatÃ³rio tÃ©cnico detalhado com classificaÃ§Ã£o de problemas por grau de risco e recomendaÃ§Ãµes especÃ­ficas para cada situaÃ§Ã£o encontrada.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da InspeÃ§Ã£o TÃ©cnica Especializada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BenefÃ­cios de uma avaliaÃ§Ã£o profissional e detalhada
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

      {/* Inspection Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de InspeÃ§Ã£o</h2>
              <ul className="space-y-3">
                {inspectionTypes.map((type, index) => (
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
                    <Search className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de InspeÃ§Ã£o TÃ©cnica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia sistemÃ¡tica para avaliaÃ§Ã£o completa da estrutura
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Planejamento",
                description: "AnÃ¡lise de documentos e definiÃ§Ã£o do escopo de inspeÃ§Ã£o"
              },
              {
                step: "02",
                title: "InspeÃ§Ã£o Visual",
                description: "AvaliaÃ§Ã£o detalhada de todos os elementos estruturais"
              },
              {
                step: "03",
                title: "Testes TÃ©cnicos",
                description: "AplicaÃ§Ã£o de mÃ©todos nÃ£o destrutivos e mediÃ§Ãµes"
              },
              {
                step: "04",
                title: "RelatÃ³rio",
                description: "ElaboraÃ§Ã£o de relatÃ³rio tÃ©cnico com recomendaÃ§Ãµes"
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

      {/* What We Evaluate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que Avaliamos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elementos estruturais e sistemas analisados durante a inspeÃ§Ã£o
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Estrutura e VedaÃ§Ãµes",
                items: ["Elementos estruturais", "Alvenarias e vedaÃ§Ãµes", "Revestimentos externos", "Esquadrias e vidros"]
              },
              {
                title: "Sistemas HidrÃ¡ulicos",
                items: ["TubulaÃ§Ãµes aparentes", "Sistemas de drenagem", "Calhas e condutores", "Pontos de infiltraÃ§Ã£o"]
              },
              {
                title: "Sistemas ElÃ©tricos",
                items: ["InstalaÃ§Ãµes externas", "LuminÃ¡ria e equipamentos", "ProteÃ§Ãµes e aterramentos", "Conformidade normativa"]
              },
              {
                title: "ImpermeabilizaÃ§Ã£o",
                items: ["Estado das membranas", "Juntas de dilataÃ§Ã£o", "Pontos crÃ­ticos", "EficiÃªncia do sistema"]
              },
              {
                title: "SeguranÃ§a",
                items: ["Pontos de ancoragem", "Guarda-corpos", "Acessos em altura", "Equipamentos de seguranÃ§a"]
              },
              {
                title: "ConservaÃ§Ã£o Geral",
                items: ["Estado de conservaÃ§Ã£o", "Vida Ãºtil estimada", "Prioridades de manutenÃ§Ã£o", "Custos estimados"]
              }
            ].map((category, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
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
            Precisa de uma InspeÃ§Ã£o TÃ©cnica?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Garanta a seguranÃ§a e conservaÃ§Ã£o do seu imÃ³vel com nossa avaliaÃ§Ã£o tÃ©cnica especializada
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
