import multer from 'multer';
import path from 'path';
import fs from 'fs';
import logger from '../logger';

// Criar diretório de uploads se não existir
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  logger.info('Uploads directory created:', uploadsDir);
}

// Configuração do storage do Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename: timestamp-randomstring-originalname
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const ext = path.extname(file.originalname);
    const basename = path.basename(file.originalname, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 50);

    cb(null, `${basename}-${uniqueSuffix}${ext}`);
  },
});

// Filtro de tipos de arquivo permitidos
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true);
  } else {
    logger.warn('Upload rejected - invalid file type', {
      filename: file.originalname,
      mimetype: file.mimetype,
    });
    cb(new Error('Apenas imagens são permitidas (jpeg, jpg, png, gif, webp)'));
  }
};

// Configuração do multer
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max
  },
});

// Middleware para validar se arquivo foi enviado
export function validateFileUpload(req: any, res: any, next: any) {
  if (!req.file) {
    logger.warn('Upload attempt without file');
    return res.status(400).json({
      error: 'Nenhum arquivo foi enviado',
    });
  }
  next();
}
