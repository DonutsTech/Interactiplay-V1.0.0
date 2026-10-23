declare module 'multer';
declare module 'multer-s3';
declare module 'nodemailer';
declare module 'fluent-ffmpeg';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    [key: string]: unknown;
    sub?: string;
    iat?: number;
    exp?: number;
  }

  const jwt: any;
  export default jwt;
}

declare global {
  namespace Express {
    namespace Multer {
      interface File {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        destination?: string;
        filename: string;
        path: string;
        buffer: Buffer;
        [key: string]: unknown;
      }
    }

    interface Request {
      file?: Multer.File;
      files?: Multer.File[] | { [fieldname: string]: Multer.File[] };
    }
  }
}

export {};
