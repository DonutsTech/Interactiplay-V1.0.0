import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { createReadStream } from 'fs';
import { getSecret } from './load';

export const s3 = new S3Client({
  region: process.env.AWS_REGION! || getSecret('AWS_REGION')!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID! || getSecret('AWS_ACCESS_KEY_ID')!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY! || getSecret('AWS_SECRET_ACCESS_KEY')!,
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
    const fileStream = createReadStream(file.path);

    const command = new Upload({
      client: s3,
      params: {
        Bucket: 'interacti-uploads',
        Key: `videos/${file.filename}`,
        Body: fileStream,
        ContentType: file.mimetype,
      },
      partSize: 5 * 1024 * 1024,
      queueSize: 3,
      leavePartsOnError: false,
    });

    const result = await command.done();

    return result.Location || '';
  } catch (error) {
    console.error('Error uploading file from S3:', error);
    throw error;
  }
}
