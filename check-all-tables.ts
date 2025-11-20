import "dotenv/config";
import { db } from "./server/db";
import {
  users,
  contacts,
  quotes,
  analyticsEvents,
  blogPosts,
  geoVisits,
  projects,
  testimonials,
  newsletterSubscribers,
  teamMembers,
  services
} from "./shared/schema";

async function checkAllTables() {
  console.log("🔍 Verificando TODAS as tabelas do banco de dados...\n");

  try {
    // Tabelas existentes
    const allUsers = await db.select().from(users);
    const allContacts = await db.select().from(contacts);
    const allQuotes = await db.select().from(quotes);
    const allBlogPosts = await db.select().from(blogPosts);
    const allAnalyticsEvents = await db.select().from(analyticsEvents);
    const allGeoVisits = await db.select().from(geoVisits);

    // Novas tabelas
    const allProjects = await db.select().from(projects);
    const allTestimonials = await db.select().from(testimonials);
    const allNewsletterSubscribers = await db.select().from(newsletterSubscribers);
    const allTeamMembers = await db.select().from(teamMembers);
    const allServices = await db.select().from(services);

    console.log("============================================");
    console.log("📊 TABELAS EXISTENTES (6)");
    console.log("============================================\n");

    console.log("👤 USUÁRIOS:");
    console.log(`   Total: ${allUsers.length}\n`);

    console.log("📧 CONTATOS:");
    console.log(`   Total: ${allContacts.length}\n`);

    console.log("💰 ORÇAMENTOS:");
    console.log(`   Total: ${allQuotes.length}\n`);

    console.log("📝 POSTS DO BLOG:");
    console.log(`   Total: ${allBlogPosts.length}`);
    console.log(`   Publicados: ${allBlogPosts.filter(p => p.published).length}\n`);

    console.log("📊 EVENTOS DE ANALYTICS:");
    console.log(`   Total: ${allAnalyticsEvents.length}\n`);

    console.log("🌍 VISITAS GEOGRÁFICAS:");
    console.log(`   Total: ${allGeoVisits.length}\n`);

    console.log("============================================");
    console.log("🆕 NOVAS TABELAS (5)");
    console.log("============================================\n");

    console.log("🏗️  PROJETOS:");
    console.log(`   Total: ${allProjects.length}`);
    console.log(`   Publicados: ${allProjects.filter(p => p.published).length}`);
    console.log(`   Em destaque: ${allProjects.filter(p => p.featured).length}`);
    if (allProjects.length > 0) {
      console.log("\n   Lista de Projetos:");
      allProjects.forEach((project, index) => {
        console.log(`   ${index + 1}. [${project.published ? '✓' : '✗'}] ${project.title}`);
        console.log(`      Slug: ${project.slug} | Local: ${project.location}`);
      });
    }
    console.log();

    console.log("💬 DEPOIMENTOS:");
    console.log(`   Total: ${allTestimonials.length}`);
    console.log(`   Publicados: ${allTestimonials.filter(t => t.published).length}`);
    console.log(`   Em destaque: ${allTestimonials.filter(t => t.featured).length}`);
    if (allTestimonials.length > 0) {
      console.log("\n   Lista de Depoimentos:");
      allTestimonials.forEach((testimonial, index) => {
        console.log(`   ${index + 1}. ${testimonial.name} - ${testimonial.company || 'Sem empresa'}`);
        console.log(`      Rating: ${'⭐'.repeat(testimonial.rating)}`);
      });
    }
    console.log();

    console.log("📰 ASSINANTES NEWSLETTER:");
    console.log(`   Total: ${allNewsletterSubscribers.length}`);
    console.log(`   Ativos: ${allNewsletterSubscribers.filter(s => s.active).length}`);
    console.log(`   Confirmados: ${allNewsletterSubscribers.filter(s => s.confirmedAt).length}`);
    if (allNewsletterSubscribers.length > 0) {
      console.log("\n   Lista de Assinantes:");
      allNewsletterSubscribers.slice(0, 5).forEach((sub, index) => {
        console.log(`   ${index + 1}. ${sub.email} - ${sub.active ? '✓ Ativo' : '✗ Inativo'}`);
      });
    }
    console.log();

    console.log("👥 MEMBROS DA EQUIPE:");
    console.log(`   Total: ${allTeamMembers.length}`);
    console.log(`   Ativos: ${allTeamMembers.filter(m => m.active).length}`);
    if (allTeamMembers.length > 0) {
      console.log("\n   Lista de Membros:");
      allTeamMembers.forEach((member, index) => {
        console.log(`   ${index + 1}. ${member.name} - ${member.position}`);
      });
    }
    console.log();

    console.log("🛠️  SERVIÇOS:");
    console.log(`   Total: ${allServices.length}`);
    console.log(`   Publicados: ${allServices.filter(s => s.published).length}`);
    console.log(`   Em destaque: ${allServices.filter(s => s.featured).length}`);
    if (allServices.length > 0) {
      console.log("\n   Lista de Serviços:");
      allServices.forEach((service, index) => {
        console.log(`   ${index + 1}. [${service.published ? '✓' : '✗'}] ${service.title}`);
        console.log(`      Slug: ${service.slug}`);
      });
    }
    console.log();

    console.log("============================================");
    console.log("✅ RESUMO FINAL");
    console.log("============================================\n");

    const totalTables = 11;
    const totalRecords =
      allUsers.length +
      allContacts.length +
      allQuotes.length +
      allBlogPosts.length +
      allAnalyticsEvents.length +
      allGeoVisits.length +
      allProjects.length +
      allTestimonials.length +
      allNewsletterSubscribers.length +
      allTeamMembers.length +
      allServices.length;

    console.log(`   📊 Total de Tabelas: ${totalTables}`);
    console.log(`   📝 Total de Registros: ${totalRecords}`);
    console.log();
    console.log("   Tabelas Existentes (6):");
    console.log(`      - users: ${allUsers.length}`);
    console.log(`      - contacts: ${allContacts.length}`);
    console.log(`      - quotes: ${allQuotes.length}`);
    console.log(`      - blog_posts: ${allBlogPosts.length}`);
    console.log(`      - analytics_events: ${allAnalyticsEvents.length}`);
    console.log(`      - geo_visits: ${allGeoVisits.length}`);
    console.log();
    console.log("   Novas Tabelas (5):");
    console.log(`      - projects: ${allProjects.length}`);
    console.log(`      - testimonials: ${allTestimonials.length}`);
    console.log(`      - newsletter_subscribers: ${allNewsletterSubscribers.length}`);
    console.log(`      - team_members: ${allTeamMembers.length}`);
    console.log(`      - services: ${allServices.length}`);
    console.log();

    console.log("============================================");
    console.log("✅ Verificação concluída com sucesso!");
    console.log("============================================\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao verificar banco de dados:", error);
    process.exit(1);
  }
}

checkAllTables();
