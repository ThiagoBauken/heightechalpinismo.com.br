# Guia Completo de SEO - Heightech Alpinismo

## Como Aparecer no Google (Balneário Camboriú e Itapema)

Este guia explica tudo que foi feito para otimizar o site para mecanismos de busca (Google, Bing, Safari/DuckDuckGo, etc.) e o que você precisa fazer após o deploy.

---

## O que foi implementado no site

### 1. Componente SEO (seo-head.tsx) ✅

Criei um componente que adiciona automaticamente:
- **Meta tags otimizadas** com título, descrição e palavras-chave
- **Open Graph** para compartilhamento em redes sociais
- **Geo tags** para SEO local (Balneário Camboriú e Itapema)
- **Schema.org** para dados estruturados
- **Canonical URLs** para evitar conteúdo duplicado

### 2. Palavras-chave Estratégicas

#### Termos Técnicos (para empresas que sabem o que procuram):
- Alpinismo industrial
- Trabalho em altura
- Acesso por corda
- NR-35
- Instalação de pontos de ancoragem
- Pintura industrial
- Vedação de fachadas
- Içamento de cargas
- Limpeza de silos

#### Termos Leigos (para quem não conhece os nomes técnicos):
- Limpeza de prédio
- Pintura de prédio
- Manutenção de edifício
- Limpeza de vidros
- Serviços em altura
- Lavação de fachada
- Instalação de letreiro
- Manutenção de LED

#### SEO Local (região):
- Balneário Camboriú
- Itapema
- Santa Catarina
- Litoral catarinense
- Região de BC

### 3. Arquivos Criados

- ✅ **sitemap.xml** - Lista todas as páginas para o Google indexar
- ✅ **robots.txt** - Permite que buscadores acessem o site
- ✅ **SEOHead component** - Meta tags otimizadas em todas as páginas

---

## Ações OBRIGATÓRIAS após o deploy

### 1. Google Search Console

**O QUE É:** Ferramenta gratuita do Google para monitorar seu site nos resultados de busca.

**COMO FAZER:**
1. Acesse: https://search.google.com/search-console
2. Clique em "Adicionar propriedade"
3. Digite: `https://heightechalpinismo.com.br`
4. Siga as instruções de verificação (adicionar tag HTML ou arquivo)
5. Após verificado, vá em "Sitemaps" e adicione:
   ```
   https://heightechalpinismo.com.br/sitemap.xml
   ```

**POR QUE:** Isso faz o Google indexar todas as suas páginas rapidamente.

### 2. Google Meu Negócio (ESSENCIAL para SEO Local)

**O QUE É:** Perfil da empresa que aparece no Google Maps e buscas locais.

**COMO FAZER:**
1. Acesse: https://business.google.com
2. Clique em "Gerenciar agora"
3. Preencha:
   - Nome: Heightech Alpinismo Industrial
   - Categoria: Serviços de alpinismo industrial / Trabalho em altura
   - Endereço: **Use um endereço comercial em Balneário Camboriú ou Itapema**
   - Telefone: Seu número comercial
   - Site: https://heightechalpinismo.com.br
   - Área de atendimento: Balneário Camboriú, Itapema, Bombinhas, Camboriú, etc.

4. Adicione fotos:
   - Logo da empresa
   - Fotos de trabalhos realizados
   - Equipe trabalhando
   - Certificações

5. Peça avaliações para clientes satisfeitos!

**POR QUE:** Quando alguém buscar "limpeza de fachada Balneário Camboriú", você aparecerá no mapa!

### 3. Bing Webmaster Tools

**O QUE É:** Versão do Bing do Search Console.

**COMO FAZER:**
1. Acesse: https://www.bing.com/webmasters
2. Adicione seu site
3. Envie o sitemap: `https://heightechalpinismo.com.br/sitemap.xml`

**POR QUE:** Safari no iPhone usa Bing/DuckDuckGo. Você pega mais tráfego.

### 4. Schema.org / Dados Estruturados

Já está configurado no código! Mas você precisa validar:

1. Acesse: https://search.google.com/test/rich-results
2. Digite: `https://heightechalpinismo.com.br`
3. Verifique se aparece "LocalBusiness" e "Organization"

---

## Estratégia de Conteúdo (Para Ranquear Melhor)

### 1. Blog Posts Recomendados

Crie artigos com esses títulos (use termos leigos + técnicos):

**Para Pessoas Leigas:**
- "Como limpar vidros de prédio alto em Balneário Camboriú"
- "Quanto custa pintar um edifício em Itapema?"
- "5 sinais de que sua fachada precisa de manutenção"
- "Como escolher empresa de limpeza de prédio confiável"

**Para Empresas:**
- "NR-35: O que você precisa saber sobre trabalho em altura"
- "Instalação de pontos de ancoragem com ART em SC"
- "Alpinismo industrial vs andaimes: qual é melhor?"
- "Manutenção preventiva de fachadas: guia completo"

