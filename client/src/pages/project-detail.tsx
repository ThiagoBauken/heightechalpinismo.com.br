import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Building, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import SEOHead from "@/components/shared/seo-head";

// Project data (same as in projects.tsx but with IDs and extended info)
const projects = [
  {
    id: "edificio-comercial-torre-norte",
    title: "Edifício Comercial Torre Norte",
    location: "Balneário Camboriú, SC",
    date: "2024",
    category: "Limpeza de Fachadas",
    description: "Limpeza completa de fachada de vidro em edifício comercial de 25 andares com sistema de hidrojateamento e produtos especializados.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    services: ["Limpeza de Vidros", "Hidrojateamento", "Acabamento Profissional"],
    challenge: "O principal desafio foi realizar a limpeza completa da fachada de vidro em um edifício comercial de 25 andares em pleno funcionamento, garantindo segurança e sem interromper as atividades dos ocupantes.",
    solution: "Utilizamos técnicas de acesso por corda com equipe certificada NR-35, sistema de hidrojateamento de alta pressão com produtos especializados para vidro, e realizamos o trabalho em etapas durante horários de menor movimento.",
    results: [
      "Fachada completamente limpa e restaurada em 30 dias",
      "Zero acidentes ou incidentes de segurança",
      "Nenhuma interrupção nas atividades do edifício",
      "Economia de 40% em relação a métodos tradicionais com andaimes"
    ],
    duration: "30 dias",
    teamSize: "8 profissionais",
    area: "12.000 m²"
  },
  {
    id: "condominio-residencial-vista-mar",
    title: "Condomínio Residencial Vista Mar",
    location: "Itapema, SC",
    date: "2024",
    category: "Pintura e Impermeabilização",
    description: "Projeto completo de pintura externa e impermeabilização de fachada em condomínio residencial de alto padrão.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    services: ["Pintura Externa", "Impermeabilização", "Selagem de Fissuras"],
    challenge: "Condomínio de alto padrão com problemas recorrentes de infiltração e pintura deteriorada pela maresia. Os moradores exigiam uma solução definitiva sem interferir na rotina do edifício.",
    solution: "Realizamos inspeção completa da fachada identificando pontos críticos, aplicamos sistema de impermeabilização de última geração, selamos todas as fissuras com materiais flexíveis, e executamos pintura com produtos premium resistentes à maresia.",
    results: [
      "100% das infiltrações eliminadas",
      "Fachada com aspecto renovado e proteção por 10 anos",
      "Sistema de garantia estendida de 5 anos",
      "Valorização do imóvel em 15%"
    ],
    duration: "45 dias",
    teamSize: "12 profissionais",
    area: "8.500 m²"
  },
  {
    id: "complexo-industrial-mineracaobr",
    title: "Complexo Industrial MineraçãoBR",
    location: "Belo Horizonte, MG",
    date: "2023",
    category: "Manutenção Industrial",
    description: "Manutenção preventiva e corretiva de silos e estruturas metálicas em complexo industrial de grande porte.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    services: ["Manutenção de Silos", "Pintura Anticorrosiva", "Inspeção Estrutural"],
    challenge: "Manutenção de silos de grande porte (até 40m de altura) com materiais corrosivos, necessitando de técnicas especializadas de acesso e proteção, sem parar a produção.",
    solution: "Equipe especializada em ambientes confinados e trabalho em altura, uso de EPIs específicos para ambientes corrosivos, aplicação de pintura anticorrosiva de alta performance, e cronograma integrado com a produção.",
    results: [
      "6 silos completamente restaurados e protegidos",
      "Vida útil estendida em 15 anos",
      "Zero dias de parada de produção",
      "Redução de 80% nos custos de manutenção futura"
    ],
    duration: "90 dias",
    teamSize: "15 profissionais",
    area: "25.000 m²"
  },
  {
    id: "shopping-center-plaza-sul",
    title: "Shopping Center Plaza Sul",
    location: "Curitiba, PR",
    date: "2023",
    category: "Limpeza e Manutenção",
    description: "Serviços integrados de limpeza de fachadas e manutenção geral em shopping center com alta circulação de pessoas.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    services: ["Limpeza de Fachadas", "Manutenção Geral", "Instalação de Equipamentos"],
    challenge: "Shopping em pleno funcionamento com média de 50 mil visitantes/dia. Necessidade de realizar limpeza completa de fachadas, manutenção de coberturas e instalação de novos equipamentos sem afetar o funcionamento.",
    solution: "Trabalhos noturnos (22h às 6h), isolamento de áreas com sinalização adequada, equipe treinada para trabalho em ambiente com público, e coordenação com segurança do shopping.",
    results: [
      "Fachada completamente renovada",
      "Novos equipamentos de iluminação instalados",
      "Zero reclamações de clientes ou lojistas",
      "Projeto concluído 5 dias antes do prazo"
    ],
    duration: "60 dias",
    teamSize: "20 profissionais",
    area: "15.000 m²"
  },
  {
    id: "hospital-universitario-sao-lucas",
    title: "Hospital Universitário São Lucas",
    location: "Porto Alegre, RS",
    date: "2023",
    category: "Manutenção Predial",
    description: "Manutenção preventiva especializada em ambiente hospitalar, seguindo protocolos rígidos de segurança e higiene.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    services: ["Manutenção Preventiva", "Impermeabilização", "Limpeza Especializada"],
    challenge: "Ambiente hospitalar com UTIs e centros cirúrgicos em funcionamento 24/7. Protocolos rigorosos de biossegurança, impossibilidade de ruídos em horários críticos, e risco zero de contaminação.",
    solution: "Equipe com treinamento específico em biossegurança hospitalar, uso de materiais atóxicos e sem odor, cronograma integrado com a administração do hospital, e monitoramento constante de qualidade do ar.",
    results: [
      "100% de conformidade com protocolos hospitalares",
      "Impermeabilização completa sem interromper atividades",
      "Zero casos de contaminação ou incidentes",
      "Certificação de qualidade pela vigilância sanitária"
    ],
    duration: "75 dias",
    teamSize: "10 profissionais",
    area: "18.000 m²"
  },
  {
    id: "hotel-resort-bahia-mar",
    title: "Hotel Resort Bahia Mar",
    location: "Salvador, BA",
    date: "2022",
    category: "Restauração de Fachada",
    description: "Projeto de restauração completa da fachada histórica de hotel de luxo, preservando características arquitetônicas originais.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    services: ["Restauração", "Pintura Especial", "Conservação Patrimonial"],
    challenge: "Edifício histórico tombado pelo patrimônio cultural, necessitando restauração completa com preservação de características originais, incluindo ornamentos e detalhes arquitetônicos do século XIX.",
    solution: "Trabalho em parceria com arquitetos especializados em patrimônio histórico, uso de técnicas e materiais tradicionais, restauração manual de ornamentos, e aprovação de cada etapa pelo órgão de patrimônio.",
    results: [
      "Fachada histórica completamente restaurada",
      "Preservação de 100% dos elementos originais",
      "Aprovação total do órgão de patrimônio",
      "Prêmio de preservação histórica 2022"
    ],
    duration: "120 dias",
    teamSize: "18 profissionais + consultores",
    area: "6.800 m²"
  }
];

