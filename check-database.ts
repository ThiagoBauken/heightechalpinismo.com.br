import "dotenv/config";
import { db } from "./server/db";
import { users, contacts, quotes, analyticsEvents, blogPosts, geoVisits } from "./shared/schema";

async function checkDatabase() {
  console.log("🔍 Verificando estado do banco de dados...\n");

  try {
    // Verificar usuários
    const allUsers = await db.select().from(users);
    console.log("👤 USUÁRIOS:");
    console.log(`   Total: ${allUsers.length}`);
    if (allUsers.length > 0) {
      console.log(`   Usernames: ${allUsers.map(u => u.username).join(', ')}`);
    }
    console.log();

    // Verificar contatos
    const allContacts = await db.select().from(contacts);
    console.log("📧 CONTATOS:");
    console.log(`   Total: ${allContacts.length}`);
    if (allContacts.length > 0) {
      console.log(`   Últimos 3: ${allContacts.slice(-3).map(c => `${c.name} (${c.email})`).join(', ')}`);
    }
    console.log();

    // Verificar orçamentos
    const allQuotes = await db.select().from(quotes);
    console.log("💰 ORÇAMENTOS:");
    console.log(`   Total: ${allQuotes.length}`);
    if (allQuotes.length > 0) {
      console.log(`   Últimos 3: ${allQuotes.slice(-3).map(q => `${q.name} - ${q.service}`).join(', ')}`);
    }
    console.log();

    // Verificar posts do blog
    const allBlogPosts = await db.select().from(blogPosts);
    console.log("📝 POSTS DO BLOG:");
    console.log(`   Total: ${allBlogPosts.length}`);
    console.log(`   Publicados: ${allBlogPosts.filter(p => p.published).length}`);
    console.log(`   Rascunhos: ${allBlogPosts.filter(p => !p.published).length}`);
    if (allBlogPosts.length > 0) {
      console.log("\n   Lista de Posts:");
      allBlogPosts.forEach((post, index) => {
        console.log(`   ${index + 1}. [${post.published ? '✓' : '✗'}] ${post.title}`);
        console.log(`      Slug: ${post.slug}`);
        console.log(`      Categoria: ${post.category} | Autor: ${post.author}`);
      });
    }
    console.log();

    // Verificar eventos de analytics
    const allAnalyticsEvents = await db.select().from(analyticsEvents);
    console.log("📊 EVENTOS DE ANALYTICS:");
    console.log(`   Total: ${allAnalyticsEvents.length}`);
    if (allAnalyticsEvents.length > 0) {
      const uniquePages = new Set(allAnalyticsEvents.map(e => e.page));
      console.log(`   Páginas únicas: ${uniquePages.size}`);
      console.log(`   Últimos 5 eventos: ${allAnalyticsEvents.slice(-5).map(e => e.event).join(', ')}`);
    }
    console.log();

    // Verificar visitas geográficas
    const allGeoVisits = await db.select().from(geoVisits);
    console.log("🌍 VISITAS GEOGRÁFICAS:");
    console.log(`   Total: ${allGeoVisits.length}`);
    if (allGeoVisits.length > 0) {
      const cities = allGeoVisits.map(v => v.city).filter(Boolean);
      const uniqueCities = new Set(cities);
      console.log(`   Cidades únicas: ${uniqueCities.size}`);
      if (cities.length > 0) {
        const cityCounts = cities.reduce((acc: any, city) => {
          acc[city!] = (acc[city!] || 0) + 1;
          return acc;
        }, {});
        const topCities = Object.entries(cityCounts)
          .sort((a: any, b: any) => b[1] - a[1])
          .slice(0, 5);
        console.log(`   Top 5 cidades: ${topCities.map(([city, count]) => `${city} (${count})`).join(', ')}`);
      }

      const devices = allGeoVisits.map(v => v.deviceType).filter(Boolean);
      const deviceCounts = devices.reduce((acc: any, device) => {
        acc[device!] = (acc[device!] || 0) + 1;
        return acc;
      }, {});
      console.log(`   Dispositivos: ${JSON.stringify(deviceCounts)}`);
    }
    console.log();

    console.log("✅ Verificação concluída!");
    console.log("\n📋 RESUMO:");
    console.log(`   Tabelas criadas: 6/6`);
    console.log(`   Usuários: ${allUsers.length}`);
    console.log(`   Contatos: ${allContacts.length}`);
    console.log(`   Orçamentos: ${allQuotes.length}`);
    console.log(`   Posts do Blog: ${allBlogPosts.length} (${allBlogPosts.filter(p => p.published).length} publicados)`);
    console.log(`   Eventos Analytics: ${allAnalyticsEvents.length}`);
    console.log(`   Visitas Geo: ${allGeoVisits.length}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao verificar banco de dados:", error);
    process.exit(1);
  }
}

checkDatabase();
