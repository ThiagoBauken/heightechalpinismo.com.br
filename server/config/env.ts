import { z } from 'zod';
import logger from '../logger';

// Schema de validação para variáveis de ambiente
const envSchema = z.object({
  // Server
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('5000'),

  // Database (obrigatório em produção)
  DATABASE_URL: z.string().optional(),

  // Security
  JWT_SECRET: z.string().min(32).optional(),
  SESSION_SECRET: z.string().min(32).optional(),
  CORS_ORIGIN: z.string().optional(),

  // Email (opcional)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().email().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_SECURE: z.string().optional(),
  ADMIN_EMAIL: z.string().email().optional(),

  // Company Info
  VITE_COMPANY_NAME: z.string().default('Industrial Climbers'),
  VITE_COMPANY_EMAIL: z.string().email().optional(),
  VITE_COMPANY_PHONE: z.string().optional(),
  VITE_COMPANY_ADDRESS: z.string().optional(),
  VITE_SITE_URL: z.string().url().optional(),

  // Social Media
  VITE_INSTAGRAM_URL: z.string().url().optional(),
  VITE_FACEBOOK_URL: z.string().url().optional(),
  VITE_LINKEDIN_URL: z.string().url().optional(),
  VITE_WHATSAPP_NUMBER: z.string().optional(),

  // Analytics
  VITE_GA_TRACKING_ID: z.string().optional(),
  VITE_DASHBOARD_PASSWORD: z.string().optional(),

  // Other
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
});

export type Env = z.infer<typeof envSchema>;

// Validar variáveis de ambiente
export function validateEnv(): Env {
  try {
    const validated = envSchema.parse(process.env);

    // Warnings para configurações importantes faltando
    if (validated.NODE_ENV === 'production') {
      if (!validated.DATABASE_URL) {
        logger.warn('⚠️  DATABASE_URL não configurado - usando MemStorage (dados serão perdidos!)');
      }

      if (!validated.JWT_SECRET || validated.JWT_SECRET.length < 32) {
        logger.warn('⚠️  JWT_SECRET não configurado ou muito curto - usando padrão inseguro!');
      }

      if (!validated.SESSION_SECRET || validated.SESSION_SECRET.length < 32) {
        logger.warn('⚠️  SESSION_SECRET não configurado ou muito curto - usando padrão inseguro!');
      }

      if (!validated.SMTP_USER) {
        logger.warn('⚠️  SMTP não configurado - notificações por email desabilitadas');
      }

      if (!validated.ADMIN_EMAIL) {
        logger.warn('⚠️  ADMIN_EMAIL não configurado - notificações não serão enviadas');
      }
    }

    logger.info('✅ Environment variables validated successfully');
    return validated;
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.error('❌ Invalid environment variables:');
      error.errors.forEach((err) => {
        logger.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
      process.exit(1);
    }
    throw error;
  }
}

// Exportar variáveis validadas
export const env = validateEnv();
