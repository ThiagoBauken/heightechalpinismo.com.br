import { db } from "./db";
import { analyticsEvents } from "@shared/schema";
import { sql, and, gte, count, desc } from "drizzle-orm";

interface DashboardMetrics {
  totalPageViews: number;
  whatsappClicks: number;
  instagramClicks: number;
  facebookClicks: number;
  youtubeClicks: number;
  formSubmissions: number;
  topPages: Array<{ page: string; views: number }>;
  conversionRate: number;
  averageSessionDuration: number;
  bounceRate: number;
  deviceBreakdown: { mobile: number; desktop: number; tablet: number };
  serviceInterest: Record<string, number>;
}

export async function getDashboardMetrics(daysAgo: number = 30): Promise<DashboardMetrics> {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysAgo);

  try {
    // Total de visualizações de página
    const [pageViewsResult] = await db
      .select({ count: count() })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'page_view'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      );
    const totalPageViews = pageViewsResult?.count || 0;

    // Cliques no WhatsApp
    const [whatsappResult] = await db
      .select({ count: count() })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'whatsapp_click'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      );
    const whatsappClicks = whatsappResult?.count || 0;

    // Cliques no Instagram
    const [instagramResult] = await db
      .select({ count: count() })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'instagram_click'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      );
    const instagramClicks = instagramResult?.count || 0;

    // Cliques no Facebook
    const [facebookResult] = await db
      .select({ count: count() })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'facebook_click'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      );
    const facebookClicks = facebookResult?.count || 0;

    // Cliques no YouTube
    const [youtubeResult] = await db
      .select({ count: count() })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'youtube_click'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      );
    const youtubeClicks = youtubeResult?.count || 0;

    // Submissões de formulários
    const [formResult] = await db
      .select({ count: count() })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'form_submit'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      );
    const formSubmissions = formResult?.count || 0;

    // Top 5 páginas mais visitadas
    const topPagesRaw = await db
      .select({
        page: analyticsEvents.page,
        views: count()
      })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'page_view'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      )
      .groupBy(analyticsEvents.page)
      .orderBy(desc(count()))
      .limit(5);

    const topPages = topPagesRaw.map(p => ({
      page: p.page,
      views: Number(p.views)
    }));

    // Breakdown por dispositivo
    const deviceRaw = await db
      .select({
        deviceType: analyticsEvents.deviceType,
        count: count()
      })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'page_view'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      )
      .groupBy(analyticsEvents.deviceType);

    const totalDeviceViews = deviceRaw.reduce((sum, d) => sum + Number(d.count), 0);
    const deviceBreakdown = {
      mobile: 0,
      desktop: 0,
      tablet: 0
    };

    deviceRaw.forEach(d => {
      const percentage = totalDeviceViews > 0
        ? Math.round((Number(d.count) / totalDeviceViews) * 100)
        : 0;

      if (d.deviceType === 'mobile') deviceBreakdown.mobile = percentage;
      else if (d.deviceType === 'desktop') deviceBreakdown.desktop = percentage;
      else if (d.deviceType === 'tablet') deviceBreakdown.tablet = percentage;
    });

    // Interesse por serviço (páginas de serviço visualizadas)
    const servicePages = await db
      .select({
        page: analyticsEvents.page,
        count: count()
      })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'service_view'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      )
      .groupBy(analyticsEvents.page)
      .orderBy(desc(count()));

    const serviceInterest: Record<string, number> = {};
    servicePages.forEach(s => {
      // Extrair nome do serviço do caminho
      const serviceName = extractServiceName(s.page);
      serviceInterest[serviceName] = Number(s.count);
    });

    // Calcular taxa de conversão (formulários / page views * 100)
    const conversionRate = totalPageViews > 0
      ? Number(((formSubmissions / totalPageViews) * 100).toFixed(2))
      : 0;

    // Calcular duração média de sessão
    const sessionDurations = await db
      .select({
        sessionId: analyticsEvents.sessionId,
        minTime: sql<number>`MIN(EXTRACT(EPOCH FROM ${analyticsEvents.timestamp}))`,
        maxTime: sql<number>`MAX(EXTRACT(EPOCH FROM ${analyticsEvents.timestamp}))`
      })
      .from(analyticsEvents)
      .where(gte(analyticsEvents.timestamp, cutoffDate))
      .groupBy(analyticsEvents.sessionId);

    let totalDuration = 0;
    let sessionCount = 0;

    sessionDurations.forEach(session => {
      const duration = Number(session.maxTime) - Number(session.minTime);
      if (duration > 0 && duration < 3600) { // Ignorar sessões > 1 hora (provavelmente erros)
        totalDuration += duration;
        sessionCount++;
      }
    });

    const averageSessionDuration = sessionCount > 0
      ? Math.round(totalDuration / sessionCount)
      : 0;

    // Calcular bounce rate (sessões com apenas 1 page view)
    const singlePageSessions = await db
      .select({
        sessionId: analyticsEvents.sessionId,
        pageCount: count()
      })
      .from(analyticsEvents)
      .where(
        and(
          sql`${analyticsEvents.event} = 'page_view'`,
          gte(analyticsEvents.timestamp, cutoffDate)
        )
      )
      .groupBy(analyticsEvents.sessionId)
      .having(sql`count(*) = 1`);

    const totalSessions = sessionDurations.length;
    const bounceRate = totalSessions > 0
      ? Number(((singlePageSessions.length / totalSessions) * 100).toFixed(1))
      : 0;

    return {
      totalPageViews,
      whatsappClicks,
      instagramClicks,
      facebookClicks,
      youtubeClicks,
      formSubmissions,
      topPages,
      conversionRate,
      averageSessionDuration,
      bounceRate,
      deviceBreakdown,
      serviceInterest
    };
  } catch (error) {
    console.error('Erro ao calcular métricas do dashboard:', error);

    // Retornar dados vazios em caso de erro
    return {
      totalPageViews: 0,
      whatsappClicks: 0,
      instagramClicks: 0,
      facebookClicks: 0,
      youtubeClicks: 0,
      formSubmissions: 0,
      topPages: [],
      conversionRate: 0,
      averageSessionDuration: 0,
      bounceRate: 0,
      deviceBreakdown: { mobile: 0, desktop: 0, tablet: 0 },
      serviceInterest: {}
    };
  }
}

// Helper para extrair nome do serviço do caminho da URL
function extractServiceName(path: string): string {
  const serviceMap: Record<string, string> = {
    '/servicos/limpeza-fachadas': 'Limpeza de Fachadas',
    '/servicos/pintura-predial': 'Pintura Predial',
    '/servicos/impermeabilizacao': 'Impermeabilização',
    '/servicos/instalacao-equipamentos': 'Instalação de Equipamentos',
    '/servicos/limpeza-vidros': 'Limpeza de Vidros',
    '/servicos/instalacao-acm': 'Instalação de ACM',
    '/servicos/instalacao-led': 'Instalação de LED',
    '/servicos/pontos-ancoragem': 'Pontos de Ancoragem',
    '/servicos/limpeza-silos': 'Limpeza de Silos',
    '/servicos/restauracao-vidros': 'Restauração de Vidros',
    '/servicos/içamento-cargas': 'Içamento de Cargas',
  };

  return serviceMap[path] || path;
}
