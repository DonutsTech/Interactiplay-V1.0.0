import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

export async function loadSecrets() {
  const secret_name = 'interactplay';

  const client = new SecretsManagerClient({
    region: 'us-east-1',
  });

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: 'AWSCURRENT',
    }),
  );

  const secrets = JSON.parse(response.SecretString || '{}');

  Object.entries(secrets).forEach(([key, value]) => {
    process.env[key] = String(value);
  });
}
