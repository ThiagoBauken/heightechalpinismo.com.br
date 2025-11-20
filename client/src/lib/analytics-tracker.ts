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
  private trackedPages: Set<string> = new Set(); // Rastrear páginas já visualizadas nesta sessão
  private isSending: boolean = false; // Flag para prevenir envios simultâneos

  constructor() {
    this.sessionId = this.generateSessionId();
    this.loadTrackedPages();
    this.initializeTracking();
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

    // Prevenir envios simultâneos (race condition)
    if (this.isSending) {
      console.log('📊 Batch já está sendo enviado, aguardando...');
      return;
    }

    this.isSending = true;
    const eventsToSend = [...this.events]; // Copiar eventos antes de limpar
    this.events = []; // Limpar imediatamente para prevenir duplicatas

    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events: eventsToSend,
          sessionId: this.sessionId
        })
      });

      console.log(`✅ Analytics enviados: ${eventsToSend.length} eventos`);
    } catch (error) {
      console.error('❌ Erro ao enviar analytics:', error);
      // Em caso de erro, não recolocar os eventos na fila para evitar duplicatas
    } finally {
      this.isSending = false;
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