import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

const client = new SecretsManagerClient({
  region: 'us-east-1',
});

let cache: Record<string, string> = {};

export async function loadSecrets() {
  const data = await client.send(
    new GetSecretValueCommand({
      SecretId: 'interactplay',
    }),
  );

  cache = JSON.parse(data.SecretString || '{}');

  console.log('Secrets carregados');
}

export function getSecret(key: string) {
  return cache[key] || '';
}
