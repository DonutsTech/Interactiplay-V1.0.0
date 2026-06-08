import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

const secret_name = 'interactplay';

const client = new SecretsManagerClient({
  region: 'us-east-1',
});

export const getAWSCredential = async () => {
  const data = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
    }),
  );

  if ('SecretString' in data) {
    const secret = JSON.parse(data.SecretString || '{}');

    for (const envKey of Object.keys(secret)) {
      process.env[envKey] = secret[envKey];
    }
  }
};
