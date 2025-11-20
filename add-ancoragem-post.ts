import "dotenv/config";
import { db } from "./server/db";
import { blogPosts } from "./shared/schema";

const post = {
  slug: "pontos-ancoragem-verificacoes-regulares",
  title: "Pontos de Ancoragem: A Importância das Verificações Regulares",
  excerpt: "Descubra por que as verificações regulares dos pontos de ancoragem são essenciais para garantir a segurança em trabalho em altura e evitar acidentes graves. Aprenda os procedimentos corretos de inspeção.",
  content: `# Pontos de Ancoragem: A Importância das Verificações Regulares

Os pontos de ancoragem são elementos fundamentais para a segurança em trabalho em altura. Eles representam a primeira linha de defesa contra quedas e podem significar a diferença entre a vida e a morte. No entanto, muitos acidentes graves ocorrem não pela falta de pontos de ancoragem, mas sim pela falta de verificações adequadas antes de sua utilização.

## Por Que as Verificações São Tão Importantes?

### 1. Degradação Natural dos Materiais

Com o tempo, todos os materiais sofrem degradação devido a:
- **Exposição ao sol**: Raios UV enfraquecem fibras e polímeros
- **Chuva e umidade**: Causam corrosão em metais e apodrecimento em madeiras
- **Variações de temperatura**: Dilatação e contração enfraquecem estruturas
- **Poluição atmosférica**: Produtos químicos aceleram a deterioração

Um ponto de ancoragem que era seguro há 6 meses pode estar completamente comprometido hoje.

### 2. Danos Não Visíveis

Muitos danos críticos não são detectáveis a olho nu:
- Microfissuras em estruturas metálicas
- Corrosão interna em tubulações
- Desgaste de roscas e parafusos
- Fadiga de materiais por uso repetido
- Danos por sobrecarga anterior

### 3. Exigências Legais

A **NR-35** (Norma Regulamentadora 35) estabelece que:
- Todo ponto de ancoragem deve ser inspecionado antes do uso
- Inspeções periódicas devem ser documentadas
- Pontos comprometidos devem ser imediatamente desativados
- A capacitação dos trabalhadores deve incluir procedimentos de inspeção

**Não conformidade pode resultar em**:
- Multas pesadas
- Interdição de obras
- Responsabilização civil e criminal em caso de acidentes

## O Que Verificar Antes de Usar um Ponto de Ancoragem

### Inspeção Visual Detalhada

#### Para Pontos de Ancoragem Estruturais:

**Elementos Metálicos**:
- ✅ Verificar sinais de corrosão (manchas, descascamento, oxidação)
- ✅ Procurar por trincas, fissuras ou deformações
- ✅ Conferir se parafusos e porcas estão apertados
- ✅ Verificar se há pintura descascada (pode indicar corrosão)
- ✅ Observar sinais de solda rompida ou rachada

**Elementos de Concreto**:
- ✅ Verificar rachaduras ou fissuras no concreto
- ✅ Conferir se o chumbador está firme (não gira ou balança)
- ✅ Observar sinais de desagregação do concreto ao redor
- ✅ Verificar se há ferragem exposta
- ✅ Conferir se houve perda de aderência

**Elementos de Madeira**:
- ✅ Verificar apodrecimento (madeira mole ao toque)
- ✅ Procurar por rachaduras ou trincas
- ✅ Observar sinais de ataque de insetos
- ✅ Conferir se a madeira está úmida
- ✅ Verificar se conexões estão firmes

### Teste de Resistência

⚠️ **IMPORTANTE**: Nunca teste um ponto de ancoragem aplicando seu peso corporal completo sem estar conectado a um segundo ponto seguro!

**Métodos Corretos de Verificação**:

1. **Teste Manual de Firmeza**:
   - Aplique força manual gradual
   - Verifique se há movimento ou folga
   - Escute sons de estalido ou ruptura

2. **Teste de Tração Instrumentado** (para pontos fixos permanentes):
   - Use dinamômetro para medir resistência
   - NR-35 exige resistência mínima de 15kN (1500kg) por trabalhador
   - Documente os resultados
   - Realize teste anualmente ou após sobrecarga

3. **Verificação de Dispositivos**:
   - Mosquetões: gate fecha completamente e trava
   - Argolas: sem deformações ou desgaste excessivo
   - Placas: parafusos apertados, sem rachaduras

## Frequência de Inspeções

### Inspeção Diária (Antes de Cada Uso)
**Responsável**: Trabalhador que utilizará o ponto
**Duração**: 2-5 minutos
**Checklist Rápido**:
- Inspeção visual
- Teste manual de firmeza
- Verificação de sinalização
- Conferência de capacidade

### Inspeção Periódica Detalhada
**Responsável**: Profissional capacitado/Engenheiro
**Frequência**: Trimestral ou semestral (conforme fabricante)
**Inclui**:
- Inspeção visual detalhada
- Testes de carga
- Medições instrumentadas
- Documentação fotográfica
- Emissão de laudo

### Inspeção Extraordinária
**Quando Realizar**:
- Após qualquer queda detida pelo sistema
- Após eventos climáticos extremos (vendavais, tempestades)
- Após impacto ou sobrecarga
- Quando houver suspeita de comprometimento
- Após reforma ou modificação estrutural

## Sinalização e Identificação

Todo ponto de ancoragem deve ter:

### Placa de Identificação
- **Capacidade de carga**: em kN
- **Data da última inspeção**
- **Próxima inspeção prevista**
- **Tipo de ancoragem**: temporária ou permanente
- **Responsável pela inspeção**

### Codificação por Cores
- 🟢 **Verde**: Aprovado, uso liberado
- 🟡 **Amarelo**: Atenção, inspecionar antes do uso
- 🔴 **Vermelho**: Interditado, uso proibido
- ⚫ **Preto**: Aguardando inspeção técnica

## Documentação Obrigatória

### Livro de Inspeções
Mantenha registro de:
- Data e hora de cada inspeção
- Nome do inspetor
- Condições encontradas
- Ações corretivas realizadas
- Assinatura do responsável

### Laudos Técnicos
- Laudo inicial de instalação
- Laudos periódicos de inspeção
- Laudos após eventos extraordinários
- ART (Anotação de Responsabilidade Técnica)

## Sinais de Alerta: Quando NÃO Utilizar

❌ **NUNCA utilize um ponto de ancoragem se**:
- Houver qualquer sinal de corrosão avançada
- Existirem trincas ou fissuras visíveis
- O ponto apresentar movimento ou folga
- Faltarem parafusos ou fixações
- Não houver placa de identificação
- A data da última inspeção estiver vencida
- Houver dúvida sobre sua integridade
- O ponto não suportar o teste manual de firmeza

**Em caso de dúvida, NÃO USE!**

## Manutenção Preventiva

### Ações Regulares

**Pontos Metálicos**:
- Limpeza trimestral
- Pintura anticorrosiva anual
- Reaperto de parafusos semestralmente
- Lubrificação de roscas

**Pontos em Concreto**:
- Limpeza e verificação semestral
- Reforço de chumbadores quando necessário
- Selagem de fissuras
- Proteção contra infiltração

**Pontos em Madeira**:
- Tratamento contra cupins anualmente
- Impermeabilização
- Substituição quando comprometido
- Verificação de conexões

## Consequências da Negligência

A falta de verificações adequadas pode resultar em:

### Para o Trabalhador
- Acidentes graves ou fatais
- Traumas físicos permanentes
- Traumas psicológicos

### Para a Empresa
- Multas de até R$ 100.000,00
- Interdição de obras
- Processos trabalhistas
- Danos à reputação
- Responsabilização criminal dos gestores

### Casos Reais
Estudos mostram que **35% dos acidentes em trabalho em altura** estão relacionados a falhas em pontos de ancoragem não inspecionados adequadamente.

## Capacitação da Equipe

Todo trabalhador deve ser treinado para:
- Reconhecer pontos de ancoragem adequados
- Realizar inspeção visual básica
- Identificar sinais de comprometimento
- Reportar problemas imediatamente
- Utilizar corretamente o sistema de ancoragem
- Compreender os limites de carga

## Checklist de Verificação Rápida

📋 **Antes de Cada Uso - 2 Minutos Que Salvam Vidas**:

- [ ] O ponto está identificado e sinalizado?
- [ ] A placa indica "aprovado" ou "liberado"?
- [ ] A data da última inspeção está dentro do prazo?
- [ ] Não há sinais visíveis de corrosão ou danos?
- [ ] O ponto está firmemente fixado (sem movimento)?
- [ ] Os parafusos e fixações estão apertados?
- [ ] A capacidade de carga é adequada para o trabalho?
- [ ] Não há sinais de uso inadequado anterior?
- [ ] O ponto está em local acessível e seguro?
- [ ] Tenho dúvidas sobre a segurança? Se SIM → NÃO USE!

## Conclusão

A verificação regular de pontos de ancoragem não é apenas uma exigência legal, mas um **imperativo moral**. Cada inspeção realizada pode evitar um acidente grave ou fatal.

**Lembre-se**: Um ponto de ancoragem comprometido não oferece segunda chance. Os poucos minutos dedicados à inspeção são um pequeno investimento em comparação com o valor inestimável de uma vida.

### Sua Segurança, Nossa Prioridade

Na **Heightech**, todos os nossos trabalhos seguem rigorosos protocolos de inspeção:
- Verificação antes, durante e após cada tarefa
- Documentação fotográfica completa
- Laudos técnicos de todos os pontos utilizados
- Equipe treinada e certificada NR-35
- Equipamentos de última geração

**Não arrisque. Verifique sempre.**

---

## Precisa de Suporte Profissional?

Se você precisa de:
- Inspeção técnica de pontos de ancoragem
- Instalação de novos pontos certificados
- Treinamento de equipes NR-35
- Laudos técnicos e documentação
- Consultoria em segurança para trabalho em altura

Entre em contato conosco - Nossa equipe está pronta para ajudar!

---

**Referências**:
- NR-35 - Ministério do Trabalho e Emprego
- ABNT NBR 15475 - Sistemas de Ancoragem
- IRATA International Code of Practice`,
  category: "seguranca",
  tags: ["ancoragem", "segurança", "NR-35", "manutenção", "inspeção", "trabalho em altura"],
  imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  author: "Equipe Heightech",
  readTime: 8,
  published: true,
  publishedAt: new Date()
};

async function addPost() {
  try {
    console.log("🚀 Adicionando post sobre Pontos de Ancoragem...\n");

    const result = await db.insert(blogPosts).values(post).returning();

    console.log("✅ Post adicionado com sucesso!");
    console.log("\n📄 Detalhes do post:");
    console.log(`   ID: ${result[0].id}`);
    console.log(`   Título: ${result[0].title}`);
    console.log(`   Slug: ${result[0].slug}`);
    console.log(`   Categoria: ${result[0].category}`);
    console.log(`   Tags: ${result[0].tags?.join(", ")}`);
    console.log(`   Publicado: ${result[0].published ? "Sim" : "Não"}`);
    console.log(`   Data de publicação: ${result[0].publishedAt?.toLocaleString('pt-BR')}`);
    console.log(`\n🌐 Acesse em: /blog/${result[0].slug}`);

    process.exit(0);
  } catch (error: any) {
    console.error("❌ Erro ao adicionar post:", error.message);

    if (error.message.includes("unique")) {
      console.log("\n⚠️  O post com este slug já existe no banco de dados.");
      console.log("   Você pode atualizar o post existente ou usar um slug diferente.");
    }

    process.exit(1);
  }
}

addPost();
