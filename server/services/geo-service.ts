import crypto from "crypto";

/**
 * Serviço de Geolocalização + Detecção de Dispositivos
 * Usa ip-api.com (gratuito, 45 requests/min)
 * LGPD Compliant: IPs são hashados antes de salvar
 */

export interface GeoLocation {
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
}

export interface DeviceInfo {
  deviceType: "mobile" | "desktop" | "tablet";
  os: string;
  browser: string;
}

/**
 * Anonimiza IP criando um hash SHA-256
 * Conforme LGPD - não armazenamos IPs reais
 */
export function anonymizeIP(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

/**
 * Extrai IP real do cliente considerando proxies
 */
export function getClientIP(req: any): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) {
    const ips = forwarded.split(",");
    return ips[0].trim();
  }

  return (
    req.headers["x-real-ip"] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

/**
 * Consulta geolocalização via ip-api.com
 * Gratuito: 45 requests/minuto
 * Retorna null se falhar
 */
export async function getGeoLocation(ip: string): Promise<GeoLocation | null> {
  // Não consultar IPs locais/inválidos
  if (ip === "unknown" || ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("::1")) {
    return {
      country: "Brasil",
      countryCode: "BR",
      region: "SP",
      regionName: "São Paulo",
      city: "São Paulo",
      lat: -23.5505,
      lon: -46.6333,
      timezone: "America/Sao_Paulo",
      isp: "Local Network",
    };
  }

  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp`);

    if (!response.ok) {
      console.error("Erro na API de geolocalização:", response.statusText);
      return null;
    }

    const data = await response.json();

    if (data.status === "fail") {
      console.error("Geolocalização falhou:", data.message);
      return null;
    }

    return {
      country: data.country || "Desconhecido",
      countryCode: data.countryCode || "XX",
      region: data.region || "",
      regionName: data.regionName || "",
      city: data.city || "Desconhecido",
      lat: data.lat || 0,
      lon: data.lon || 0,
      timezone: data.timezone || "",
      isp: data.isp || "Desconhecido",
    };
  } catch (error) {
    console.error("Erro ao consultar geolocalização:", error);
    return null;
  }
}

/**
 * Mapeia códigos de estado BR para nomes completos
 */
export const BRAZILIAN_STATES: Record<string, string> = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

/**
 * Normaliza nome de estado para código
 */
export function normalizeStateName(regionName: string): string {
  const normalized = regionName.trim();

  // Se já é um código de 2 letras
  if (normalized.length === 2) {
    return normalized.toUpperCase();
  }

  // Busca pelo nome completo
  for (const [code, name] of Object.entries(BRAZILIAN_STATES)) {
    if (name.toLowerCase() === normalized.toLowerCase()) {
      return code;
    }
  }

  return normalized;
}

/**
 * Detecta tipo de dispositivo pelo User-Agent
 */
export function detectDeviceType(userAgent: string): "mobile" | "desktop" | "tablet" {
  const ua = userAgent.toLowerCase();

  // Detectar tablet primeiro
  if (ua.includes("ipad") || (ua.includes("android") && !ua.includes("mobile"))) {
    return "tablet";
  }

  // Detectar mobile
  if (
    ua.includes("mobile") ||
    ua.includes("android") ||
    ua.includes("iphone") ||
    ua.includes("ipod") ||
    ua.includes("blackberry") ||
    ua.includes("windows phone")
  ) {
    return "mobile";
  }

  // Default: desktop
  return "desktop";
}

/**
 * Detecta sistema operacional pelo User-Agent
 */
export function detectOS(userAgent: string): string {
  const ua = userAgent.toLowerCase();

  if (ua.includes("android")) return "Android";
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return "iOS";
  if (ua.includes("windows nt 10")) return "Windows 10";
  if (ua.includes("windows nt 6.3")) return "Windows 8.1";
  if (ua.includes("windows nt 6.2")) return "Windows 8";
  if (ua.includes("windows nt 6.1")) return "Windows 7";
  if (ua.includes("windows")) return "Windows";
  if (ua.includes("mac os x")) return "macOS";
  if (ua.includes("linux")) return "Linux";
  if (ua.includes("ubuntu")) return "Ubuntu";

  return "Desconhecido";
}

/**
 * Detecta navegador pelo User-Agent
 */
export function detectBrowser(userAgent: string): string {
  const ua = userAgent.toLowerCase();

  if (ua.includes("edg/")) return "Edge";
  if (ua.includes("chrome/") && !ua.includes("edg")) return "Chrome";
  if (ua.includes("firefox/")) return "Firefox";
  if (ua.includes("safari/") && !ua.includes("chrome")) return "Safari";
  if (ua.includes("opera/") || ua.includes("opr/")) return "Opera";
  if (ua.includes("msie") || ua.includes("trident/")) return "Internet Explorer";

  return "Outro";
}

/**
 * Extrai todas as informações de dispositivo do User-Agent
 */
export function getDeviceInfo(userAgent: string): DeviceInfo {
  return {
    deviceType: detectDeviceType(userAgent),
    os: detectOS(userAgent),
    browser: detectBrowser(userAgent),
  };
}
