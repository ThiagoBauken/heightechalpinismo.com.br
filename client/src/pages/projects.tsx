import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";
import { Link } from "wouter";

export default function Projects() {
  const projects = [
    {
      id: "edificio-comercial-torre-norte",
      title: "Edifício Comercial Torre Norte",
      location: "São Paulo, SP",
      date: "2024",
      category: "Limpeza de Fachadas",
      description: "Limpeza completa de fachada de vidro em edifício comercial de 25 andares com sistema de hidrojateamento e produtos especializados.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: ["Limpeza de Vidros", "Hidrojateamento", "Acabamento Profissional"]
    },
    {
      id: "condominio-residencial-vista-mar",
      title: "Condomínio Residencial Vista Mar",
      location: "Rio de Janeiro, RJ",
      date: "2024",
      category: "Pintura e Impermeabilização",
      description: "Projeto completo de pintura externa e impermeabilização de fachada em condomínio residencial de alto padrão.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: ["Pintura Externa", "Impermeabilização", "Selagem de Fissuras"]
    },
    {
      id: "complexo-industrial-mineracaobr",
      title: "Complexo Industrial MineraçãoBR",
      location: "Belo Horizonte, MG",
      date: "2023",
      category: "Manutenção Industrial",
      description: "Manutenção preventiva e corretiva de silos e estruturas metálicas em complexo industrial de grande porte.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: ["Manutenção de Silos", "Pintura Anticorrosiva", "Inspeção Estrutural"]
    },
    {
      id: "shopping-center-plaza-sul",
      title: "Shopping Center Plaza Sul",
      location: "Curitiba, PR",
      date: "2023",
      category: "Limpeza e Manutenção",
      description: "Serviços integrados de limpeza de fachadas e manutenção geral em shopping center com alta circulação de pessoas.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: ["Limpeza de Fachadas", "Manutenção Geral", "Instalação de Equipamentos"]
    },
    {
      id: "hospital-universitario-sao-lucas",
      title: "Hospital Universitário São Lucas",
      location: "Porto Alegre, RS",
      date: "2023",
      category: "Manutenção Predial",
      description: "Manutenção preventiva especializada em ambiente hospitalar, seguindo protocolos rígidos de segurança e higiene.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: ["Manutenção Preventiva", "Impermeabilização", "Limpeza Especializada"]
    },
    {
      id: "hotel-resort-bahia-mar",
      title: "Hotel Resort Bahia Mar",
      location: "Salvador, BA",
      date: "2022",
      category: "Restauração de Fachada",
      description: "Projeto de restauração completa da fachada histórica de hotel de luxo, preservando características arquitetônicas originais.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      services: ["Restauração", "Pintura Especial", "Conservação Patrimonial"]
    }
  ];

  const categories = [
    "Todos",
    "Limpeza de Fachadas",
    "Pintura e Impermeabilização",
    "Manutenção Industrial",
    "Manutenção Predial",
    "Restauração de Fachada"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conheça alguns dos principais projetos realizados pela Heightech Alpinismo em todo o Brasil
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">27</div>
              <div className="text-gray-600">Estados Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Projetos Concluídos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma seleção dos nossos trabalhos mais representativos em diferentes segmentos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={`/projetos/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-accent text-white">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Serviços Realizados:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Seu Projeto Pode Ser o Próximo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a realizar seu projeto com excelência e segurança
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="bg-accent hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
            >
              Solicitar Orçamento
            </a>
            <a 
              href="tel:(11)9999-9999" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
