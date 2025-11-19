# Template de SEO para Páginas de Serviço

Use este template para adicionar SEO em todas as páginas de serviço.

## Como adicionar SEO em uma página

### 1. Importar o componente

No topo do arquivo, adicione:

```tsx
import SEOHead from "@/components/shared/seo-head";
```

### 2. Adicionar dentro do componente

Logo após o `return (` e antes do primeiro `<div>`, adicione:

```tsx
<SEOHead
  title="Nome do Serviço em Balneário Camboriú"
  description="Descrição do serviço com palavras-chave. Mencione Balneário Camboriú, Itapema e Santa Catarina."
  keywords={[
    "palavra-chave 1",
    "palavra-chave 2",
    "termo leigo 1",
    "termo técnico 1"
  ]}
/>
```

## Exemplos para cada serviço

### Lavação Predial

```tsx
<SEOHead
  title="Lavação Predial em Balneário Camboriú e Itapema"
  description="Lavação e limpeza profissional de fachadas prediais em Balneário Camboriú e Itapema. Limpeza de vidros, remoção de sujeira e acabamento impecável."
  keywords={[
    "lavação predial",
    "limpeza de fachada",
    "limpeza de prédio",
    "limpeza de vidros",
    "hidrojateamento"
  ]}
/>
```

### Pontos de Ancoragem

```tsx
<SEOHead
  title="Instalação de Pontos de Ancoragem com ART - Balneário Camboriú"
  description="Instalação certificada de pontos de ancoragem com laudo técnico e ART em Balneário Camboriú e Itapema. Conforme ABNT NBR 16325."
  keywords={[
    "pontos de ancoragem",
    "ART ancoragem",
    "laudo técnico",
    "NR-35",
    "segurança em altura"
  ]}
/>
```

### Restauração de Fachadas

```tsx
<SEOHead
  title="Restauração de Fachadas - Pintura, Pastilha e Reboco | Balneário Camboriú"
  description="Restauração completa de fachadas em Balneário Camboriú e Itapema. Pintura predial, aplicação de pastilhas, reboco e textura."
  keywords={[
    "restauração de fachadas",
    "pintura de fachada",
    "aplicação de pastilha",
    "reboco de fachada",
    "reforma de prédio"
  ]}
/>
```

### Instalação de ACMs

```tsx
<SEOHead
  title="Instalação de ACM em Fachadas - Balneário Camboriú e Itapema"
  description="Instalação profissional de painéis ACM (Aluminium Composite Material) em fachadas comerciais e residenciais em Balneário Camboriú."
  keywords={[
    "instalação ACM",
    "painel composto de alumínio",
    "fachada ACM",
    "revestimento de fachada",
    "fachada moderna"
  ]}
/>
```

### Limpeza Fina de Vidros

```tsx
<SEOHead
  title="Limpeza Fina de Vidros em Altura - Balneário Camboriú"
  description="Limpeza especializada e polimento de vidros em altura em Balneário Camboriú e Itapema. Acabamento profissional sem manchas."
  keywords={[
    "limpeza de vidros",
    "limpeza de vidros em altura",
    "polimento de vidros",
    "limpeza de janelas",
    "vidros de prédio"
  ]}
/>
```

### Restauração de Vidros

```tsx
<SEOHead
  title="Restauração de Vidros - Remoção de Arranhões | Balneário Camboriú"
  description="Restauração profissional de vidros com remoção de arranhões e manchas em Balneário Camboriú e Itapema. Economia de até 80% vs troca."
  keywords={[
    "restauração de vidros",
    "remoção de arranhões",
    "polimento de vidro",
    "vidro arranhado",
    "recuperação de vidro"
  ]}
/>
```

### Içamento de Cargas

```tsx
<SEOHead
  title="Içamento de Cargas em Altura - Balneário Camboriú"
  description="Serviço especializado de içamento e movimentação de cargas em altura em Balneário Camboriú. Equipamentos certificados e equipe treinada."
  keywords={[
    "içamento de cargas",
    "movimentação em altura",
    "guincho manual",
    "transporte vertical",
    "içamento industrial"
  ]}
/>
```

### Instalação de Banners e Letra Caixa

```tsx
<SEOHead
  title="Instalação de Banners e Letra Caixa em Fachadas - Balneário Camboriú"
  description="Instalação profissional de banners, letreiros e letras caixa em fachadas em Balneário Camboriú e Itapema. Trabalho em altura certificado."
  keywords={[
    "instalação de banner",
    "letra caixa",
    "letreiro luminoso",
    "comunicação visual",
    "fachada comercial"
  ]}
/>
```

### Instalação e Manutenção de LEDs

```tsx
<SEOHead
  title="Instalação e Manutenção de LED em Fachadas - Balneário Camboriú"
  description="Instalação e manutenção de sistemas de iluminação LED em fachadas e letreiros em Balneário Camboriú e Itapema."
  keywords={[
    "instalação de LED",
    "fachada de LED",
    "letreiro LED",
    "iluminação de fachada",
    "manutenção LED"
  ]}
/>
```

### Vedação de Fachadas

```tsx
<SEOHead
  title="Vedação de Fachadas contra Infiltrações - Balneário Camboriú"
  description="Vedação profissional de fachadas contra infiltrações em Balneário Camboriú e Itapema. Selagem de juntas e proteção contra intempéries."
  keywords={[
    "vedação de fachada",
    "selagem de juntas",
    "infiltração em fachada",
    "impermeabilização",
    "proteção de fachada"
  ]}
/>
```

### Pintura Industrial

```tsx
<SEOHead
  title="Pintura Industrial Anticorrosiva - Balneário Camboriú"
  description="Pintura industrial especializada com produtos anticorrosivos em Balneário Camboriú e Itapema. Alta durabilidade e resistência."
  keywords={[
    "pintura industrial",
    "pintura anticorrosiva",
    "pintura de estrutura metálica",
    "revestimento industrial",
    "proteção anticorrosiva"
  ]}
/>
```

### Limpeza de Silos

```tsx
<SEOHead
  title="Limpeza de Silos Industriais - Balneário Camboriú"
  description="Limpeza especializada de silos industriais com técnicas de acesso por corda em Balneário Camboriú. Conforme NR-33."
  keywords={[
    "limpeza de silos",
    "limpeza industrial",
    "espaço confinado",
    "NR-33",
    "silo industrial"
  ]}
/>
```

## Checklist para cada página

- [ ] Importou `SEOHead`
- [ ] Adicionou `<SEOHead>` no início do JSX
- [ ] Título menciona o serviço + localização
- [ ] Descrição tem 150-160 caracteres
- [ ] Palavras-chave incluem termos técnicos E leigos
- [ ] Menciona Balneário Camboriú ou Itapema
