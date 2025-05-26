import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Settings, Zap, Wind, Award, Phone, Play } from "lucide-react";

export default function EquipmentInstallation() {
  const serviceFeatures = [
    "Instalação de sistemas de climatização em altura",
    "Montagem de antenas e equipamentos de comunicação",
    "Instalação de letreiros e sinalização externa",
    "Montagem de estruturas metálicas leves",
    "Instalação de sistemas de iluminação externa",
    "Montagem de equipamentos de segurança",
    "Instalação de para-raios e sistemas de proteção",
    "Manutenção e substituição de equipamentos existentes"
  ];

  const equipmentTypes = [
    "Unidades condensadoras de ar condicionado",
    "Antenas de telecomunicações e TV",
    "Letreiros luminosos e placas de identificação",
    "Sistemas de iluminação de fachada",
    "Câmeras de segurança e monitoramento",
    "Equipamentos de ventilação e exaustão",
    "Para-raios e sistemas de proteção elétrica",
    "Estruturas de suporte e fixação"
  ];

  const tools = [
    "Kit completo de acesso por corda certificado",
    "Ferramentas elétricas portáteis especializadas",
    "Equipamentos de soldas leves e fixação",
    "Instrumentos de medição e alinhamento",
    "Sistemas de içamento e movimentação",
    "Equipamentos de teste e comissionamento",
    "Materiais de fixação e ancoragem",
    "EPIs específicos para trabalhos elétricos"
  ];

  const benefits = [
    {
      icon: Settings,
      title: "Versatilidade",
      description: "Instalação de diversos tipos de equipamentos em qualquer altura"
    },
    {
      icon: Zap,
      title: "Eficiência",
      description: "Montagem rápida sem necessidade de estruturas auxiliares"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Instalação profissional seguindo normas técnicas"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-accent text-white mb-4">Serviço Especializado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Instalação de Equipamentos
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Montagem e manutenção de equipamentos em locais de difícil acesso com máxima segurança, utilizando técnicas especializadas de alpinismo industrial.
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
                alt="Instalação de equipamentos em altura"
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
                Nosso serviço de instalação de equipamentos abrange a montagem e manutenção de diversos tipos de equipamentos em locais de difícil acesso. Utilizamos técnicas de alpinismo industrial para alcançar qualquer ponto da estrutura com máxima segurança.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos desde a instalação de sistemas de climatização, antenas de comunicação, letreiros e sinalização externa, até montagem de estruturas metálicas leves e sistemas de iluminação. Todo equipamento é instalado seguindo rigorosamente as normas técnicas.
              </p>
              <p className="text-gray-600">
                Nossos técnicos são especializados em trabalhos elétricos em altura e possuem todas as certificações necessárias para garantir segurança e qualidade na instalação.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da Instalação por Acesso por Corda</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de Instalação</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia estruturada para instalação segura e eficiente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Projeto",
                description: "Análise técnica e planejamento da instalação"
              },
              {
                step: "02",
                title: "Preparação",
                description: "Organização de materiais e equipamentos"
              },
              {
                step: "03",
                title: "Fixação",
                description: "Instalação de suportes e pontos de ancoragem"
              },
              {
                step: "04",
                title: "Montagem",
                description: "Instalação do equipamento conforme especificações"
              },
              {
                step: "05",
                title: "Teste",
                description: "Comissionamento e verificação de funcionamento"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Principais Aplicações</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setores e estruturas onde realizamos instalações especializadas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Edifícios Comerciais",
                description: "Instalação de sistemas de climatização, letreiros e equipamentos de segurança",
                icon: <Settings className="w-8 h-8 text-accent" />
              },
              {
                title: "Torres de Comunicação",
                description: "Montagem de antenas, equipamentos de transmissão e sistemas de proteção",
                icon: <Zap className="w-8 h-8 text-accent" />
              },
              {
                title: "Complexos Industriais",
                description: "Instalação de sistemas de ventilação, exaustão e equipamentos especializados",
                icon: <Wind className="w-8 h-8 text-accent" />
              },
              {
                title: "Shopping Centers",
                description: "Montagem de letreiros, sistemas de iluminação e equipamentos de climatização",
                icon: <Settings className="w-8 h-8 text-accent" />
              },
              {
                title: "Hospitais e Escolas",
                description: "Instalação de equipamentos médicos externos e sistemas de ventilação",
                icon: <Zap className="w-8 h-8 text-accent" />
              },
              {
                title: "Hotéis e Resorts",
                description: "Montagem de sistemas de iluminação decorativa e equipamentos de lazer",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Normas e Segurança</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cumprimos rigorosamente todas as normas técnicas e de segurança
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
                description: "Segurança em Instalações Elétricas"
              },
              {
                title: "ABNT NBR",
                description: "Normas Técnicas Brasileiras"
              },
              {
                title: "IRATA",
                description: "Certificação Internacional"
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
            Precisa Instalar Equipamentos em Altura?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conte com nossa expertise para instalações seguras e eficientes em qualquer altura
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
