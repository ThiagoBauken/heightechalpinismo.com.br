# ✅ CHECKLIST DE TESTES - HEIGHTECH (INDUSTRIAL CLIMBERS)

## 🏠 PÁGINA INICIAL (Home)

### Seções
- [ ] Hero Section carrega corretamente
- [ ] Vídeo de fundo está funcionando (se aplicável)
- [ ] Grid de serviços exibe todos os 16 serviços
- [ ] Cada card de serviço tem imagem, título e descrição
- [ ] Links dos cards levam para páginas corretas
- [ ] Seção "Sobre" está visível
- [ ] Estatísticas aparecem corretamente
- [ ] Galeria de projetos carrega
- [ ] Seção de certificações está visível
- [ ] Depoimentos aparecem
- [ ] FAQ funciona (acordeão abre/fecha)
- [ ] CTA final está presente
- [ ] Todos os botões "Solicitar Orçamento" funcionam

### Responsividade
- [ ] Mobile (< 768px) - menu hamburguer funciona
- [ ] Tablet (768px - 1024px) - layout adapta
- [ ] Desktop (> 1024px) - layout completo

---

## 🔧 PÁGINAS DE SERVIÇOS (16 páginas)

### Serviços Principais
- [ ] `/servicos/lavacao-predial` - Lavação Predial
- [ ] `/servicos/pontos-ancoragem` - Pontos de Ancoragem
- [ ] `/servicos/restauracao-fachadas` - Restauração de Fachadas
- [ ] `/servicos/instalacao-acms` - Instalação de ACMs
- [ ] `/servicos/limpeza-vidros` - Limpeza de Vidros
- [ ] `/servicos/restauracao-vidros` - Restauração de Vidros
- [ ] `/servicos/icamento-cargas` - Içamento de Cargas
- [ ] `/servicos/banners-letra-caixa` - Banners e Letra Caixa
- [ ] `/servicos/leds` - Instalação de LEDs
- [ ] `/servicos/vedacao-fachadas` - Vedação de Fachadas
- [ ] `/servicos/pintura-industrial` - Pintura Industrial
- [ ] `/servicos/limpeza-silos` - Limpeza de Silos

### Novos Serviços
- [ ] `/servicos/trabalhos-industriais` - Trabalhos Industriais
- [ ] `/servicos/manutencoes-eletricas` - Manutenções Elétricas
- [ ] `/servicos/mapeamento-fachadas` - Mapeamento de Fachadas
- [ ] `/servicos/reforma-predial` - Reforma Predial

### Checklist por Página de Serviço
Para cada serviço, verificar:
- [ ] Título do serviço aparece
- [ ] Imagem/banner carrega
- [ ] Descrição está completa
- [ ] Lista de características presente
- [ ] Equipamentos listados
- [ ] Benefícios aparecem
- [ ] Formulário de orçamento funciona
- [ ] SEO metadata está configurado
- [ ] Breadcrumbs funcionam
- [ ] Botão "Voltar" funciona

---

## 📝 BLOG

### Página Principal (`/blog`)
- [ ] 6 posts aparecem na grid
- [ ] Imagens dos posts carregam
- [ ] Filtro por categoria funciona
- [ ] Contador de posts por categoria correto
- [ ] Data de publicação formatada (pt-BR)
- [ ] Tempo de leitura aparece
- [ ] Autor do post visível
- [ ] Hover nos cards funciona
- [ ] Newsletter signup visível (não funcional ainda - OK)

### Categorias para Testar
- [ ] "Todos" mostra 6 posts
- [ ] "Segurança" filtra corretamente
- [ ] "Normas" filtra corretamente
- [ ] "Casos de Estudo" filtra corretamente
- [ ] "Manutenção" filtra corretamente

### Página Individual (`/blog/:id`)
Testar cada post:
- [ ] `/blog/nr35-completa-2024`
- [ ] `/blog/equipamentos-seguranca-alpinismo`
- [ ] `/blog/caso-estudo-limpeza-fachada-comercial`
- [ ] `/blog/manutencao-preventiva-predios`
- [ ] `/blog/certificacao-irata-alpinismo`
- [ ] `/blog/impermeabilizacao-altura-tecnicas`

