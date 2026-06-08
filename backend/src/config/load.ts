import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

const client = new SecretsManagerClient({ region: 'us-east-1' });

async function load() {
  const res = await client.send(
    new GetSecretValueCommand({
      SecretId: 'interactplay-N4pCIe',
    }),
  );

  const secret = JSON.parse(res.SecretString || '{}');

  Object.entries(secret).forEach(([key, value]) => {
    process.env[key] = String(value);
  });

  console.log('✅ Secrets carregados e cacheado');
}

export default load;
