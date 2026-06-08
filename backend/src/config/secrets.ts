import axios from 'axios';
import fs from 'fs';

export async function getAWSCredential() {
  const token = fs.readFileSync('/var/run/awssmatoken', 'utf8').trim();

  const { data } = await axios.get(
    'http://localhost:2773/secretsmanager/get?secretId=interactplay',
    {
      headers: {
        'X-Aws-Parameters-Secrets-Token': token,
      },
    },
  );

  const secrets = JSON.parse(data.SecretString);

  Object.entries(secrets).forEach(([key, value]) => {
    process.env[key] = String(value);
  });

  return secrets;
}