**SEO Local:**
- "Melhores serviços de alpinismo industrial em Balneário Camboriú"
- "Empresas de trabalho em altura em Itapema - SC"

### 2. Otimização de Imagens

SEMPRE que adicionar imagens:
- Nome do arquivo: `limpeza-fachada-balneario-camboriu.jpg`
- Alt text: "Limpeza profissional de fachada em Balneário Camboriú"

### 3. Depoimentos e Avaliações

Peça para clientes satisfeitos deixarem avaliações no Google Meu Negócio com:
- Nome da cidade (ex: "Excelente serviço em Balneário Camboriú")
- Tipo de serviço (ex: "Fizeram limpeza de fachada no nosso prédio")

---

## Checklist Pós-Deploy

Use esta lista para garantir que tudo está funcionando:

### Imediato (Dia 1)
- [ ] Site está no ar em heightechalpinismo.com.br
- [ ] Criar conta Google Search Console
- [ ] Enviar sitemap.xml para Google
- [ ] Criar perfil Google Meu Negócio
- [ ] Adicionar endereço comercial válido
- [ ] Adicionar fotos no Google Meu Negócio

### Primeira Semana
- [ ] Criar conta Bing Webmaster Tools
- [ ] Enviar sitemap para Bing
- [ ] Verificar dados estruturados (Schema.org)
- [ ] Adicionar 3-5 fotos de trabalhos
- [ ] Pedir primeira avaliação de cliente

### Primeiro Mês
- [ ] Publicar 2-4 posts no blog
- [ ] Otimizar todas as imagens do site
- [ ] Conseguir 5+ avaliações Google
- [ ] Monitorar posições no Google Search Console
- [ ] Ajustar palavras-chave baseado em dados

### Mensal (Contínuo)
- [ ] Publicar 1-2 posts por mês
- [ ] Pedir avaliações para novos clientes
- [ ] Responder comentários/avaliações
- [ ] Adicionar novos projetos na galeria
- [ ] Monitorar analytics e ajustar estratégia

---

## Palavras-chave para Monitorar

Use o Google Search Console para ver como você está ranqueando:

### Alta Prioridade (Empresas)
1. "alpinismo industrial balneário camboriú"
2. "trabalho em altura itapema"
3. "pontos de ancoragem santa catarina"
4. "limpeza de fachada balneário camboriú"
5. "pintura industrial itapema"

### Média Prioridade (Leigos)
1. "limpeza de prédio balneário camboriú"
2. "pintura de edifício itapema"
3. "manutenção fachada balneário camboriú"
4. "limpeza vidros altura itapema"
5. "empresa limpeza prédio bc"

### Baixa Prioridade (Mais Genéricas)
1. "serviços em altura santa catarina"
2. "manutenção predial litoral sc"
3. "limpeza industrial balneário"

---

## URLs Importantes

Salve esses links:

- **Google Search Console:** https://search.google.com/search-console
- **Google Meu Negócio:** https://business.google.com
- **Bing Webmaster:** https://www.bing.com/webmasters
- **Teste Rich Results:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Validador Schema.org:** https://validator.schema.org/

---

## Dicas Extras

### Para Aparecer Rapidamente
1. **Link Building Local:**
   - Peça para fornecedores linkarem seu site
   - Registre em diretórios locais (Guia de empresas SC, etc.)
   - Parcerias com construtoras da região

2. **Redes Sociais:**
   - Facebook/Instagram: Poste trabalhos e marque localização
   - LinkedIn: Conecte com empresas da região
   - YouTube: Vídeos de trabalhos (otimize títulos com localização)

3. **Citações NAP (Name, Address, Phone):**
   - Mantenha nome, endereço e telefone IGUAIS em todos os lugares
   - Google Meu Negócio, site, Facebook, Instagram, etc.

### O que NÃO fazer
- ❌ Comprar backlinks
- ❌ Copiar conteúdo de outros sites
- ❌ Encher de palavras-chave (keyword stuffing)
- ❌ Esconder texto (texto branco em fundo branco)
- ❌ Criar várias páginas Google Meu Negócio

---

## Resultados Esperados

### Curto Prazo (1-3 meses)
- Site indexado no Google
- Aparecendo para buscas com nome da empresa
- 10-20 visitas orgânicas por semana

### Médio Prazo (3-6 meses)
- Top 10 para "alpinismo industrial balneário camboriú"
- Top 20 para termos mais competitivos
- 50-100 visitas orgânicas por semana
- Algumas conversões (orçamentos)

### Longo Prazo (6-12 meses)
- Top 3 para termos locais principais
- Aparecer no "Map Pack" do Google (3 primeiros no mapa)
- 100-200+ visitas orgânicas por semana
- 5-10 orçamentos por mês via site

---

## Precisa de Ajuda?

Para dúvidas sobre SEO:
- Guia Google: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Curso gratuito Google: https://learndigital.withgoogle.com/ateliedigital

---

**Última atualização:** 14/01/2025
