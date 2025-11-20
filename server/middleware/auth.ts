import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../logger';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';
const JWT_EXPIRES_IN = '7d';

export interface AuthRequest extends Request {
  user?: {
    id: number;
    username: string;
  };
}

// Gerar token JWT
export function generateToken(user: { id: number; username: string }): string {
  return jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

// Verificar token JWT
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Middleware de autenticação
export function authenticateJWT(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    logger.warn('Authentication attempt without token', {
      ip: req.ip,
      url: req.url
    });
    return res.status(401).json({
      error: 'Token de autenticação não fornecido'
    });
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.substring(7)
    : authHeader;

  const decoded = verifyToken(token);

  if (!decoded) {
    logger.warn('Authentication failed - invalid token', {
      ip: req.ip,
      url: req.url
    });
    return res.status(403).json({
      error: 'Token inválido ou expirado'
    });
  }

  req.user = decoded;
  logger.info('User authenticated', {
    userId: decoded.id,
    username: decoded.username
  });
  next();
}

// Middleware opcional de autenticação (não retorna erro se não houver token)
export function optionalAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.substring(7)
      : authHeader;

    const decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
    }
  }

  next();
}
