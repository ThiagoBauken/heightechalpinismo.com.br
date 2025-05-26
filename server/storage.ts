import { users, contacts, quotes, type User, type InsertUser, type Contact, type InsertContact, type Quote, type InsertQuote } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createQuote(quote: InsertQuote): Promise<Quote>;
  getContacts(): Promise<Contact[]>;
  getQuotes(): Promise<Quote[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private quotes: Map<number, Quote>;
  private currentUserId: number;
  private currentContactId: number;
  private currentQuoteId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.quotes = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentQuoteId = 1;
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
}

export const storage = new MemStorage();
