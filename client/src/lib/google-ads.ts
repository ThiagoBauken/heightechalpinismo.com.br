// Google Ads Integration (Conversions & Remarketing)

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;
const AW_CONVERSION_ID = import.meta.env.VITE_AW_CONVERSION_ID;

// Initialize Google Ads
export function initGoogleAds() {
  if (!GOOGLE_ADS_ID && !GA_TRACKING_ID) {
    console.warn('Google Ads not configured - VITE_GOOGLE_ADS_ID or VITE_GA_TRACKING_ID missing');
    return;
  }

  // Google Ads usa o mesmo gtag.js que Google Analytics
  // Então se GA já está inicializado, só precisamos configurar o Ads ID
  if (GOOGLE_ADS_ID && window.gtag) {
    window.gtag('config', GOOGLE_ADS_ID);
    console.log('✅ Google Ads configured:', GOOGLE_ADS_ID);
  }

  // Configurar Enhanced Conversions (opcional)
  if (window.gtag && GOOGLE_ADS_ID) {
    window.gtag('config', GOOGLE_ADS_ID, {
      'allow_enhanced_conversions': true,
    });
  }
}

// Conversion Labels (configurar no Google Ads)
export const CONVERSION_LABELS = {
  CONTACT_FORM: import.meta.env.VITE_ADS_CONVERSION_CONTACT || '',
  QUOTE_REQUEST: import.meta.env.VITE_ADS_CONVERSION_QUOTE || '',
  WHATSAPP_CLICK: import.meta.env.VITE_ADS_CONVERSION_WHATSAPP || '',
  PHONE_CLICK: import.meta.env.VITE_ADS_CONVERSION_PHONE || '',
  SERVICE_PAGE_VIEW: import.meta.env.VITE_ADS_CONVERSION_SERVICE || '',
};

// Track Google Ads Conversion
export function trackConversion(
  conversionLabel: string,
  value?: number,
  currency: string = 'BRL',
  transactionId?: string
) {
  if (!window.gtag || !GOOGLE_ADS_ID || !conversionLabel) return;

  const conversionData: any = {
    'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`,
  };

  if (value !== undefined) {
    conversionData.value = value;
    conversionData.currency = currency;
  }

  if (transactionId) {
    conversionData.transaction_id = transactionId;
  }

  window.gtag('event', 'conversion', conversionData);

  console.log('📊 Google Ads Conversion tracked:', {
    label: conversionLabel,
    value,
    currency,
  });
}

// Track Contact Form Submission
export function trackContactFormConversion(data?: {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}) {
  if (!CONVERSION_LABELS.CONTACT_FORM) return;

  // Conversão básica
  trackConversion(CONVERSION_LABELS.CONTACT_FORM, 50); // Valor estimado de um lead

  // Enhanced Conversion (dados do cliente para melhor tracking)
  if (window.gtag && data) {
    window.gtag('set', 'user_data', {
      email: data.email,
      phone_number: data.phone,
    });
  }

  // Event adicional para Analytics
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'BRL',
      value: 50,
      service: data?.service,
    });
  }
}

// Track Quote Request Conversion
export function trackQuoteConversion(data?: {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  estimatedValue?: number;
}) {
  if (!CONVERSION_LABELS.QUOTE_REQUEST) return;

  const value = data?.estimatedValue || 150; // Valor estimado mais alto para orçamento

  trackConversion(CONVERSION_LABELS.QUOTE_REQUEST, value);

  // Enhanced Conversion
  if (window.gtag && data) {
    window.gtag('set', 'user_data', {
      email: data.email,
      phone_number: data.phone,
    });
  }

  // Event adicional
  if (window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'BRL',
      value: value,
      items: [{
        item_id: data?.service || 'quote_request',
        item_name: data?.service || 'Solicitação de Orçamento',
      }],
    });
  }
}

// Track WhatsApp Click Conversion
export function trackWhatsAppConversion(location?: string) {
  if (!CONVERSION_LABELS.WHATSAPP_CLICK) return;

  trackConversion(CONVERSION_LABELS.WHATSAPP_CLICK, 30);

  // Event adicional
  if (window.gtag) {
    window.gtag('event', 'contact', {
      method: 'whatsapp',
      location: location || window.location.pathname,
    });
  }
}

// Track Phone Click Conversion
export function trackPhoneConversion() {
  if (!CONVERSION_LABELS.PHONE_CLICK) return;

  trackConversion(CONVERSION_LABELS.PHONE_CLICK, 30);

  // Event adicional
  if (window.gtag) {
    window.gtag('event', 'contact', {
      method: 'phone',
    });
  }
}

// Track Service Page View (importante para remarketing)
export function trackServicePageView(serviceName: string) {
  if (!window.gtag) return;

  // Event padrão do Google Analytics
  window.gtag('event', 'view_item', {
    currency: 'BRL',
    value: 100,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '-'),
      item_name: serviceName,
      item_category: 'Serviços',
    }],
  });

  // Conversão específica se configurada
  if (CONVERSION_LABELS.SERVICE_PAGE_VIEW) {
    trackConversion(CONVERSION_LABELS.SERVICE_PAGE_VIEW);
  }
}

// Track Dynamic Remarketing Event
export function trackRemarketingEvent(
  eventName: string,
  params?: {
    value?: number;
    items?: Array<{
      id: string;
      name: string;
      category?: string;
    }>;
  }
) {
  if (!window.gtag || !GOOGLE_ADS_ID) return;

  const remarketingData: any = {
    send_to: GOOGLE_ADS_ID,
  };

  if (params?.value) {
    remarketingData.value = params.value;
    remarketingData.currency = 'BRL';
  }

  if (params?.items) {
    remarketingData.items = params.items.map(item => ({
      id: item.id,
      name: item.name,
      category: item.category || 'Serviços',
    }));
  }

  window.gtag('event', eventName, remarketingData);
}

// Helper: Track page for remarketing
export function trackPageForRemarketing(pageType: string, pageValue?: number) {
  trackRemarketingEvent('page_view', {
    value: pageValue,
    items: [{
      id: pageType,
      name: document.title,
      category: pageType,
    }],
  });
}

// Export all functions
export default {
  init: initGoogleAds,
  trackConversion,
  trackContactFormConversion,
  trackQuoteConversion,
  trackWhatsAppConversion,
  trackPhoneConversion,
  trackServicePageView,
  trackRemarketingEvent,
  trackPageForRemarketing,
};
