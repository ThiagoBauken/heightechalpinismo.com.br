import { IdCard, Award, Shield, CheckCircle, HardHat, GraduationCap, ClipboardCheck } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      icon: IdCard,
      title: "NR-35",
      description: "Norma Regulamentadora para Trabalho em Altura"
    },
    {
      icon: Award,
      title: "IRATA",
      description: "International Rope Access Trade Association"
    },
    {
      icon: Shield,
      title: "ANEAC",
      description: "Associação Nacional de Empresas de Acesso por Cordas"
    },
    {
      icon: CheckCircle,
      title: "ISO 9001",
      description: "Sistema de Gestão da Qualidade"
    }
  ];

  const safetyCommitments = [
    {
      icon: HardHat,
      title: "Equipamentos Certificados",
      description: "Todos os EPIs seguem rigorosos padrões de qualidade"
    },
    {
      icon: GraduationCap,
      title: "Equipe Treinada",
      description: "Profissionais certificados e em constante capacitação"
    },
    {
      icon: ClipboardCheck,
      title: "Procedimentos Rigorosos",
      description: "Protocolos de segurança detalhados para cada serviço"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificações e Normas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos em conformidade com as principais normas de segurança e possuímos certificações reconhecidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="text-center p-6 bg-muted rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Compromisso com a Segurança</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyCommitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="text-accent text-3xl mb-4 mx-auto" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{commitment.title}</h4>
                  <p className="text-gray-600">{commitment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
