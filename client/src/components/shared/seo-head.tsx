import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "https://heightechalpinismo.com.br/og-image.png",
  structuredData
}: SEOProps) {
  const fullTitle = `${title} | Heightech Alpinismo - Balneário Camboriú e Itapema`;
  const baseUrl = "https://heightechalpinismo.com.br";
  const canonicalUrl = canonical || window.location.href;

  // Palavras-chave base para todas as páginas (SEO Local)
  const baseKeywords = [
    "alpinismo industrial",
    "trabalho em altura",
    "Balneário Camboriú",
    "Itapema",
    "Santa Catarina",
    "acesso por corda",
    "NR-35",
    "altura",
    "fachada",
    "prédio",
    "edifício",
    "limpeza de prédio",
    "manutenção de prédio",
    "serviços em altura"
  ];

  const allKeywords = [...baseKeywords, ...keywords].join(", ");

  useEffect(() => {
    // Atualizar título
    document.title = fullTitle;

    // Meta description
    updateOrCreateMeta("name", "description", description);

    // Keywords
    updateOrCreateMeta("name", "keywords", allKeywords);

    // Open Graph
    updateOrCreateMeta("property", "og:title", fullTitle);
    updateOrCreateMeta("property", "og:description", description);
    updateOrCreateMeta("property", "og:image", ogImage);
    updateOrCreateMeta("property", "og:url", canonicalUrl);
    updateOrCreateMeta("property", "og:type", "website");
    updateOrCreateMeta("property", "og:locale", "pt_BR");
    updateOrCreateMeta("property", "og:site_name", "Heightech Alpinismo");

    // Twitter Card
    updateOrCreateMeta("name", "twitter:card", "summary_large_image");
    updateOrCreateMeta("name", "twitter:title", fullTitle);
    updateOrCreateMeta("name", "twitter:description", description);
    updateOrCreateMeta("name", "twitter:image", ogImage);

    // Geo Tags (SEO Local)
    updateOrCreateMeta("name", "geo.region", "BR-SC");
    updateOrCreateMeta("name", "geo.placename", "Balneário Camboriú");
    updateOrCreateMeta("name", "geo.position", "-26.9964;-48.6357"); // Balneário Camboriú

    // Canonical URL
    updateOrCreateLink("canonical", canonicalUrl);

    // Structured Data (Schema.org)
    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [fullTitle, description, allKeywords, canonicalUrl, ogImage, structuredData]);

  return null;
}

function updateOrCreateMeta(attribute: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function updateOrCreateLink(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.href = href;
}

function updateStructuredData(data: object) {
  const scriptId = "structured-data";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}
