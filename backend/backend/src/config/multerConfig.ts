import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import { CustomError } from '../error';
import { s3 } from './s3';

export const MAX_SIZE = 2147483648;

const s3Storage = multerS3({
  s3: s3,
  bucket: 'interacti-uploads',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: (req, file, cb) => {
    const now = new Date();
    const dateString = now.toISOString().replace(/[-:T]/g, '').slice(0, 15);
    const time = now.getTime();

    let folder = '';
    let extension = '';

    if (file.mimetype.startsWith('image/')) {
      folder = 'images/';
      const mimeToExt: Record<string, string> = {
        'image/jpeg': '.jpg',
        'image/png': '.png',
        'image/heic': '.heic',
        'image/heif': '.heif',
        'image/webp': '.webp',
      };
      extension = mimeToExt[file.mimetype] || '.jpg';
    } else if (file.mimetype.startsWith('video/')) {
      folder = 'videos/';
      extension = '.mp4';
    }

    const key = `${folder}${dateString}${time}${extension}`;
    cb(null, key);
  },
});

const storage = multer.diskStorage({});

const allImageTypes = ['image/jpeg', 'image/png', 'image/heic', 'image/heif', 'image/webp'];
const allVideoTypes = ['video/mp4'];

export const imageUpload = multer({
  storage: s3Storage,
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (allImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new CustomError('Somente imagens JPG, PNG, HEIC ou WebP são permitidas'));
    }
  },
});

export const videoUpload = multer({
  storage: storage,
  limits: { fileSize: MAX_SIZE, files: 1 },
  fileFilter: (req, file, cb) => {
    if (file.size > MAX_SIZE) {
      cb(new CustomError(`O tamanho do arquivo excede o limite de ${file.size} bytes`));
    }

    if (allVideoTypes.includes(file.mimetype)) {
      const now = new Date();
      const dateString = now.toISOString().replace(/[-:T]/g, '').slice(0, 15);
      const time = now.getTime();
      const extension = path.extname(file.originalname);
      const filename = `${dateString}${time}${extension}`;

      file.filename = filename;

      cb(null, true);
    } else {
      cb(new CustomError('Somente vídeos MP4 são permitidos'));
    }
  },
});
