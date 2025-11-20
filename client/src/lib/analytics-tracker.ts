// Sistema de tracking interno para métricas de conversão
interface AnalyticsEvent {
  id: string;
  event: string;
  page: string;
  timestamp: Date;
  userAgent: string;
  referrer: string;
  sessionId: string;
  data?: Record<string, any>;
}

class AnalyticsTracker {
  private sessionId: string;
  private events: AnalyticsEvent[] = [];
  private conversionEvents: Set<string> = new Set(); // Rastrear eventos de conversão já enviados
  private trackedPages: Set<string> = new Set(); // Rastrear páginas já visualizadas nesta sessão

  constructor() {
    this.sessionId = this.generateSessionId();
    this.loadConversionEvents();
    this.loadTrackedPages();
    this.initializeTracking();
  }

  private loadConversionEvents() {
    // Carregar eventos de conversão do sessionStorage
    const stored = sessionStorage.getItem('conversion_events');
    if (stored) {
      try {
        const events = JSON.parse(stored);
        this.conversionEvents = new Set(events);
      } catch (e) {
        console.error('Error loading conversion events:', e);
      }
    }
  }

  private saveConversionEvents() {
    sessionStorage.setItem('conversion_events', JSON.stringify(Array.from(this.conversionEvents)));
  }

  private loadTrackedPages() {
    // Carregar páginas rastreadas do sessionStorage
    const stored = sessionStorage.getItem('tracked_pages');
    if (stored) {
      try {
        const pages = JSON.parse(stored);
        this.trackedPages = new Set(pages);
      } catch (e) {
        console.error('Error loading tracked pages:', e);
      }
    }
  }

  private saveTrackedPages() {
    sessionStorage.setItem('tracked_pages', JSON.stringify(Array.from(this.trackedPages)));
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking() {
    // Track page views
    this.trackPageView();

    // Track geolocation (once per session)
    this.trackGeoVisit();

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.sendBatch();
      }
    });

    // Send batch every 30 seconds
    setInterval(() => {
      this.sendBatch();
    }, 30000);
  }

  trackEvent(event: string, data?: Record<string, any>) {
    // ✅ DEDUPLICAÇÃO: Verificar se evento de conversão já foi enviado nesta sessão
    if (this.isConversionEvent(event)) {
      const eventKey = `${event}_${data?.source || 'unknown'}`;

      if (this.conversionEvents.has(eventKey)) {
        console.log('🔄 Evento de conversão duplicado ignorado:', {
          event,
          source: data?.source,
          message: 'Já registrado nesta sessão'
        });
        return; // Não enviar duplicata
      }

      // Marcar como enviado
      this.conversionEvents.add(eventKey);
      this.saveConversionEvents();
    }

    const analyticsEvent: AnalyticsEvent = {
      id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      event,
      page: window.location.pathname,
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      sessionId: this.sessionId,
      data
    };

    this.events.push(analyticsEvent);

    // Console log for development
    console.log('📊 Analytics Event:', analyticsEvent);

    // If it's an important conversion event, send immediately
    if (this.isConversionEvent(event)) {
      this.sendBatch();
    }
  }

  trackPageView() {
    const currentPage = window.location.pathname;

    // 🔄 DEDUPLICAÇÃO: Verificar se página já foi rastreada nesta sessão
    if (this.trackedPages.has(currentPage)) {
      console.log('📊 Page view já registrado nesta sessão:', currentPage);
      return; // Não enviar duplicata
    }

    // Marcar página como rastreada
    this.trackedPages.add(currentPage);
    this.saveTrackedPages();

    this.trackEvent('page_view', {
      title: document.title,
      url: window.location.href
    });
  }

  trackWhatsAppClick(source: string) {
    this.trackEvent('whatsapp_click', {
      source,
      phone: '5511999999999'
    });
  }

  trackInstagramClick(source: string) {
    this.trackEvent('instagram_click', {
      source
    });
  }

  trackFormSubmission(formType: string, formData: any) {
    this.trackEvent('form_submission', {
      formType,
      fields: Object.keys(formData),
      service: formData.service || 'not_specified'
    });
  }

  trackButtonClick(buttonText: string, location: string) {
    this.trackEvent('button_click', {
      buttonText,
      location
    });
  }

  trackServiceView(serviceName: string) {
    this.trackEvent('service_view', {
      serviceName
    });
  }

  trackTimeOnPage() {
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeSpent = Date.now() - startTime;
      this.trackEvent('time_on_page', {
        timeSpent: Math.round(timeSpent / 1000), // em segundos
        page: window.location.pathname
      });
    });
  }

  trackGeoVisit() {
    // Rastrear geolocalização apenas uma vez por sessão
    const geoTracked = sessionStorage.getItem('geo_tracked');

    if (!geoTracked) {
      fetch('/api/geo/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageUrl: window.location.pathname,
          sessionId: this.sessionId
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            sessionStorage.setItem('geo_tracked', 'true');
            console.log('📍 Geolocalização rastreada:', data.visit);
          }
        })
        .catch(error => {
          console.error('Erro ao rastrear geolocalização:', error);
        });
    }
  }

  private isConversionEvent(event: string): boolean {
    const conversionEvents = [
      'whatsapp_click',
      'instagram_click', 
      'form_submission',
      'phone_click'
    ];
    return conversionEvents.includes(event);
  }

  private async sendBatch() {
    if (this.events.length === 0) return;

    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events: this.events,
          sessionId: this.sessionId
        })
      });

      // Clear sent events
      this.events = [];
    } catch (error) {
      console.error('Erro ao enviar analytics:', error);
    }
  }

  // Get current session stats
  getSessionStats() {
    return {
      sessionId: this.sessionId,
      eventsCount: this.events.length,
      currentPage: window.location.pathname
    };
  }
}

export const analytics = new AnalyticsTracker();