Para cada post individual:
- [ ] Título aparece corretamente
- [ ] Imagem de destaque carrega
- [ ] Conteúdo HTML renderiza
- [ ] Metadados (autor, data, tempo) aparecem
- [ ] Tags são exibidas
- [ ] Posts relacionados aparecem
- [ ] Botão "Voltar ao Blog" funciona
- [ ] CTA de orçamento está presente
- [ ] SEO metadata dinâmica configurada

### Testes de Navegação
- [ ] Clicar em post leva para `/blog/:id`
- [ ] Analytics trackeia clique no post
- [ ] URL muda corretamente
- [ ] Página não retorna 404

---

## 📊 DASHBOARD (`/dashboard`)

### Acesso
- [ ] Rota `/dashboard` acessível
- [ ] Página carrega sem erros
- [ ] **⚠️ ATENÇÃO:** Dashboard está PÚBLICO (adicionar proteção!)

### Métricas
- [ ] Total de visualizações aparece
- [ ] Cliques WhatsApp contabilizados
- [ ] Cliques Instagram contabilizados
- [ ] Submissões de formulário aparecem
- [ ] Taxa de conversão calculada
- [ ] Taxa de rejeição exibida
- [ ] Gráfico de dispositivos aparece
  - [ ] Mobile (68%)
  - [ ] Desktop (28%)
  - [ ] Tablet (4%)

### Funcionalidade
- [ ] Dados carregam da API `/api/analytics/dashboard`
- [ ] Loading state funciona
- [ ] Erro é tratado se API falhar

---

## 📞 PÁGINA DE CONTATO (`/contato`)

### Informações
- [ ] Telefone aparece: (11) 96262-7376
- [ ] Email aparece: contato@heightech.com.br
- [ ] Endereço visível
- [ ] Horário de atendimento correto
- [ ] Mapa (se houver) carrega

### Redes Sociais
- [ ] Facebook abre: https://www.facebook.com/heightechalpinismo
- [ ] Instagram abre: https://www.instagram.com/heightechalpinismo
- [ ] LinkedIn abre: https://www.linkedin.com/company/heightechalpinismo
- [ ] YouTube abre: https://www.youtube.com/@heightechalpinismo
- [ ] Todos abrem em nova aba (`target="_blank"`)

### Formulário de Contato
- [ ] Campo Nome aceita input
- [ ] Campo Email valida formato
- [ ] Campo Telefone aceita input
- [ ] Campo Mensagem aceita texto
- [ ] Botão "Enviar" funciona
- [ ] Loading state ao enviar
- [ ] Toast de sucesso aparece
- [ ] Dados salvam no banco via `POST /api/contact`
- [ ] Formulário limpa após envio
- [ ] Tratamento de erro se API falhar

---

## 🖼️ PÁGINA DE PROJETOS (`/projetos`)

- [ ] Página carrega
- [ ] Galeria de projetos aparece
- [ ] Imagens carregam
- [ ] Filtros funcionam (se houver)
- [ ] Layout responsivo

---

## 🧭 NAVEGAÇÃO GLOBAL

### Header
- [ ] Logo aparece
- [ ] Logo leva para home ao clicar
- [ ] Menu "Início" funciona
- [ ] Menu "Serviços" funciona
  - [ ] Dropdown/submenu aparece (se aplicável)
- [ ] Menu "Projetos" funciona
- [ ] Menu "Blog" funciona
- [ ] Menu "Contato" funciona
- [ ] Botão "Solicitar Orçamento" funciona
- [ ] Header fixa no topo ao scroll
- [ ] Menu mobile hamburguer funciona

### Footer
- [ ] Informações da empresa aparecem
- [ ] Links de serviços funcionam (todos os 16)
- [ ] Links rápidos funcionam
- [ ] Informações de contato corretas
- [ ] Redes sociais funcionam
- [ ] Copyright aparece
- [ ] Footer responsivo

