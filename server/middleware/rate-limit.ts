import rateLimit from 'express-rate-limit';
import logger from '../logger';

// Rate limiter geral para API
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
  message: 'Muitas requisições deste IP, tente novamente mais tarde.',
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false }, // Desabilita validação de trust proxy
  handler: (req, res) => {
    logger.warn('Rate limit exceeded', {
      ip: req.ip,
      url: req.url,
    });
    res.status(429).json({
      error: 'Muitas requisições deste IP, tente novamente mais tarde.',
    });
  },
});

// Rate limiter estrito para formulários de contato/orçamento
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5, // Máximo 5 envios por hora
  message: 'Você atingiu o limite de envios. Tente novamente em 1 hora.',
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
  validate: { trustProxy: false }, // Desabilita validação de trust proxy
  handler: (req, res) => {
    logger.warn('Contact form rate limit exceeded', {
      ip: req.ip,
      url: req.url,
    });
    res.status(429).json({
      error: 'Você atingiu o limite de envios. Tente novamente em 1 hora.',
    });
  },
});

// Rate limiter para autenticação/login
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Máximo 5 tentativas de login
  message: 'Muitas tentativas de login. Tente novamente em 15 minutos.',
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Não conta se login for bem-sucedido
  validate: { trustProxy: false }, // Desabilita validação de trust proxy
  handler: (req, res) => {
    logger.warn('Auth rate limit exceeded', {
      ip: req.ip,
      url: req.url,
    });
    res.status(429).json({
      error: 'Muitas tentativas de login. Tente novamente em 15 minutos.',
    });
  },
});

// Rate limiter para criação de posts no blog
export const blogCreateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 10, // Máximo 10 posts por hora
  message: 'Limite de criação de posts atingido.',
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false }, // Desabilita validação de trust proxy
  handler: (req, res) => {
    logger.warn('Blog creation rate limit exceeded', {
      ip: req.ip,
      url: req.url,
    });
    res.status(429).json({
      error: 'Limite de criação de posts atingido. Tente novamente mais tarde.',
    });
  },
});

// Rate limiter leve para analytics
export const analyticsLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 60, // 60 eventos por minuto
  message: 'Muitos eventos de analytics enviados.',
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false }, // Desabilita validação de trust proxy
  handler: (req, res) => {
    logger.warn('Analytics rate limit exceeded', {
      ip: req.ip,
    });
    res.status(429).json({
      error: 'Muitos eventos de analytics enviados.',
    });
  },
});
