-- ============================================
-- HEIGHTECH ALPINISMO INDUSTRIAL
-- Script de Criação do Banco de Dados
-- PostgreSQL - Easypanel
-- ============================================

-- Criação da tabela de usuários (para dashboard admin)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Criação da tabela de contatos (formulário de contato)
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  city TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Criação da tabela de orçamentos (pedidos de orçamento)
CREATE TABLE IF NOT EXISTS quotes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  city TEXT NOT NULL,
  project_description TEXT NOT NULL,
  building_type TEXT,
  building_height TEXT,
  urgency TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Criação da tabela de eventos de analytics
CREATE TABLE IF NOT EXISTS analytics_events (
  id SERIAL PRIMARY KEY,
  event_id TEXT NOT NULL,
  event TEXT NOT NULL,
  page TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  session_id TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  device_type TEXT,
  data JSONB,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Criação da tabela de posts do blog
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[],
  image_url TEXT,
  author TEXT NOT NULL,
  read_time INTEGER NOT NULL,
  published BOOLEAN DEFAULT FALSE NOT NULL,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_service ON contacts(service);
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_service ON quotes(service);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event ON analytics_events(event);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Inserir usuário admin padrão
-- Senha: admin123 (hash bcrypt - $2b$10$xyz...)
-- IMPORTANTE: Trocar a senha após primeiro login!
INSERT INTO users (username, password)
VALUES ('admin', '$2b$10$rKZQK5JZl8dXqJYQZ5JZlOZQK5JZl8dXqJYQZ5JZlOZQK5JZl8dXq')
ON CONFLICT (username) DO NOTHING;

-- ============================================
-- Verificação das tabelas criadas
-- ============================================
SELECT
  'Tabelas criadas com sucesso!' as status,
  COUNT(*) as total_tables
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('users', 'contacts', 'quotes', 'analytics_events', 'blog_posts');