### WhatsApp Button (Flutuante)
- [ ] Botão aparece no canto inferior direito
- [ ] Botão fica fixo ao scroll
- [ ] Link abre WhatsApp corretamente
- [ ] Número correto: +5511962627376
- [ ] Mensagem pré-preenchida (se houver)

---

## 🔌 FORMULÁRIOS E APIs

### Formulário de Orçamento
Testar em cada página que tem o QuoteForm:
- [ ] Campos aparecem corretamente
- [ ] Validação funciona
- [ ] Envio funciona via `POST /api/quote`
- [ ] Dados salvam no banco
- [ ] Toast de sucesso/erro aparece
- [ ] Loading state funciona

### Analytics
- [ ] Eventos são rastreados via `POST /api/analytics`
- [ ] Cliques em posts do blog registrados
- [ ] Dados aparecem no dashboard

### APIs Backend
- [ ] `GET /api/contacts` - lista contatos
- [ ] `GET /api/quotes` - lista orçamentos
- [ ] `GET /api/metrics/contacts` - métricas (30 dias)
- [ ] `GET /api/metrics/quotes` - métricas
- [ ] `GET /sitemap.xml` - sitemap gerado
- [ ] `GET /robots.txt` - robots.txt presente

---

## 🔍 SEO E PERFORMANCE

### SEO
- [ ] Título da página correto em todas as páginas
- [ ] Meta description presente
- [ ] Meta keywords configurados
- [ ] Open Graph tags (Facebook/LinkedIn)
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Sitemap.xml acessível
- [ ] Robots.txt configurado

### Performance
- [ ] Imagens otimizadas (OptimizedImage component)
- [ ] Lazy loading funciona
- [ ] Página carrega em < 3 segundos
- [ ] Sem erros no console
- [ ] Sem warnings no console

### Acessibilidade
- [ ] Textos alternativos em imagens
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funciona
- [ ] Aria labels presentes

---

## 🚨 TESTES DE ERRO

### Rotas
- [ ] URL inexistente mostra página 404
- [ ] Página 404 tem botão "Voltar"
- [ ] Blog post inexistente mostra erro
- [ ] Tratamento de erro em formulários

### Compatibilidade
- [ ] Chrome/Edge (últimas versões)
- [ ] Firefox (última versão)
- [ ] Safari (macOS/iOS)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

---

## 📱 TESTES MOBILE ESPECÍFICOS

- [ ] Toque funciona em todos os botões
- [ ] Menu hamburguer abre/fecha
- [ ] Formulários são usáveis no mobile
- [ ] WhatsApp button não sobrepõe conteúdo
- [ ] Imagens não quebram layout
- [ ] Texto é legível (tamanho mínimo 16px)
- [ ] Links têm área de toque adequada (min 44x44px)

---

## ⚠️ ISSUES CONHECIDAS (Para Corrigir)

### Alta Prioridade
- [ ] **Dashboard sem proteção** - qualquer pessoa pode acessar
- [ ] **Newsletter não funcional** - apenas visual

### Média Prioridade
- [ ] Apenas 6 posts no blog - adicionar mais conteúdo
- [ ] Página de projetos básica - adicionar galeria real

### Baixa Prioridade
- [ ] Sitemap já foi limpo ✅
- [ ] Links sociais corrigidos ✅

---

## ✅ STATUS GERAL

**Total de Testes:** ~150 itens
**Páginas:** 24+ páginas
**Rotas:** 20+ rotas configuradas

**Última Atualização:** 2025-11-19

---

## 🚀 CHECKLIST PRÉ-DEPLOY

Antes de colocar no ar:
- [ ] Todos os testes acima passaram
- [ ] Banco de dados de produção configurado
- [ ] Variáveis de ambiente (.env) configuradas
- [ ] Analytics/Google Tag Manager instalado
- [ ] Domínio configurado
- [ ] SSL/HTTPS configurado
- [ ] Backup do banco configurado
- [ ] Monitoramento de erros (Sentry, etc)
- [ ] Dashboard protegido com senha
- [ ] Testar em ambiente de staging primeiro
