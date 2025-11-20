import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/google-analytics';

/**
 * Hook para rastrear mudanças de página automaticamente com Google Analytics
 */
export function useGA() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);
}

export default useGA;
