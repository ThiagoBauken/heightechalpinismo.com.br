# 🗺️ SISTEMA DE GEOLOCALIZAÇÃO + DETECÇÃO DE DISPOSITIVOS

## ✅ O QUE FOI IMPLEMENTADO

### 1. **Banco de Dados** (`shared/schema.ts`)
Criada tabela `geo_visits` com:
- ✅ IP anonimizado (hash SHA-256) - **LGPD Compliant**
- ✅ País, Estado (BR), Cidade
- ✅ Latitude/Longitude
- ✅ Provedor de internet (ISP)
- ✅ **Tipo de dispositivo** (Mobile/Desktop/Tablet)
- ✅ **Sistema operacional** (Android, iOS, Windows, Mac, etc)
- ✅ **Navegador** (Chrome, Firefox, Safari, etc)
- ✅ Timezone
- ✅ URL da página visitada
- ✅ Session ID

### 2. **Serviço de Geolocalização** (`server/services/geo-service.ts`)

#### Funções Implementadas:

**Geolocalização:**
- `getGeoLocation(ip)` - Consulta API gratuita (ip-api.com)
- `getClientIP(req)` - Extrai IP real (considera proxies)
- `anonymizeIP(ip)` - Hash SHA-256 do IP (LGPD)

**Detecção de Dispositivos:**
- `getDeviceInfo(userAgent)` - Retorna tudo de uma vez
- `detectDeviceType(ua)` - Mobile, Desktop ou Tablet
- `detectOS(ua)` - Sistema operacional
- `detectBrowser(ua)` - Navegador

**Utilidades:**
- `normalizeStateName()` - SP → São Paulo
- `BRAZILIAN_STATES` - Mapa completo de estados BR

## 📊 DADOS QUE SERÃO CAPTURADOS

### Por Cada Visita:
```typescript
{
  // Localização
  country: "Brasil",
  region: "SP",
  regionName: "São Paulo",
  city: "São Paulo",

  // Dispositivo
  deviceType: "mobile",  // ou "desktop", "tablet"
  os: "Android",         // ou "iOS", "Windows", "macOS"
  browser: "Chrome",     // ou "Firefox", "Safari", etc

  // Provedor
  isp: "Vivo",

  // Privacidade
  ipHash: "abc123...",  // IP hashado, não o IP real!
}
```

## 🚀 PRÓXIMOS PASSOS

### Passo 1: Rodar Migrations

```bash
npm run db:push
```

Isso criará a tabela `geo_visits` no banco de dados.

### Passo 2: Implementar APIs (Ainda Não Feito)

Precisa criar em `server/routes.ts`:

```typescript
// Capturar visita (chamado automaticamente no frontend)
app.post("/api/geo/track", async (req, res) => {
  const ip = getClientIP(req);
  const geo = await getGeoLocation(ip);
  const device = getDeviceInfo(req.headers["user-agent"]);

  // Salvar no banco...
});

// Estatísticas para o dashboard
app.get("/api/geo/stats", async (req, res) => {
  // Top estados
  // Top cidades
  // Distribuição mobile vs desktop
});
```

### Passo 3: Frontend - Rastreamento Automático

Adicionar no `client/src/lib/analytics-tracker.ts`:

```typescript
// Rastrear visita automaticamente
export function trackPageView(url: string) {
  fetch('/api/geo/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pageUrl: url })
  });
}
```

### Passo 4: Dashboard - Componentes Visuais

Criar em `client/src/components/dashboard/`:
- `<StatesChart />` - Gráfico de barras dos top 10 estados
- `<CitiesTable />` - Tabela com top 20 cidades
- `<DeviceBreakdown />` - Pizza: Mobile vs Desktop vs Tablet
- `<OSBreakdown />` - Gráfico: Android, iOS, Windows, etc
- `<BrowserStats />` - Navegadores mais usados

## 📈 VISUALIZAÇÕES NO DASHBOARD

### Exemplo de Layout:

