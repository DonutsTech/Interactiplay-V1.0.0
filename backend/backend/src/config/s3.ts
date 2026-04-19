import { DeleteObjectCommand, HeadObjectCommand, S3Client } from '@aws-sdk/client-s3';

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
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

