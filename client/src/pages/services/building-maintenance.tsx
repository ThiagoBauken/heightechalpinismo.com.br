import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Wrench, Shield, Clock, Award, Phone, Play } from "lucide-react";

export default function BuildingMaintenance() {
  const serviceFeatures = [
    "Inspeção e reparo de instalações hidráulicas e elétricas externas",
    "Instalação de drenos para equipamentos de ar-condicionado",
    "Fixação ou recolocação de peças de revestimento soltas",
    "Manutenção de telhados, calhas e exaustores eólicos",
    "Montagem ou desmontagem de estruturas metálicas leves",
    "Reparo de rejuntes deteriorados em fachadas",
    "Pequenos serviços de alvenaria e recomposição de concreto",
    "Testes de percussão para identificar partes ocas ou soltas"
  ];

  const applicationTypes = [
    "Selagem de trincas e infiltrações em fachadas",
    "Recolocação de pastilhas/azulejos soltos",
    "Limpeza e desobstrução de calhas e condutores pluviais",
    "Troca de luminárias ou letreiros externos",
    "Manutenção de equipamentos fixos na fachada",
    "Inspeção de suportes de antenas e câmeras de segurança"
  ];

  const equipment = [
    "Equipamentos de acesso individual conforme NR-35 e NR-33",
    "Furadeiras e marteletes elétricos leves com segurança",
    "Trenas, níveis e ferramentas de medição",
    "Espátulas e pistolas de silicone para vedação",
    "Pincéis para aplicação de impermeabilizante",
    "Sistema de içamento de ferramentas e materiais",
    "Argamassa de reparo estrutural e selantes",
    "Manta líquida impermeabilizante para coberturas"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Mínima Interferência",
      description: "Reparos rápidos sem atrapalhar a rotina dos usuários"
    },
    {
      icon: Shield,
      title: "Manutenção Preventiva",
      description: "Evita problemas estruturais futuros com inspeções regulares"
    },
    {
      icon: Award,
      title: "Versatilidade",
      description: "Acesso a qualquer ponto da estrutura sem limitações"
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
                Manutenção Predial em Altura
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Reparos e serviços de conservação em locais de difícil acesso, garantindo a integridade estrutural e estética do seu imóvel com máxima segurança.
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Manutenção predial em altura"
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
                A manutenção predial via acesso por cordas abrange uma variedade de reparos em edifícios que seriam difíceis de realizar por métodos convencionais. Nossos técnicos especializados se posicionam nas áreas externas do prédio para executar tarefas de conservação e pequenas obras civis.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos desde inspeção e reparo de instalações hidráulicas e elétricas externas até a fixação de peças de revestimento soltas, manutenção de telhados e sistemas de drenagem. Também executamos pequenos serviços de alvenaria e testes de percussão para identificar problemas estruturais.
              </p>
              <p className="text-gray-600">
                É um serviço abrangente para garantir a integridade estrutural e estética do prédio, aumentando significativamente sua vida útil e valor de mercado.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da Manutenção por Acesso por Corda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios únicos da nossa técnica especializada em manutenção predial
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de Manutenção Profissional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia estruturada para garantir qualidade e segurança
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Inspeção",
                description: "Avaliação detalhada dos pontos que necessitam manutenção"
              },
              {
                step: "02",
                title: "Planejamento",
                description: "Definição de materiais e sequência de execução"
              },
              {
                step: "03",
                title: "Execução",
                description: "Realização dos reparos com técnicas especializadas"
              },
              {
                step: "04",
                title: "Verificação",
                description: "Inspeção final e teste de qualidade dos reparos"
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
              Atendemos diversos tipos de edificações com necessidades específicas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Edifícios Residenciais",
                description: "Condomínios verticais com manutenção preventiva regular"
              },
              {
                title: "Edifícios Comerciais",
                description: "Escritórios e centros comerciais de médio e grande porte"
              },
              {
                title: "Prédios Históricos",
                description: "Edificações que requerem cuidados especiais na manutenção"
              },
              {
                title: "Complexos Hospitalares",
                description: "Hospitais e hotéis com mínima interferência na operação"
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
            Precisa de Manutenção Predial?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mantenha seu imóvel sempre em perfeitas condições com nossa manutenção especializada
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
