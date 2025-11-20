import { Shield, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a Heightech Alpinismo Industrial
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A Heightech é uma empresa especializada em alpinismo industrial e acesso por corda,
              oferecendo soluções seguras e eficientes para trabalhos em altura. Atuamos principalmente
              em Balneário Camboriú, Itapema e região, trabalhando nos maiores edifícios do Sul do Brasil.
              Com mais de 15 anos de experiência no mercado, somos referência em qualidade e segurança.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe é composta por profissionais certificados segundo as normas NR-35 e 
              IRATA (International Rope Access Trade Association), garantindo os mais altos 
              padrões de segurança em todos os nossos serviços.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Segurança Total</h3>
                  <p className="text-gray-600 text-sm">
                    Zero acidentes em mais de 500 projetos realizados
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certificações</h3>
                  <p className="text-gray-600 text-sm">
                    Equipe certificada NR-35 e IRATA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experiência</h3>
                  <p className="text-gray-600 text-sm">
                    Mais de 15 anos no mercado de alpinismo industrial
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Disponibilidade</h3>
                  <p className="text-gray-600 text-sm">
                    Atendimento 24h para emergências
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato">
                <Button size="lg" className="bg-primary hover:bg-red-700">
                  Solicitar Orçamento
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Ver Projetos Realizados
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Equipe Heightech trabalhando em altura com equipamentos de segurança"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Badge flutuante */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Projetos Concluídos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}