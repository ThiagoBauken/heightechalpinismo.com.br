import { useEffect } from 'react';

interface GoogleAdSenseProps {
  /**
   * AdSense client ID (ca-pub-XXXXXXXXXXXXXXXX)
   */
  client?: string;

  /**
   * Ad slot ID
   */
  slot: string;

  /**
   * Ad format (auto, fluid, etc)
   */
  format?: string;

  /**
   * Ad layout (for in-article, in-feed ads)
   */
  layout?: string;

  /**
   * Layout key (for specific ad types)
   */
  layoutKey?: string;

  /**
   * Responsive ad
   */
  responsive?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * Custom style
   */
  style?: React.CSSProperties;
}

/**
 * Componente Google AdSense
 *
 * Uso:
 * <GoogleAdSense
 *   slot="1234567890"
 *   format="auto"
 *   responsive={true}
 * />
 */
export function GoogleAdSense({
  client = import.meta.env.VITE_ADSENSE_CLIENT,
  slot,
  format = 'auto',
  layout,
  layoutKey,
  responsive = true,
  className = '',
  style = { display: 'block' },
}: GoogleAdSenseProps) {
  useEffect(() => {
    // Carregar script do AdSense se ainda não foi carregado
    if (!document.querySelector('script[src*="adsbygoogle"]')) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute('data-ad-client', client || '');
      document.head.appendChild(script);
    }

    // Inicializar ad
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [client]);

  if (!client) {
    console.warn('AdSense client ID not configured');
    return null;
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  );
}

/**
 * AdSense In-Article Ad
 */
export function AdSenseInArticle({ slot }: { slot: string }) {
  return (
    <GoogleAdSense
      slot={slot}
      format="fluid"
      layout="in-article"
      style={{ display: 'block', textAlign: 'center' }}
    />
  );
}

/**
 * AdSense In-Feed Ad
 */
export function AdSenseInFeed({ slot, layoutKey }: { slot: string; layoutKey?: string }) {
  return (
    <GoogleAdSense
      slot={slot}
      format="fluid"
      layout="in-feed"
      layoutKey={layoutKey}
      style={{ display: 'block' }}
    />
  );
}

/**
 * AdSense Display Ad (banner)
 */
export function AdSenseDisplay({
  slot,
  className = '',
  style = { display: 'block', minHeight: '250px' }
}: {
  slot: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <GoogleAdSense
      slot={slot}
      format="auto"
      responsive={true}
      className={className}
      style={style}
    />
  );
}

export default GoogleAdSense;
