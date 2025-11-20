import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

// Middleware para processar erros de validação
export function handleValidationErrors(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.warn('Validation errors', {
      url: req.url,
      errors: errors.array(),
    });
    return res.status(400).json({
      error: 'Dados inválidos',
      details: errors.array(),
    });
  }
  next();
}

// Validações para formulário de contato
export const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Nome é obrigatório')
    .isLength({ min: 2, max: 100 }).withMessage('Nome deve ter entre 2 e 100 caracteres')
    .escape(),
  body('email')
    .trim()
    .notEmpty().withMessage('Email é obrigatório')
    .isEmail().withMessage('Email inválido')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty().withMessage('Telefone é obrigatório')
    .matches(/^[\d\s\-\(\)\+]+$/).withMessage('Telefone inválido'),
  body('service')
    .trim()
    .notEmpty().withMessage('Serviço é obrigatório')
    .escape(),
  body('city')
    .trim()
    .notEmpty().withMessage('Cidade é obrigatória')
    .isLength({ max: 100 }).withMessage('Cidade muito longa')
    .escape(),
  body('message')
    .trim()
    .notEmpty().withMessage('Mensagem é obrigatória')
    .isLength({ min: 10, max: 2000 }).withMessage('Mensagem deve ter entre 10 e 2000 caracteres')
    .escape(),
  handleValidationErrors,
];

// Validações para formulário de orçamento
export const validateQuote = [
  body('name')
    .trim()
    .notEmpty().withMessage('Nome é obrigatório')
    .isLength({ min: 2, max: 100 }).withMessage('Nome deve ter entre 2 e 100 caracteres')
    .escape(),
  body('email')
    .trim()
    .notEmpty().withMessage('Email é obrigatório')
    .isEmail().withMessage('Email inválido')
    .normalizeEmail(),
  body('phone')
    .trim()
    .notEmpty().withMessage('Telefone é obrigatório')
    .matches(/^[\d\s\-\(\)\+]+$/).withMessage('Telefone inválido'),
  body('service')
    .trim()
    .notEmpty().withMessage('Serviço é obrigatório')
    .escape(),
  body('city')
    .trim()
    .notEmpty().withMessage('Cidade é obrigatória')
    .isLength({ max: 100 }).withMessage('Cidade muito longa')
    .escape(),
  body('projectDescription')
    .trim()
    .notEmpty().withMessage('Descrição do projeto é obrigatória')
    .isLength({ min: 10, max: 2000 }).withMessage('Descrição deve ter entre 10 e 2000 caracteres')
    .escape(),
  body('buildingType')
    .optional()
    .trim()
    .escape(),
  body('buildingHeight')
    .optional()
    .trim()
    .escape(),
  body('urgency')
    .optional()
    .trim()
    .escape(),
  handleValidationErrors,
];

// Validações para criação de post no blog
export const validateBlogPost = [
  body('title')
    .trim()
    .notEmpty().withMessage('Título é obrigatório')
    .isLength({ min: 5, max: 200 }).withMessage('Título deve ter entre 5 e 200 caracteres')
    .escape(),
  body('slug')
    .trim()
    .notEmpty().withMessage('Slug é obrigatório')
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).withMessage('Slug deve conter apenas letras minúsculas, números e hífens'),
  body('excerpt')
    .trim()
    .notEmpty().withMessage('Resumo é obrigatório')
    .isLength({ min: 10, max: 500 }).withMessage('Resumo deve ter entre 10 e 500 caracteres')
    .escape(),
  body('content')
    .trim()
    .notEmpty().withMessage('Conteúdo é obrigatório')
    .isLength({ min: 50 }).withMessage('Conteúdo deve ter no mínimo 50 caracteres'),
  body('category')
    .trim()
    .notEmpty().withMessage('Categoria é obrigatória')
    .escape(),
  body('tags')
    .optional()
    .isArray().withMessage('Tags deve ser um array'),
  body('imageUrl')
    .optional()
    .trim()
    .isURL().withMessage('URL de imagem inválida'),
  body('author')
    .trim()
    .notEmpty().withMessage('Autor é obrigatório')
    .escape(),
  body('published')
    .optional()
    .isBoolean().withMessage('Published deve ser boolean'),
  handleValidationErrors,
];

// Validações para login
export const validateLogin = [
  body('username')
    .trim()
    .notEmpty().withMessage('Username é obrigatório')
    .isLength({ min: 3, max: 50 }).withMessage('Username deve ter entre 3 e 50 caracteres')
    .escape(),
  body('password')
    .trim()
    .notEmpty().withMessage('Senha é obrigatória')
    .isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
  handleValidationErrors,
];

// Validações para analytics
export const validateAnalyticsEvent = [
  body('event')
    .trim()
    .notEmpty().withMessage('Evento é obrigatório')
    .isIn(['page_view', 'button_click', 'form_submit', 'time_on_page'])
    .withMessage('Tipo de evento inválido'),
  body('page')
    .optional()
    .trim()
    .escape(),
  body('sessionId')
    .optional()
    .trim()
    .isUUID().withMessage('Session ID inválido'),
  handleValidationErrors,
];
