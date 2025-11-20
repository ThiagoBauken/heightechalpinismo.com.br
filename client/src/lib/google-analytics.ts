// Google Analytics 4 Integration

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;

// Initialize Google Analytics (and Google Ads if configured)
export function initGA() {
  if (!GA_TRACKING_ID && !GOOGLE_ADS_ID) {
    console.warn('Google Analytics/Ads not configured - VITE_GA_TRACKING_ID or VITE_GOOGLE_ADS_ID missing');
    return;
  }

  // Use GA_TRACKING_ID se disponível, senão use GOOGLE_ADS_ID
  const trackingId = GA_TRACKING_ID || GOOGLE_ADS_ID;

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer!.push(arguments);
  };

  window.gtag('js', new Date());

  // Configure Google Analytics
  if (GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      send_page_view: false, // We'll send page views manually
    });
    console.log('✅ Google Analytics initialized:', GA_TRACKING_ID);
  }

  // Configure Google Ads
  if (GOOGLE_ADS_ID) {
    window.gtag('config', GOOGLE_ADS_ID, {
      allow_enhanced_conversions: true,
    });
    console.log('✅ Google Ads initialized:', GOOGLE_ADS_ID);
  }
}

// Track page view
export function trackPageView(url: string, title?: string) {
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: title || document.title,
  });
}

// Track custom event
export function trackEvent(
  eventName: string,
  parameters?: Record<string, any>
) {
  if (!window.gtag) return;

  window.gtag('event', eventName, parameters);
}

// Track button click
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
}

// Track form submission
export function trackFormSubmit(formName: string, success: boolean = true) {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
}

// Track WhatsApp click
export function trackWhatsAppClick(location?: string) {
  trackEvent('whatsapp_click', {
    location: location || window.location.pathname,
  });
}

// Track service interest
export function trackServiceInterest(serviceName: string) {
  trackEvent('service_interest', {
    service_name: serviceName,
  });
}

// Track quote request
export function trackQuoteRequest(service: string) {
  trackEvent('quote_request', {
    service: service,
    value: 1,
  });
}

// Track contact
export function trackContact(service: string) {
  trackEvent('contact', {
    service: service,
    value: 1,
  });
}

export default {
  init: initGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmit,
  trackWhatsAppClick,
  trackServiceInterest,
  trackQuoteRequest,
  trackContact,
};
