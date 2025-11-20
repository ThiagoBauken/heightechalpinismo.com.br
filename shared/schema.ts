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
