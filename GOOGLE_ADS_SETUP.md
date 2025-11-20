# 🎯 Guia Completo - Google Ads & AdSense

Este guia mostra como configurar e usar o Google Ads e Google AdSense no seu site Industrial Climbers.

---

## 📋 Índice

1. [Google Ads - Conversões](#google-ads---conversões)
2. [Google Ads - Remarketing](#google-ads---remarketing)
3. [Google AdSense - Monetização](#google-adsense---monetização)
4. [Como Usar no Código](#como-usar-no-código)
5. [Testes e Verificação](#testes-e-verificação)

---

## 🎯 Google Ads - Conversões

### 1. Criar Conta Google Ads

1. Acesse https://ads.google.com/
2. Crie uma conta ou faça login
3. Configure sua primeira campanha (pode pausar depois)
4. Anote seu **Conversion ID** (formato: `AW-XXXXXXXXXX`)

### 2. Criar Ações de Conversão

#### a) Acesse Conversões
- Menu: **Ferramentas e Configurações** > **Medição** > **Conversões**
- Clique em **Nova ação de conversão**

#### b) Configure as Conversões

##### Conversão 1: Formulário de Contato
```
Categoria: Enviar formulário de lead
Nome: Contato - Formulário
Valor: R$ 50 (estimativa de valor de um lead)
Contagem: Todas as conversões
Janela de conversão: 30 dias
```
**Anote o Conversion Label**: Algo como `AbCdEfGhIj`

##### Conversão 2: Solicitação de Orçamento
```
Categoria: Enviar formulário de lead
Nome: Orçamento - Solicitação
Valor: R$ 150 (valor estimado mais alto)
Contagem: Todas as conversões
Janela de conversão: 30 dias
```
**Anote o Conversion Label**: Algo como `KlMnOpQrSt`

##### Conversão 3: Clique no WhatsApp
```
Categoria: Contato
Nome: WhatsApp - Clique
Valor: R$ 30
Contagem: Todas as conversões
Janela de conversão: 7 dias
```
**Anote o Conversion Label**: Algo como `UvWxYzAbCd`

##### Conversão 4: Clique no Telefone
```
Categoria: Contato
Nome: Telefone - Clique
Valor: R$ 30
Contagem: Todas as conversões
Janela de conversão: 7 dias
```
**Anote o Conversion Label**: Algo como `EfGhIjKlMn`

##### Conversão 5: Visualização de Serviço (opcional)
```
Categoria: Visualização de página
Nome: Serviço - Visualização
Valor: Não atribuir valor
Contagem: Todas as conversões
Janela de conversão: 1 dia
```
**Anote o Conversion Label**: Algo como `OpQrStUvWx`

### 3. Configurar no .env

```bash
# IDs do Google Ads
VITE_GOOGLE_ADS_ID=AW-123456789

# Labels de cada conversão (obtidos acima)
VITE_ADS_CONVERSION_CONTACT=AbCdEfGhIj
VITE_ADS_CONVERSION_QUOTE=KlMnOpQrSt
VITE_ADS_CONVERSION_WHATSAPP=UvWxYzAbCd
VITE_ADS_CONVERSION_PHONE=EfGhIjKlMn
VITE_ADS_CONVERSION_SERVICE=OpQrStUvWx
```

---

## 🔄 Google Ads - Remarketing

O remarketing já está configurado automaticamente! Ele rastreia:

- ✅ Páginas visitadas
- ✅ Serviços visualizados
- ✅ Formulários abandonados
- ✅ Tempo no site

### Como Criar Público de Remarketing

1. **Google Ads** > **Ferramentas** > **Gerenciador de público**
2. **+ Novo público** > **Visitantes do seu website**
3. Configure os públicos:

#### Público 1: Visitantes de Serviços
```
Nome: Interessados em Serviços
Regra: URL contém "/servicos/"
Duração: 30 dias
```

#### Público 2: Abandonaram Formulário
```
Nome: Abandonaram Contato
Regra 1: URL contém "/contato"
Regra 2: NÃO converteu em "Contato - Formulário"
Duração: 7 dias
```

#### Público 3: Solicitaram Orçamento
```
Nome: Solicitaram Orçamento
Regra: Converteu em "Orçamento - Solicitação"
Duração: 90 dias
```

---

## 💰 Google AdSense - Monetização

### 1. Criar Conta AdSense

1. Acesse https://www.google.com/adsense/
2. Inscreva-se com sua conta Google
3. Adicione o domínio do seu site
4. Aguarde aprovação (pode levar alguns dias)

### 2. Obter Código do Publisher

Após aprovação:
- Acesse **Anúncios** > **Visão Geral**
- Copie seu **Publisher ID** (formato: `ca-pub-XXXXXXXXXXXXXXXX`)

### 3. Configurar no .env

```bash
VITE_ADSENSE_CLIENT=ca-pub-1234567890123456
```

### 4. Criar Unidades de Anúncio

#### a) No Google AdSense

1. **Anúncios** > **Por unidade de anúncio**
2. **+ Nova unidade de anúncio**
3. Escolha o tipo:

**Anúncios Display (Recomendado)**
```
Nome: Banner Principal Home
Tipo: Display responsivo
Tamanho: Responsivo
```

**Anúncios In-Article (Para Blog)**
```
Nome: Anúncio no Artigo
Tipo: In-article
```

**Anúncios In-Feed (Para Listagens)**
```
Nome: Anúncio na Listagem
Tipo: In-feed
```

4. Copie o **data-ad-slot** de cada anúncio criado

---

## 💻 Como Usar no Código

### 1. Tracking de Conversões (Automático)

As conversões já são rastreadas automaticamente quando:

#### Formulário de Contato
```typescript
// O tracking acontece automaticamente em pages/contact.tsx
import { trackContactFormConversion } from '@/lib/google-ads';

// Ao enviar formulário de contato:
trackContactFormConversion({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  service: formData.service,
});
```

#### Solicitação de Orçamento
```typescript
import { trackQuoteConversion } from '@/lib/google-ads';

// Ao enviar orçamento:
trackQuoteConversion({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  service: formData.service,
  estimatedValue: 150, // opcional
});
```

#### Clique no WhatsApp
```typescript
import { trackWhatsAppConversion } from '@/lib/google-ads';

// No componente WhatsAppButton:
<a
  href={whatsappUrl}
  onClick={() => trackWhatsAppConversion()}
>
  Falar no WhatsApp
</a>
```

#### Clique no Telefone
```typescript
import { trackPhoneConversion } from '@/lib/google-ads';

<a
  href="tel:+5547999999999"
  onClick={() => trackPhoneConversion()}
>
  Ligar Agora
</a>
```

### 2. Google AdSense - Inserir Anúncios

#### Exemplo 1: Banner no Home
```tsx
import { AdSenseDisplay } from '@/components/shared/google-adsense';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo</h1>

      {/* Banner AdSense */}
      <AdSenseDisplay slot="1234567890" />

      <p>Conteúdo...</p>
    </div>
  );
}
```

#### Exemplo 2: Anúncio no Blog Post
```tsx
import { AdSenseInArticle } from '@/components/shared/google-adsense';

export default function BlogPost() {
  return (
    <article>
      <h1>Título do Post</h1>
      <p>Primeiro parágrafo...</p>

      {/* Anúncio no meio do artigo */}
      <AdSenseInArticle slot="9876543210" />

      <p>Continuação do texto...</p>
    </article>
  );
}
```

#### Exemplo 3: Anúncios na Lista de Serviços
```tsx
import { AdSenseInFeed } from '@/components/shared/google-adsense';

export default function Services() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {services.map((service, index) => (
        <>
          <ServiceCard key={service.id} {...service} />

          {/* A cada 3 serviços, mostrar um anúncio */}
          {(index + 1) % 3 === 0 && (
            <AdSenseInFeed slot="5555555555" />
          )}
        </>
      ))}
    </div>
  );
}
```

---

## ✅ Testes e Verificação

### 1. Verificar se Google Ads está carregando

Abra o **Console do Navegador** (F12):

```javascript
// Deve retornar true
typeof window.gtag === 'function'

// Deve retornar true
typeof window.dataLayer !== 'undefined'
```

### 2. Testar Conversões

#### a) Modo de Teste (Desenvolvimento)

```bash
# No .env.local (não committar)
VITE_GOOGLE_ADS_ID=AW-123456789
VITE_ADS_CONVERSION_CONTACT=test_label
```

#### b) Verificar no Google Ads

1. **Google Ads** > **Ferramentas** > **Conversões**
2. Veja a coluna **"Status"**
3. Deve aparecer **"Não verificado"** inicialmente
4. Após enviar um formulário real, deve mudar para **"Registrando conversões"**

### 3. Tag Assistant (Recomendado)

1. Instale a extensão **Tag Assistant** do Google Chrome
2. Acesse seu site
3. Clique no ícone do Tag Assistant
4. Verifique se aparecem as tags:
   - ✅ Google Analytics
   - ✅ Google Ads Conversion Tracking
   - ✅ Google Ads Remarketing

### 4. Verificar AdSense

1. **Google AdSense** > **Anúncios**
2. Veja o status: **"Seus anúncios estão sendo exibidos"**
3. Aguarde algumas horas para começar a ver impressões

---

## 📊 Relatórios e Métricas

### Google Ads - Conversões

Acesse: **Campanhas** > **Conversões**

Métricas importantes:
- **Taxa de conversão**: % de cliques que viraram conversões
- **Custo por conversão**: Quanto você paga por cada lead
- **Valor da conversão**: Total de valor gerado

### Google Ads - Remarketing

Acesse: **Campanhas** > **Públicos-alvo**

Métricas:
- **Tamanho do público**: Quantas pessoas no público
- **Taxa de crescimento**: Novos visitantes por dia
- **Sobreposição**: Usuários em múltiplos públicos

### Google AdSense - Receita

Acesse: **Relatórios** > **Visão geral**

Métricas:
- **RPM** (Receita por mil impressões)
- **CTR** (Taxa de cliques nos anúncios)
- **CPC** (Custo por clique)

---

## 🚨 Problemas Comuns

### Conversões não aparecem

**Causa**: Labels errados ou IDs incorretos
**Solução**:
1. Verifique se `VITE_GOOGLE_ADS_ID` está correto
2. Verifique se os Conversion Labels estão corretos
3. Certifique-se de que não tem espaços extras

### AdSense não mostra anúncios

**Causa 1**: Site ainda não aprovado
**Solução**: Aguarde aprovação do AdSense (pode levar 2-3 semanas)

**Causa 2**: Bloqueador de anúncios ativo
**Solução**: Desative AdBlock para testar

**Causa 3**: Tráfego insuficiente
**Solução**: AdSense precisa de tráfego mínimo para servir anúncios

### Tag Assistant mostra erro

**Erro**: "Duplicate gtag configuration"
**Solução**: Você está carregando o gtag.js duas vezes. Certifique-se de que o script está sendo carregado apenas uma vez.

---

## 📈 Melhores Práticas

### Google Ads

1. **Otimize os valores de conversão**:
   - Ajuste valores baseado no ROI real
   - Leads qualificados > Leads quantidade

2. **Use Enhanced Conversions**:
   - Já configurado automaticamente
   - Melhora a precisão do tracking

3. **Configure Públicos de Remarketing**:
   - Liste para busca: pessoas que visitaram serviços específicos
   - Liste para display: abandono de formulário

### Google AdSense

1. **Posicionamento estratégico**:
   - Acima da dobra (visible without scroll)
   - Entre conteúdo relevante
   - Não exagere (máximo 3 anúncios por página)

2. **Teste formatos diferentes**:
   - Display responsivo: melhor para desktop
   - In-article: melhor para blog
   - In-feed: melhor para listagens

3. **Monitore performance**:
   - RPM baixo? Teste outros tamanhos
   - CTR baixo? Mude posicionamento
   - Bloqueie categorias inadequadas

---

## 🎓 Recursos Adicionais

### Documentação Oficial

- [Google Ads - Conversão](https://support.google.com/google-ads/answer/6095821)
- [Google Ads - Remarketing](https://support.google.com/google-ads/answer/2453998)
- [Google AdSense - Começar](https://support.google.com/adsense/answer/10162)

### Certificações Gratuitas

- [Google Ads Certification](https://skillshop.withgoogle.com/)
- [Google Analytics Certification](https://skillshop.withgoogle.com/)

---

## 💡 Dicas de Otimização

### Para Melhorar ROI do Google Ads

1. **Palavras-chave negativas**: Exclua termos irrelevantes
2. **Público-alvo similar**: Alcance pessoas parecidas com seus clientes
3. **Lances automáticos**: Use "Maximizar conversões"
4. **Extensões de anúncio**: Adicione telefone, localização, links

### Para Aumentar Receita AdSense

1. **Conteúdo de qualidade**: Mais tráfego = mais impressões
2. **SEO**: Tráfego orgânico converte melhor
3. **Mobile-first**: Maioria do tráfego é mobile
4. **Velocidade**: Sites rápidos = melhor experiência

---

## ✅ Checklist Final

Antes de ir ao ar:

- [ ] Google Ads ID configurado
- [ ] Todas as 5 conversões criadas e labels configurados
- [ ] Públicos de remarketing criados
- [ ] AdSense aprovado e Publisher ID configurado
- [ ] Unidades de anúncio criadas
- [ ] Tags testadas com Tag Assistant
- [ ] Primeira conversão de teste realizada
- [ ] Anúncios aparecendo corretamente
- [ ] Política de Privacidade atualizada (mencionando cookies de ads)

---

**Status**: ✅ Configuração Completa
**Suporte**: Consulte a documentação oficial do Google para dúvidas específicas

---

*Última atualização: 19/01/2025*
