-- ============================================================================
-- MIGRATION: Adicionar novas tabelas ao banco de dados
-- Data: 2025-01-19
-- Descrição: Adiciona tabelas para projects, testimonials, newsletter,
--            team_members e services
-- ============================================================================

-- 1. TABELA PROJECTS (Projetos)
-- ============================================================================
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  date TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  services TEXT[] NOT NULL,
  challenge TEXT,
  solution TEXT,
  results TEXT[],
  duration TEXT,
  team_size TEXT,
  area TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  featured BOOLEAN NOT NULL DEFAULT false,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Índices para projects
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(published) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects("order");

COMMENT ON TABLE projects IS 'Tabela para gerenciar projetos realizados pela empresa';
COMMENT ON COLUMN projects.slug IS 'URL amigável única para o projeto';
COMMENT ON COLUMN projects.services IS 'Array de serviços realizados no projeto';
COMMENT ON COLUMN projects.results IS 'Array de resultados alcançados';
COMMENT ON COLUMN projects.featured IS 'Indica se o projeto deve aparecer em destaque';
COMMENT ON COLUMN projects."order" IS 'Ordem customizada para exibição';

-- ============================================================================
-- 2. TABELA TESTIMONIALS (Depoimentos)
-- ============================================================================
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  position TEXT,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  project_id INTEGER REFERENCES projects(id) ON DELETE SET NULL,
  published BOOLEAN NOT NULL DEFAULT true,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Índices para testimonials
CREATE INDEX IF NOT EXISTS idx_testimonials_published ON testimonials(published) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_testimonials_rating ON testimonials(rating);
CREATE INDEX IF NOT EXISTS idx_testimonials_project_id ON testimonials(project_id);

COMMENT ON TABLE testimonials IS 'Depoimentos de clientes satisfeitos';
COMMENT ON COLUMN testimonials.rating IS 'Avaliação de 1 a 5 estrelas';
COMMENT ON COLUMN testimonials.project_id IS 'Referência opcional ao projeto relacionado';
COMMENT ON COLUMN testimonials.featured IS 'Indica se o depoimento deve aparecer em destaque';

-- ============================================================================
-- 3. TABELA NEWSLETTER_SUBSCRIBERS (Assinantes de Newsletter)
-- ============================================================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  confirmed_at TIMESTAMP,
  unsubscribed_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Índices para newsletter_subscribers
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_newsletter_confirmed ON newsletter_subscribers(confirmed_at) WHERE confirmed_at IS NOT NULL;

COMMENT ON TABLE newsletter_subscribers IS 'Assinantes da newsletter/e-mail marketing';
COMMENT ON COLUMN newsletter_subscribers.active IS 'Indica se o assinante está ativo';
COMMENT ON COLUMN newsletter_subscribers.confirmed_at IS 'Data de confirmação do e-mail (double opt-in)';
COMMENT ON COLUMN newsletter_subscribers.unsubscribed_at IS 'Data de cancelamento da inscrição';

-- ============================================================================
-- 4. TABELA TEAM_MEMBERS (Membros da Equipe)
-- ============================================================================
CREATE TABLE IF NOT EXISTS team_members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  certifications TEXT[],
  specialties TEXT[],
  active BOOLEAN NOT NULL DEFAULT true,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Índices para team_members
CREATE INDEX IF NOT EXISTS idx_team_active ON team_members(active) WHERE active = true;
CREATE INDEX IF NOT EXISTS idx_team_order ON team_members("order");

COMMENT ON TABLE team_members IS 'Membros da equipe e suas informações';
COMMENT ON COLUMN team_members.certifications IS 'Array de certificações (ex: NR-35, NR-33)';
COMMENT ON COLUMN team_members.specialties IS 'Array de especialidades';
COMMENT ON COLUMN team_members.active IS 'Indica se o membro está ativo na equipe';
COMMENT ON COLUMN team_members."order" IS 'Ordem de exibição na página da equipe';

-- ============================================================================
-- 5. TABELA SERVICES (Serviços Oferecidos)
-- ============================================================================
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  icon_name TEXT,
  image_url TEXT,
  benefits TEXT[],
  process TEXT[],
  published BOOLEAN NOT NULL DEFAULT true,
  featured BOOLEAN NOT NULL DEFAULT false,
  "order" INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Índices para services
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_published ON services(published) WHERE published = true;
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_services_order ON services("order");

COMMENT ON TABLE services IS 'Serviços oferecidos pela empresa';
COMMENT ON COLUMN services.slug IS 'URL amigável única para o serviço';
COMMENT ON COLUMN services.icon_name IS 'Nome do ícone Lucide React para exibição';
COMMENT ON COLUMN services.benefits IS 'Array de benefícios do serviço';
COMMENT ON COLUMN services.process IS 'Array de etapas do processo';
COMMENT ON COLUMN services.featured IS 'Indica se o serviço deve aparecer em destaque';
COMMENT ON COLUMN services."order" IS 'Ordem customizada para exibição';

-- ============================================================================
-- 6. TRIGGERS PARA UPDATE_AT AUTOMÁTICO
-- ============================================================================

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para projects
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger para services
DROP TRIGGER IF EXISTS update_services_updated_at ON services;
CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 7. RESUMO DA MIGRATION
-- ============================================================================

-- Verificar se todas as tabelas foram criadas
DO $$
DECLARE
  table_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO table_count
  FROM information_schema.tables
  WHERE table_schema = 'public'
  AND table_name IN ('projects', 'testimonials', 'newsletter_subscribers', 'team_members', 'services');

  RAISE NOTICE '============================================';
  RAISE NOTICE 'MIGRATION CONCLUÍDA COM SUCESSO!';
  RAISE NOTICE '============================================';
  RAISE NOTICE 'Tabelas criadas: %', table_count;
  RAISE NOTICE '1. projects - Gerenciamento de projetos';
  RAISE NOTICE '2. testimonials - Depoimentos de clientes';
  RAISE NOTICE '3. newsletter_subscribers - Assinantes';
  RAISE NOTICE '4. team_members - Equipe';
  RAISE NOTICE '5. services - Serviços oferecidos';
  RAISE NOTICE '============================================';
  RAISE NOTICE 'Total de tabelas no banco: %', (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public');
  RAISE NOTICE '============================================';
END $$;
