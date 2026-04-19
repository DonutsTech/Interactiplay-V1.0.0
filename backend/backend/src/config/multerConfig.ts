import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3 } from './s3';
import { CustomError } from '../error';

const s3Storage = multerS3({
  s3: s3,
  bucket: 'interacti-uploads',
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
        'image/yebp': '.yebp',
      };
      extension = mimeToExt[file.mimetype] || '.jpg';
    } else if (file.mimetype.startsWith('video/')) {
      folder = 'videos/';
      extension = '.mp4';
    }

    const key = `${folder}${dateString}${time}${extension}`;
    cb(null, key);
  },
  contentType: multerS3.AUTO_CONTENT_TYPE,
});

const allImageTypes = ['image/jpeg', 'image/png', 'image/heic', 'image/heif', 'image/yebp'];
const allVideoTypes = ['video/mp4'];

export const imageUpload = multer({
  storage: s3Storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (allImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new CustomError('Somente imagens JPG, PNG ou HEIC são permitidas'));
    }
  },
});

export const videoUpload = multer({
  storage: s3Storage,
  limits: { fileSize: 2 * 1024 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (allVideoTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new CustomError('Somente vídeos MP4 são permitidos'));
    }
  },
});
