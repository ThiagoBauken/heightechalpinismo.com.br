/**
 * BreadcrumbList Schema.org for AI Discoverability
 * Navigation breadcrumbs for better site structure understanding
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  siteUrl: string = 'https://heightechalpinismo.com.br'
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
    }))
  };
}

// Helper to generate breadcrumb from current path
export function getBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Início", url: "/" }
  ];

  // Remove trailing slash and split
  const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean);

  let currentPath = '';
  for (const part of parts) {
    currentPath += `/${part}`;

    // Convert path to readable name
    let name = part
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Special cases
    const specialCases: Record<string, string> = {
      'servicos': 'Serviços',
      'projetos': 'Projetos',
      'blog': 'Blog',
      'contato': 'Contato',
      'dashboard': 'Dashboard',
      'lavacao-predial': 'Limpeza de Fachadas',
      'pontos-ancoragem': 'Pontos de Ancoragem',
      'restauracao-fachadas': 'Pintura Predial',
      'limpeza-vidros': 'Limpeza de Vidros',
      'instalacao-acms': 'Instalação de ACM',
      'vedacao-fachadas': 'Vedação de Fachadas'
    };

    if (specialCases[part]) {
      name = specialCases[part];
    }

    breadcrumbs.push({
      name,
      url: currentPath
    });
  }

  return breadcrumbs;
}

// Helper para injetar breadcrumb schema
export function injectBreadcrumbSchema(items?: BreadcrumbItem[]) {
  if (typeof window === 'undefined') return;

  const breadcrumbs = items || getBreadcrumbsFromPath(window.location.pathname);

  const existingSchema = document.getElementById('breadcrumb-schema');
  if (existingSchema) {
    existingSchema.remove();
  }

  const script = document.createElement('script');
  script.id = 'breadcrumb-schema';
  script.type = 'application/ld+json';
  script.text = JSON.stringify(generateBreadcrumbSchema(breadcrumbs));
  document.head.appendChild(script);
}
