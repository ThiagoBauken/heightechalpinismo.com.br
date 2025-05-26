import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Check, Search, FileText, AlertTriangle, Award, Phone, Play } from "lucide-react";

export default function TechnicalInspection() {
  const serviceFeatures = [
    "Inspeção visual detalhada de estruturas em altura",
    "Testes de percussão para identificar áreas comprometidas",
    "Análise de fissuras, trincas e deformações",
    "Avaliação de sistemas de fixação e ancoragem",
    "Inspeção de revestimentos e vedações",
    "Verificação de sistemas de drenagem e impermeabilização",
    "Documentação fotográfica detalhada",
    "Relatórios técnicos com recomendações específicas"
  ];

  const inspectionTypes = [
    "Inspeção predial preventiva conforme IBAPE",
    "Avaliação de fachadas e revestimentos externos",
    "Inspeção de estruturas metálicas e concreto",
    "Análise de sistemas de impermeabilização",
    "Verificação de equipamentos fixos em altura",
    "Inspeção de segurança para trabalhos em altura"
  ];

  const equipment = [
    "Equipamentos de acesso por corda certificados",
    "Instrumentos de medição de precisão",
    "Câmeras fotográficas de alta resolução",
    "Martelo de percussão para testes sonoros",
    "Trincômetros para medição de fissuras",
    "Equipamentos de detecção de umidade",
    "Ferramentas de análise não destrutiva",
    "Software especializado para relatórios técnicos"
  ];

  const benefits = [
    {
      icon: Search,
      title: "Diagnóstico Preciso",
      description: "Identificação detalhada de problemas estruturais e pontos críticos"
    },
    {
      icon: FileText,
      title: "Relatórios Técnicos",
      description: "Documentação completa com recomendações e prazos"
    },
    {
      icon: AlertTriangle,
      title: "Prevenção",
      description: "Antecipação de problemas evitando custos maiores"
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
                Inspeção Técnica Predial
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Avaliação detalhada de estruturas em altura para identificação de problemas e elaboração de recomendações técnicas precisas para manutenção preventiva.
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Inspeção técnica predial"
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
                Nossa inspeção técnica predial é uma avaliação detalhada de estruturas em altura para identificação de problemas, deficiências e pontos que necessitam manutenção. Utilizamos técnicas de acesso por corda para alcançar todos os pontos da edificação.
              </p>
              <p className="text-gray-600 mb-6">
                Realizamos inspeção visual minuciosa, testes de percussão para identificar áreas ocas ou com problemas de aderência, análise de fissuras e trincas, verificação de sistemas de fixação e avaliação do estado geral da estrutura e revestimentos.
              </p>
              <p className="text-gray-600">
                Todo o processo é documentado com fotografias de alta resolução e resulta em relatório técnico detalhado com classificação de problemas por grau de risco e recomendações específicas para cada situação encontrada.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vantagens da Inspeção Técnica Especializada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios de uma avaliação profissional e detalhada
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Inspeção</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processo de Inspeção Técnica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia sistemática para avaliação completa da estrutura
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Planejamento",
                description: "Análise de documentos e definição do escopo de inspeção"
              },
              {
                step: "02",
                title: "Inspeção Visual",
                description: "Avaliação detalhada de todos os elementos estruturais"
              },
              {
                step: "03",
                title: "Testes Técnicos",
                description: "Aplicação de métodos não destrutivos e medições"
              },
              {
                step: "04",
                title: "Relatório",
                description: "Elaboração de relatório técnico com recomendações"
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
              Elementos estruturais e sistemas analisados durante a inspeção
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Estrutura e Vedações",
                items: ["Elementos estruturais", "Alvenarias e vedações", "Revestimentos externos", "Esquadrias e vidros"]
              },
              {
                title: "Sistemas Hidráulicos",
                items: ["Tubulações aparentes", "Sistemas de drenagem", "Calhas e condutores", "Pontos de infiltração"]
              },
              {
                title: "Sistemas Elétricos",
                items: ["Instalações externas", "Luminária e equipamentos", "Proteções e aterramentos", "Conformidade normativa"]
              },
              {
                title: "Impermeabilização",
                items: ["Estado das membranas", "Juntas de dilatação", "Pontos críticos", "Eficiência do sistema"]
              },
              {
                title: "Segurança",
                items: ["Pontos de ancoragem", "Guarda-corpos", "Acessos em altura", "Equipamentos de segurança"]
              },
              {
                title: "Conservação Geral",
                items: ["Estado de conservação", "Vida útil estimada", "Prioridades de manutenção", "Custos estimados"]
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
            Precisa de uma Inspeção Técnica?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Garanta a segurança e conservação do seu imóvel com nossa avaliação técnica especializada
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
