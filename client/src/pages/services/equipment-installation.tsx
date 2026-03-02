import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Settings, Zap, Wind, Award, Phone, Play } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

export default function EquipmentInstallation() {
  const serviceFeatures = [
    "InstalaÃ§Ã£o de banners de grandes formatos em altura",
    "Montagem de letra caixa simples e com iluminaÃ§Ã£o",
    "InstalaÃ§Ã£o de estruturas em lona",
    "Montagem de toda a estrutura metÃ¡lica de suporte",
    "InstalaÃ§Ã£o elÃ©trica completa para letreiros luminosos",
    "AptidÃ£o para tudo especificado com seguranÃ§a"
  ];

  const equipmentTypes = [
    "Banners e painÃ©is publicitÃ¡rios",
    "Letra caixa em acrÃ­lico, MDF ou metal",
    "Estruturas tensionadas em lona",
    "Letreiros luminosos e Backlights",
    "PainÃ©is de LED",
    "Suportes e estruturas de fixaÃ§Ã£o",
    "Sistemas de iluminaÃ§Ã£o elÃ©trica de fachada"
  ];

  const tools = [
    "Kit completo de acesso por corda certificado",
    "Ferramentas elÃ©tricas portÃ¡teis especializadas",
    "Equipamentos de soldas leves e fixaÃ§Ã£o",
    "Instrumentos de mediÃ§Ã£o e alinhamento",
    "Sistemas de iÃ§amento e movimentaÃ§Ã£o",
    "Equipamentos de teste e comissionamento",
    "Materiais de fixaÃ§Ã£o e ancoragem",
    "EPIs especÃ­ficos para trabalhos elÃ©tricos"
  ];

  const benefits = [
    {
      icon: Settings,
      title: "Versatilidade",
      description: "InstalaÃ§Ã£o de diversos tipos de equipamentos em qualquer altura"
    },
    {
      icon: Zap,
      title: "EficiÃªncia",
      description: "Montagem rÃ¡pida sem necessidade de estruturas auxiliares"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "InstalaÃ§Ã£o profissional seguindo normas tÃ©cnicas"
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="InstalaÃ§Ã£o de Banners e Letra Caixa em Fachadas - BalneÃ¡rio CamboriÃº"
        description="InstalaÃ§Ã£o profissional de banners, letreiros e letras caixa em fachadas em BalneÃ¡rio CamboriÃº e Itapema. Trabalho em altura certificado."
        keywords={[
          "instalaÃ§Ã£o de banner",
          "letra caixa",
          "letreiro luminoso",
          "comunicaÃ§Ã£o visual",
          "fachada comercial"
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">ServiÃ§o Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                InstalaÃ§Ã£o de Banners e Letra Caixa
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                InstalaÃ§Ã£o de banners, letra caixa, estruturas em lona com toda sua estrutura e elÃ©trica. Temos aptidÃ£o e certificaÃ§Ã£o para tudo especificado.
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
                alt="InstalaÃ§Ã£o de equipamentos em altura"
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
                Nosso serviÃ§o abrange a montagem e manutenÃ§Ã£o de banners, letra caixa e estruturas em lona em locais de difÃ­cil acesso. Utilizamos tÃ©cnicas de alpinismo industrial para alcanÃ§ar qualquer ponto da fachada com mÃ¡xima seguranÃ§a.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos desde a fixaÃ§Ã£o da base estrutural, tensionamento de lonas ou montagem das letras, atÃ© toda a instalaÃ§Ã£o elÃ©trica necessÃ¡ria para letreiros luminosos. Temos aptidÃ£o para entregar tudo pronto e funcionando.
              </p>
              <p className="text-gray-600">
                Nossos tÃ©cnicos sÃ£o especializados em trabalhos elÃ©tricos em altura (NR-10) e possuem todas as certificaÃ§Ãµes necessÃ¡rias para garantir seguranÃ§a e qualidade na comunicaÃ§Ã£o visual da sua empresa.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da InstalaÃ§Ã£o por Acesso por Corda</h2>
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

      {/* Equipment Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Equipamentos</h2>
              <ul className="space-y-3">
                {equipmentTypes.map((equipment, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{equipment}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ferramentas e Materiais</h2>
              <ul className="space-y-3">
                {tools.map((tool, index) => (
                  <li key={index} className="flex items-start">
                    <Settings className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{tool}</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de InstalaÃ§Ã£o</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia estruturada para instalaÃ§Ã£o segura e eficiente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Projeto",
                description: "AnÃ¡lise tÃ©cnica e planejamento da instalaÃ§Ã£o"
              },
              {
                step: "02",
                title: "PreparaÃ§Ã£o",
                description: "OrganizaÃ§Ã£o de materiais e equipamentos"
              },
              {
                step: "03",
                title: "FixaÃ§Ã£o",
                description: "InstalaÃ§Ã£o de suportes e pontos de ancoragem"
              },
              {
                step: "04",
                title: "Montagem",
                description: "InstalaÃ§Ã£o do equipamento conforme especificaÃ§Ãµes"
              },
              {
                step: "05",
                title: "Teste",
                description: "Comissionamento e verificaÃ§Ã£o de funcionamento"
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

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principais AplicaÃ§Ãµes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setores e estruturas onde realizamos instalaÃ§Ãµes especializadas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EdifÃ­cios Comerciais",
                description: "InstalaÃ§Ã£o de sistemas de climatizaÃ§Ã£o, letreiros e equipamentos de seguranÃ§a",
                icon: <Settings className="w-8 h-8 text-accent" />
              },
              {
                title: "Torres de ComunicaÃ§Ã£o",
                description: "Montagem de antenas, equipamentos de transmissÃ£o e sistemas de proteÃ§Ã£o",
                icon: <Zap className="w-8 h-8 text-accent" />
              },
              {
                title: "Complexos Industriais",
                description: "InstalaÃ§Ã£o de sistemas de ventilaÃ§Ã£o, exaustÃ£o e equipamentos especializados",
                icon: <Wind className="w-8 h-8 text-accent" />
              },
              {
                title: "Shopping Centers",
                description: "Montagem de letreiros, sistemas de iluminaÃ§Ã£o e equipamentos de climatizaÃ§Ã£o",
                icon: <Settings className="w-8 h-8 text-accent" />
              },
              {
                title: "Hospitais e Escolas",
                description: "InstalaÃ§Ã£o de equipamentos mÃ©dicos externos e sistemas de ventilaÃ§Ã£o",
                icon: <Zap className="w-8 h-8 text-accent" />
              },
              {
                title: "HotÃ©is e Resorts",
                description: "Montagem de sistemas de iluminaÃ§Ã£o decorativa e equipamentos de lazer",
                icon: <Wind className="w-8 h-8 text-accent" />
              }
            ].map((application, index) => (
              <Card key={index} className="p-6 text-center h-full">
                <CardContent className="pt-0">
                  <div className="mb-4">{application.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{application.title}</h3>
                  <p className="text-gray-600 text-sm">{application.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Normas e SeguranÃ§a</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cumprimos rigorosamente todas as normas tÃ©cnicas e de seguranÃ§a
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "NR-35",
                description: "Trabalho em Altura"
              },
              {
                title: "NR-10",
                description: "SeguranÃ§a em InstalaÃ§Ãµes ElÃ©tricas"
              },
              {
                title: "ABNT NBR",
                description: "Normas TÃ©cnicas Brasileiras"
              },
              {
                title: "IRATA",
                description: "CertificaÃ§Ã£o Internacional"
              }
            ].map((standard, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.title}</h3>
                  <p className="text-gray-600 text-sm">{standard.description}</p>
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
            Precisa Instalar Banners ou Letra Caixa em Altura?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conte com nossa expertise para instalar sua comunicaÃ§Ã£o visual de forma segura e eficiente
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
