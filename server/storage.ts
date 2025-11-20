import {
  users,
  contacts,
  quotes,
  analyticsEvents,
  blogPosts,
  geoVisits,
  type User,
  type InsertUser,
  type Contact,
  type InsertContact,
  type Quote,
  type InsertQuote,
  type AnalyticsEvent,
  type InsertAnalyticsEvent,
  type BlogPost,
  type InsertBlogPost,
  type GeoVisit,
  type InsertGeoVisit
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, gte, count, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createQuote(quote: InsertQuote): Promise<Quote>;
  getContacts(): Promise<Contact[]>;
  getQuotes(): Promise<Quote[]>;
  createAnalyticsEvent(event: InsertAnalyticsEvent): Promise<AnalyticsEvent>;
  createAnalyticsEvents(events: InsertAnalyticsEvent[]): Promise<AnalyticsEvent[]>;
  getBlogPosts(publishedOnly?: boolean): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  createGeoVisit(visit: InsertGeoVisit): Promise<GeoVisit>;
  getGeoStats(daysAgo?: number): Promise<any>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private quotes: Map<number, Quote>;
  private analyticsEvents: Map<number, AnalyticsEvent>;
  private blogPosts: Map<number, BlogPost>;
  private geoVisits: Map<number, GeoVisit>;
  private currentUserId: number;
  private currentContactId: number;
  private currentQuoteId: number;
  private currentEventId: number;
  private currentPostId: number;
  private currentGeoVisitId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.quotes = new Map();
    this.analyticsEvents = new Map();
    this.blogPosts = new Map();
    this.geoVisits = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentQuoteId = 1;
    this.currentEventId = 1;
    this.currentPostId = 1;
    this.currentGeoVisitId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = this.currentQuoteId++;
    const quote: Quote = { 
      ...insertQuote, 
      id, 
      createdAt: new Date(),
      buildingType: insertQuote.buildingType || null,
      buildingHeight: insertQuote.buildingHeight || null,
      urgency: insertQuote.urgency || null
    };
    this.quotes.set(id, quote);
    return quote;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createAnalyticsEvent(insertEvent: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const id = this.currentEventId++;
    const event: AnalyticsEvent = {
      ...insertEvent,
      id,
      data: insertEvent.data ?? null,
      userAgent: insertEvent.userAgent ?? null,
      referrer: insertEvent.referrer ?? null,
      deviceType: insertEvent.deviceType ?? null,
      createdAt: new Date()
    };
    this.analyticsEvents.set(id, event);
    return event;
  }

  async createAnalyticsEvents(events: InsertAnalyticsEvent[]): Promise<AnalyticsEvent[]> {
    return Promise.all(events.map(event => this.createAnalyticsEvent(event)));
  }

  async getBlogPosts(publishedOnly: boolean = true): Promise<BlogPost[]> {
    let posts = Array.from(this.blogPosts.values());

    if (publishedOnly) {
      posts = posts.filter(post => post.published);
      return posts.sort((a, b) => {
        const dateA = a.publishedAt?.getTime() || 0;
        const dateB = b.publishedAt?.getTime() || 0;
        return dateB - dateA;
      });
    }

    return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentPostId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      tags: insertPost.tags || null,
      imageUrl: insertPost.imageUrl || null,
      publishedAt: insertPost.publishedAt || null,
      published: insertPost.published ?? false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: number, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;

    const updatedPost: BlogPost = {
      ...post,
      ...updateData,
      updatedAt: new Date()
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async createGeoVisit(insertVisit: InsertGeoVisit): Promise<GeoVisit> {
    const id = this.currentGeoVisitId++;
    const visit: GeoVisit = {
      ...insertVisit,
      id,
      country: insertVisit.country ?? null,
      countryCode: insertVisit.countryCode ?? null,
      region: insertVisit.region ?? null,
      regionName: insertVisit.regionName ?? null,
      city: insertVisit.city ?? null,
      lat: insertVisit.lat ?? null,
      lon: insertVisit.lon ?? null,
      timezone: insertVisit.timezone ?? null,
      isp: insertVisit.isp ?? null,
      deviceType: insertVisit.deviceType ?? null,
      os: insertVisit.os ?? null,
      browser: insertVisit.browser ?? null,
      pageUrl: insertVisit.pageUrl ?? null,
      sessionId: insertVisit.sessionId ?? null,
      createdAt: new Date()
    };
    this.geoVisits.set(id, visit);
    return visit;
  }

  async getGeoStats(daysAgo: number = 30): Promise<any> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysAgo);

    const recentVisits = Array.from(this.geoVisits.values()).filter(
      visit => visit.createdAt >= cutoffDate
    );

    // Agregar por estado
    const byState = recentVisits.reduce((acc, visit) => {
      if (visit.region) {
        acc[visit.region] = (acc[visit.region] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    // Agregar por cidade
    const byCity = recentVisits.reduce((acc, visit) => {
      if (visit.city) {
        acc[visit.city] = (acc[visit.city] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    // Agregar por tipo de dispositivo
    const byDevice = recentVisits.reduce((acc, visit) => {
      if (visit.deviceType) {
        acc[visit.deviceType] = (acc[visit.deviceType] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    // Agregar por sistema operacional
    const byOS = recentVisits.reduce((acc, visit) => {
      if (visit.os) {
        acc[visit.os] = (acc[visit.os] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    // Agregar por navegador
    const byBrowser = recentVisits.reduce((acc, visit) => {
      if (visit.browser) {
        acc[visit.browser] = (acc[visit.browser] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      totalVisits: recentVisits.length,
      byState,
      byCity,
      byDevice,
      byOS,
      byBrowser
    };
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const [quote] = await db.insert(quotes).values(insertQuote).returning();
    return quote;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  async getQuotes(): Promise<Quote[]> {
    return await db.select().from(quotes).orderBy(desc(quotes.createdAt));
  }

  async createAnalyticsEvent(event: InsertAnalyticsEvent): Promise<AnalyticsEvent> {
    const [analyticsEvent] = await db.insert(analyticsEvents).values(event).returning();
    return analyticsEvent;
  }

  async createAnalyticsEvents(events: InsertAnalyticsEvent[]): Promise<AnalyticsEvent[]> {
    if (events.length === 0) return [];
    return await db.insert(analyticsEvents).values(events).returning();
  }

  async getBlogPosts(publishedOnly: boolean = true): Promise<BlogPost[]> {
    const query = db.select().from(blogPosts);

    if (publishedOnly) {
      return await query.where(eq(blogPosts.published, true)).orderBy(desc(blogPosts.publishedAt));
    }

    return await query.orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return post;
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(blogPosts).values(insertPost).returning();
    return post;
  }

  async updateBlogPost(id: number, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [post] = await db
      .update(blogPosts)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  async createGeoVisit(insertVisit: InsertGeoVisit): Promise<GeoVisit> {
    const [visit] = await db.insert(geoVisits).values(insertVisit).returning();
    return visit;
  }

  async getGeoStats(daysAgo: number = 30): Promise<any> {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysAgo);

    // Buscar visitas recentes
    const recentVisits = await db
      .select()
      .from(geoVisits)
      .where(gte(geoVisits.createdAt, cutoffDate));

    // Contar total de visitas
    const totalVisits = recentVisits.length;

    // Agregar por estado (top 10)
    const stateGroups = recentVisits.reduce((acc, visit) => {
      if (visit.region) {
        acc[visit.region] = (acc[visit.region] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const byState = Object.entries(stateGroups)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([state, count]) => ({ state, count }));

    // Agregar por cidade (top 20)
    const cityGroups = recentVisits.reduce((acc, visit) => {
      if (visit.city) {
        const key = `${visit.city}, ${visit.region}`;
        acc[key] = (acc[key] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const byCity = Object.entries(cityGroups)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([city, count]) => ({ city, count }));

    // Agregar por tipo de dispositivo
    const deviceGroups = recentVisits.reduce((acc, visit) => {
      if (visit.deviceType) {
        acc[visit.deviceType] = (acc[visit.deviceType] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const byDevice = Object.entries(deviceGroups).map(([device, count]) => ({
      device,
      count,
      percentage: totalVisits > 0 ? Math.round((count / totalVisits) * 100) : 0
    }));

    // Agregar por sistema operacional
    const osGroups = recentVisits.reduce((acc, visit) => {
      if (visit.os) {
        acc[visit.os] = (acc[visit.os] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const byOS = Object.entries(osGroups)
      .sort((a, b) => b[1] - a[1])
      .map(([os, count]) => ({
        os,
        count,
        percentage: totalVisits > 0 ? Math.round((count / totalVisits) * 100) : 0
      }));

    // Agregar por navegador
    const browserGroups = recentVisits.reduce((acc, visit) => {
      if (visit.browser) {
        acc[visit.browser] = (acc[visit.browser] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const byBrowser = Object.entries(browserGroups)
      .sort((a, b) => b[1] - a[1])
      .map(([browser, count]) => ({
        browser,
        count,
        percentage: totalVisits > 0 ? Math.round((count / totalVisits) * 100) : 0
      }));

    return {
      totalVisits,
      byState,
      byCity,
      byDevice,
      byOS,
      byBrowser
    };
  }
}

// Use DatabaseStorage for production, MemStorage for testing
export const storage = new DatabaseStorage();
