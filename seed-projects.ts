import "dotenv/config";
import { db } from "./server/db";
import { projects } from "./shared/schema";

const projectsData = [
  {
    slug: "edificio-comercial-torre-norte",
    title: "Edifício Comercial Torre Norte",
    location: "São Paulo, SP",
    date: "2024",
    category: "Limpeza de Fachadas",
    description: "Limpeza completa de fachada de vidro em edifício comercial de 25 andares com sistema de hidrojateamento e produtos especializados.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
    area: "12.000 m²",
    published: true,
    featured: true,
    order: 1
  },
  {
    slug: "condominio-residencial-vista-mar",
    title: "Condomínio Residencial Vista Mar",
    location: "Rio de Janeiro, RJ",
    date: "2024",
    category: "Pintura e Impermeabilização",
    description: "Projeto completo de pintura externa e impermeabilização de fachada em condomínio residencial de alto padrão.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
    area: "8.500 m²",
    published: true,
    featured: true,
    order: 2
  },
  {
    slug: "complexo-industrial-mineracaobr",
    title: "Complexo Industrial MineraçãoBR",
    location: "Belo Horizonte, MG",
    date: "2023",
    category: "Manutenção Industrial",
    description: "Manutenção preventiva e corretiva de silos e estruturas metálicas em complexo industrial de grande porte.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
    area: "25.000 m²",
    published: true,
    featured: true,
    order: 3
  },
  {
    slug: "shopping-center-plaza-sul",
    title: "Shopping Center Plaza Sul",
    location: "Curitiba, PR",
    date: "2023",
    category: "Limpeza e Manutenção",
    description: "Serviços integrados de limpeza de fachadas e manutenção geral em shopping center com alta circulação de pessoas.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
    area: "15.000 m²",
    published: true,
    featured: false,
    order: 4
  },
  {
    slug: "hospital-universitario-sao-lucas",
    title: "Hospital Universitário São Lucas",
    location: "Porto Alegre, RS",
    date: "2023",
    category: "Manutenção Predial",
    description: "Manutenção preventiva especializada em ambiente hospitalar, seguindo protocolos rígidos de segurança e higiene.",
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
    area: "18.000 m²",
    published: true,
    featured: false,
    order: 5
  },
  {
    slug: "hotel-resort-bahia-mar",
    title: "Hotel Resort Bahia Mar",
    location: "Salvador, BA",
    date: "2022",
    category: "Restauração de Fachada",
    description: "Projeto de restauração completa da fachada histórica de hotel de luxo, preservando características arquitetônicas originais.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
    area: "6.800 m²",
    published: true,
    featured: false,
    order: 6
  }
];

async function seedProjects() {
  try {
    console.log("🚀 Iniciando seed da tabela projects...\n");

    for (const projectData of projectsData) {
      console.log(`   Inserindo: ${projectData.title}...`);

      const result = await db.insert(projects).values(projectData).returning();

      console.log(`   ✅ Projeto criado com ID: ${result[0].id}`);
    }

    console.log("\n✅ Seed concluído com sucesso!");
    console.log(`\n📊 Total de projetos inseridos: ${projectsData.length}`);
    console.log(`   - Publicados: ${projectsData.filter(p => p.published).length}`);
    console.log(`   - Em destaque: ${projectsData.filter(p => p.featured).length}`);

    process.exit(0);
  } catch (error: any) {
    console.error("❌ Erro ao fazer seed:", error.message);

    if (error.message.includes("unique")) {
      console.log("\n⚠️  Alguns projetos já existem no banco de dados.");
      console.log("   Para re-executar o seed, primeiro delete os projetos existentes.");
    }

    process.exit(1);
  }
}

seedProjects();
