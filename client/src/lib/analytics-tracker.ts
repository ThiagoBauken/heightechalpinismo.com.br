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

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking() {
    // Track page views
    this.trackPageView();
    
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