```
╔═══════════════════════════════════════════════════╗
║         GEOLOCALIZAÇÃO E DISPOSITIVOS             ║
╠═══════════════════════════════════════════════════╣
║                                                   ║
║  📍 TOP 10 ESTADOS          📱 DISPOSITIVOS       ║
║  ┌─────────────────────┐   ┌──────────────────┐  ║
║  │ SP  ████████  234   │   │ Mobile    68%    │  ║
║  │ RJ  ██████    156   │   │ Desktop   28%    │  ║
║  │ MG  ████      89    │   │ Tablet     4%    │  ║
║  │ PR  ███       67    │   └──────────────────┘  ║
║  │ SC  ██        45    │                         ║
║  └─────────────────────┘                         ║
║                                                   ║
║  🏙️ TOP 10 CIDADES         💻 SISTEMAS           ║
║  ┌─────────────────────┐   ┌──────────────────┐  ║
║  │ São Paulo    123    │   │ Android   45%    │  ║
║  │ Rio de Janeiro 98   │   │ Windows   30%    │  ║
║  │ Belo Horizonte 56   │   │ iOS       15%    │  ║
║  │ Curitiba       43   │   │ macOS      8%    │  ║
║  │ Porto Alegre   32   │   │ Linux      2%    │  ║
║  └─────────────────────┘   └──────────────────┘  ║
║                                                   ║
║  🌐 NAVEGADORES                                   ║
║  Chrome 65% ████████████████                     ║
║  Firefox 18% ████                                ║
║  Safari 12% ███                                  ║
║  Edge 5% █                                       ║
╚═══════════════════════════════════════════════════╝
```

## 🔐 PRIVACIDADE E LGPD

### ✅ Conforme LGPD:
- IPs são **hashados** (SHA-256) antes de salvar
- Não armazenamos IPs reais
- Dados são agregados e anônimos
- Apenas estatísticas, sem identificação pessoal

### ⚠️ Adicionar na Política de Privacidade:
```
"Coletamos dados anônimos de geolocalização (país, estado, cidade)
e tipo de dispositivo para fins estatísticos e melhoria do serviço.
Nenhum dado pessoal ou IP real é armazenado."
```

## 🎯 API GRATUITA - ip-api.com

### Limites:
- ✅ **Gratuito** até 45 requests/minuto
- ✅ Sem necessidade de API key
- ✅ Dados precisos de geolocalização

### Se ultrapassar limite:
Upgrade para plano pago ($13/mês) ou usar alternativa:
- ipgeolocation.io (30k/mês grátis)
- ipinfo.io (50k/mês grátis)

## 💡 DETECTA AUTOMATICAMENTE

### Dispositivos:
- ✅ iPhone/iPad → "iOS" + "mobile"/"tablet"
- ✅ Android → "Android" + "mobile"/"tablet"
- ✅ Windows → "Windows 10" + "desktop"
- ✅ Mac → "macOS" + "desktop"

### Navegadores:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📝 EXEMPLO DE USO

```typescript
// No servidor (routes.ts)
import { getClientIP, getGeoLocation, getDeviceInfo, anonymizeIP } from './services/geo-service';

app.use(async (req, res, next) => {
  const ip = getClientIP(req);
  const geo = await getGeoLocation(ip);
  const device = getDeviceInfo(req.headers["user-agent"]);

  console.log({
    ipHash: anonymizeIP(ip),
    location: `${geo.city}, ${geo.regionName} - ${geo.country}`,
    device: `${device.deviceType} - ${device.os} - ${device.browser}`
  });

  next();
});
```

## ✅ STATUS ATUAL

- [x] Schema do banco criado
- [x] Serviço de geolocalização implementado
- [x] Detecção de dispositivos implementada
- [x] Funções de privacidade (hash de IP)
- [ ] APIs de captura e estatísticas
- [ ] Componentes visuais do dashboard
- [ ] Integração automática no frontend
- [ ] Migrations rodadas

## 🚀 PARA FINALIZAR

1. **Rodar migrations:**
   ```bash
   npm run db:push
   ```

2. **Implementar APIs** (routes.ts)

3. **Criar componentes visuais** (dashboard)

4. **Testar sistema completo**

---

**Data:** 19/11/2025
**Status:** Parcialmente Implementado (Backend pronto, falta Frontend)
**Próximo:** Rodar migrations + Implementar APIs
