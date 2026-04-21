import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NodeHttpHandler } from '@smithy/node-http-handler';
import { Agent } from 'http';
import { Agent as HttpsAgent } from 'https';

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  requestHandler: new NodeHttpHandler({
    connectionTimeout: 10_000,
    socketTimeout: 300_000, // tempo de transferência
    httpAgent: new Agent({
      keepAlive: true,
      maxSockets: 50,
    }),
    httpsAgent: new HttpsAgent({
      keepAlive: true,
      maxSockets: 50,
    }),
  }),

  maxAttempts: 3,
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

/*
export async function uploadFileFromS3(file: Express.Multer.File) {
  try {
    const command = new Upload({
      client: s3,
      params: {
        Bucket: 'interacti-uploads',
        Key: `videos/${file.filename}`,
        Body: fs.createReadStream(file.path),
        ContentType: file.mimetype,
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
*/
