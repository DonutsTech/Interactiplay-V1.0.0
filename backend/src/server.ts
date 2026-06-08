import dotenv from 'dotenv';
import http from 'http';
import path from 'path';
import App from './config/app';
import { SocketConfig } from './config/socket';
import { initAdmin } from './utils/initAdmin';
import { initPlan } from './utils/initPlan';
//import { initADM } from './utils/initAdmin';
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

  console.log('Secrets carregados com sucesso');
}

load().catch(error => {
  console.error('Erro ao carregar secrets:', error);
  process.exit(1);
});

dotenv.config({
  path: path.resolve('.env'),
});

const PORT = process.env.PORT || 4000;

const app = new App().express;

const server = http.createServer(app);

const socketConfig = new SocketConfig(server);

server.listen(PORT, () => {
  initAdmin();
  initPlan();
  console.log(`Server is running on port ${PORT}`);
});

server.on('error', error => {
  console.error('Erro ao iniciar servidor:', error);
  process.exit(1);
});
