import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Wrench, Shield, Clock, Award, Phone, Play } from "lucide-react";

export default function BuildingMaintenance() {
  const serviceFeatures = [
    "InspeÃ§Ã£o e reparo de instalaÃ§Ãµes hidrÃ¡ulicas e elÃ©tricas externas",
    "InstalaÃ§Ã£o de drenos para equipamentos de ar-condicionado",
    "FixaÃ§Ã£o ou recolocaÃ§Ã£o de peÃ§as de revestimento soltas",
    "Pintura de estruturas metÃ¡licas tubulares e complexas",
    "Tratamento anticorrosivo de alto desempenho",
    "Pintura de silos, tanques e tubulaÃ§Ãµes industriais",
    "Pintura de telhados, calhas e exaustores eÃ³licos",
    "Limpeza tÃ©cnica e preparaÃ§Ã£o de superfÃ­cie para pintura",
    "AplicaÃ§Ã£o de revestimentos especiais em altura",
    "Testes de aderÃªncia e inspeÃ§Ã£o de pintura"
  ];

  const applicationTypes = [
    "Pintura de estruturas metÃ¡licas de galpÃµes e indÃºstrias",
    "Tratamento e pintura de torres de comunicaÃ§Ã£o",
    "Revestimento de tanques de armazenamento e silos",
    "Pintura de tubulaÃ§Ãµes aÃ©reas e pipe racks",
    "Pintura de pontes roletes e passarelas"
  ];

  const equipment = [
    "Equipamentos de acesso individual conforme NR-35 e NR-33",
    "Furadeiras e marteletes elÃ©tricos leves com seguranÃ§a",
    "Trenas, nÃ­veis e ferramentas de mediÃ§Ã£o",
    "EspÃ¡tulas e pistolas de silicone para vedaÃ§Ã£o",
    "PincÃ©is para aplicaÃ§Ã£o de impermeabilizante",
    "Sistema de iÃ§amento de ferramentas e materiais",
    "Argamassa de reparo estrutural e selantes",
    "Manta lÃ­quida impermeabilizante para coberturas"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "MÃ­nima InterferÃªncia",
      description: "Reparos rÃ¡pidos sem atrapalhar a rotina dos usuÃ¡rios"
    },
    {
      icon: Shield,
      title: "ProteÃ§Ã£o Duradoura",
      description: "Evita corrosÃ£o e desgaste estrutural com revestimentos de alta performance"
    },
    {
      icon: Award,
      title: "Versatilidade",
      description: "Acesso a qualquer ponto da estrutura sem limitaÃ§Ãµes"
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
                Pintura Industrial em Altura
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Pintura especializada e tratamento anticorrosivo para estruturas metÃ¡licas e instalaÃ§Ãµes industriais em locais de difÃ­cil acesso com mÃ¡xima seguranÃ§a.
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="ManutenÃ§Ã£o predial em altura"
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
                A pintura industrial via acesso por cordas abrange a proteÃ§Ã£o e revestimento de estruturas que seriam difÃ­ceis de acessar por mÃ©todos convencionais. Nossos tÃ©cnicos especializados realizam o tratamento completo de superfÃ­cies.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos desde inspeÃ§Ã£o e reparo de instalaÃ§Ãµes hidrÃ¡ulicas e elÃ©tricas externas atÃ© a fixaÃ§Ã£o de peÃ§as de revestimento soltas, manutenÃ§Ã£o de telhados e sistemas de drenagem. TambÃ©m executamos pequenos serviÃ§os de alvenaria e testes de percussÃ£o para identificar problemas estruturais.
              </p>
              <p className="text-gray-600">
                Ã‰ um serviÃ§o abrangente para garantir a integridade estrutural e estÃ©tica do prÃ©dio, aumentando significativamente sua vida Ãºtil e valor de mercado.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da Pintura Industrial por Acesso por Corda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BenefÃ­cios Ãºnicos da nossa tÃ©cnica especializada em pintura
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipamentos e Materiais</h2>
              <ul className="space-y-3">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Wrench className="text-primary w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
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
              Metodologia estruturada para garantir qualidade e seguranÃ§a
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "InspeÃ§Ã£o",
                description: "AvaliaÃ§Ã£o detalhada dos pontos que necessitam manutenÃ§Ã£o"
              },
              {
                step: "02",
                title: "Planejamento",
                description: "DefiniÃ§Ã£o de materiais e sequÃªncia de execuÃ§Ã£o"
              },
              {
                step: "03",
                title: "ExecuÃ§Ã£o",
                description: "RealizaÃ§Ã£o dos reparos com tÃ©cnicas especializadas"
              },
              {
                step: "04",
                title: "VerificaÃ§Ã£o",
                description: "InspeÃ§Ã£o final e teste de qualidade dos reparos"
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

      {/* Types of Buildings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Estruturas Atendidas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos diversos tipos de edificaÃ§Ãµes com necessidades especÃ­ficas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "EdifÃ­cios Residenciais",
                description: "CondomÃ­nios verticais com manutenÃ§Ã£o preventiva regular"
              },
              {
                title: "EdifÃ­cios Comerciais",
                description: "EscritÃ³rios e centros comerciais de mÃ©dio e grande porte"
              },
              {
                title: "PrÃ©dios HistÃ³ricos",
                description: "EdificaÃ§Ãµes que requerem cuidados especiais na manutenÃ§Ã£o"
              },
              {
                title: "Complexos Hospitalares",
                description: "Hospitais e hotÃ©is com mÃ­nima interferÃªncia na operaÃ§Ã£o"
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
            Precisa de Pintura Industrial?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Proteja suas estruturas metÃ¡licas com nossa pintura especializada e evite corrosÃ£o
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
