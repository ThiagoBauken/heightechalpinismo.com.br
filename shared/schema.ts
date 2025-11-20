import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  city: text("city").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  city: text("city").notNull(),
  projectDescription: text("project_description").notNull(),
  buildingType: text("building_type"),
  buildingHeight: text("building_height"),
  urgency: text("urgency"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const analyticsEvents = pgTable("analytics_events", {
  id: serial("id").primaryKey(),
  eventId: text("event_id").notNull(),
  event: text("event").notNull(),
  page: text("page").notNull(),
  timestamp: timestamp("timestamp").notNull(),
  sessionId: text("session_id").notNull(),
  userAgent: text("user_agent"),
  referrer: text("referrer"),
  deviceType: text("device_type"),
  ipHash: text("ip_hash"), // IP anonimizado (hash) - LGPD compliant
  data: jsonb("data"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array(),
  imageUrl: text("image_url"),
  author: text("author").notNull(),
  readTime: integer("read_time").notNull(),
  published: boolean("published").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const geoVisits = pgTable("geo_visits", {
  id: serial("id").primaryKey(),
  ipHash: text("ip_hash").notNull(), // IP anonimizado (hash) - LGPD compliant
  country: text("country"),
  countryCode: text("country_code"),
  region: text("region"), // Estado (SP, RJ, etc)
  regionName: text("region_name"), // Nome completo do estado
  city: text("city"),
  lat: text("lat"),
  lon: text("lon"),
  timezone: text("timezone"),
  isp: text("isp"), // Provedor de internet
  deviceType: text("device_type"), // mobile, desktop, tablet
  os: text("os"), // Sistema operacional (Android, iOS, Windows, etc)
  browser: text("browser"), // Navegador (Chrome, Firefox, Safari, etc)
  pageUrl: text("page_url"),
  sessionId: text("session_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  date: text("date").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  services: text("services").array().notNull(), // Array de serviços
  challenge: text("challenge"),
  solution: text("solution"),
  results: text("results").array(), // Array de resultados
  duration: text("duration"),
  teamSize: text("team_size"),
  area: text("area"),
  published: boolean("published").default(true).notNull(),
  featured: boolean("featured").default(false).notNull(), // Para destacar projetos
  order: integer("order").default(0).notNull(), // Para ordenação customizada
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company"),
  position: text("position"),
  content: text("content").notNull(),
  rating: integer("rating").notNull(), // 1-5
  imageUrl: text("image_url"),
  projectId: integer("project_id"), // Relação opcional com projeto
  published: boolean("published").default(true).notNull(),
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  active: boolean("active").default(true).notNull(),
  confirmedAt: timestamp("confirmed_at"),
  unsubscribedAt: timestamp("unsubscribed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  bio: text("bio"),
  imageUrl: text("image_url"),
  certifications: text("certifications").array(), // Array de certificações
  specialties: text("specialties").array(), // Array de especialidades
  active: boolean("active").default(true).notNull(),
  order: integer("order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  fullDescription: text("full_description").notNull(),
  iconName: text("icon_name"), // Nome do ícone (ex: "Paintbrush", "Shield", etc)
  imageUrl: text("image_url"),
  benefits: text("benefits").array(), // Array de benefícios
  process: text("process").array(), // Array de etapas do processo
  published: boolean("published").default(true).notNull(),
  featured: boolean("featured").default(false).notNull(),
  order: integer("order").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertQuoteSchema = createInsertSchema(quotes).omit({
  id: true,
  createdAt: true,
});

export const insertAnalyticsEventSchema = createInsertSchema(analyticsEvents).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  // Permitir publishedAt como string ISO ou Date para facilitar criação/atualização de posts
  publishedAt: z.union([
    z.string().datetime(),
    z.date(),
    z.null()
  ]).optional(),
});

export const insertGeoVisitSchema = createInsertSchema(geoVisits).omit({
  id: true,
  createdAt: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({
  id: true,
  createdAt: true,
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({
  id: true,
  createdAt: true,
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertQuote = z.infer<typeof insertQuoteSchema>;
export type Quote = typeof quotes.$inferSelect;
export type InsertAnalyticsEvent = z.infer<typeof insertAnalyticsEventSchema>;
export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertGeoVisit = z.infer<typeof insertGeoVisitSchema>;
export type GeoVisit = typeof geoVisits.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;
