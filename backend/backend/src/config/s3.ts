import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import fs from 'fs';

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  requestHandler: {
    requestTimeout: 300000,
    connectionTimeout: 60000,
  },
});

function extractKeyFromUrl(url: string): string {
  const urlObj = new URL(url);
  return urlObj.pathname.substring(1);
}

export async function deleteFileFromS3(key: string) {
  const fileKey = extractKeyFromUrl(key);

  const command = new DeleteObjectCommand({
    Bucket: 'interacti-uploads',
    Key: fileKey,
  });

  await s3.send(command);
}

export async function uploadFileFromS3(file: Express.Multer.File) {
  try {
    const command = new Upload({
      client: s3,
      params: {
        Bucket: 'interacti-uploads',
        Key: `videos/${file.filename}`,
        Body: fs.createReadStream(file.path),
        ContentType: file.mimetype,
        ACL: 'public-read',
      },
    });

    const result = await command.done();

    return result.Location || '';
  } catch (error) {
    console.error('Error uploading file from S3:', error);
    throw error;
  } finally {
    fs.unlinkSync(file.path);
  }
}