export default function ProjectDetail() {
  const [, params] = useRoute("/projetos/:id");
  const project = projects.find(p => p.id === params?.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projeto não encontrado</h1>
          <p className="text-xl text-gray-600 mb-8">O projeto que você está procurando não existe ou foi removido.</p>
          <Link href="/projetos">
            <Button className="bg-primary hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Projetos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects (other projects excluding current one)
  const relatedProjects = projects
    .filter(p => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={`${project.title} - Projeto Heightech Alpinismo`}
        description={project.description}
        keywords={[project.category, project.location, ...project.services]}
      />

      {/* Hero Image */}
      <div className="pt-16 bg-white">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
              <Badge variant="secondary" className="bg-accent text-white mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  {project.area}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projetos">
            <Button variant="ghost" className="hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Projetos
            </Button>
          </Link>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Projeto</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            {/* Challenge */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O Desafio</h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Solução</h2>
                <p className="text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Resultados Alcançados</h2>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informações do Projeto</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Duração</div>
                    <div className="font-semibold text-gray-900">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Equipe</div>
                    <div className="font-semibold text-gray-900">{project.teamSize}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Área Total</div>
                    <div className="font-semibold text-gray-900">{project.area}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Localização</div>
                    <div className="font-semibold text-gray-900">{project.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Serviços Realizados</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Tem um projeto similar?</h3>
                <p className="text-blue-100 mb-6">
                  Entre em contato conosco e descubra como podemos ajudar a realizar seu projeto.
                </p>
                <Link href="/contato">
                  <Button className="w-full bg-accent hover:bg-yellow-600 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Outros Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.id} href={`/projetos/${relatedProject.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="bg-accent text-white mb-3">
                        {relatedProject.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedProject.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {relatedProject.location}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
