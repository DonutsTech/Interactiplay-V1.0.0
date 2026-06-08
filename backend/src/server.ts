import dotenv from 'dotenv';
import http from 'http';
import path from 'path';

import App from './config/app';
import { loadSecrets } from './config/load-secrets';
import { SocketConfig } from './config/socket';
import { initAdmin } from './utils/initAdmin';
import { initPlan } from './utils/initPlan';

async function bootstrap() {
  dotenv.config({
    path: path.resolve('.env'),
  });

  if (process.env.NODE_ENV === 'production') {
    await loadSecrets();
  }

  const PORT = process.env.PORT || 4000;

  const app = new App().express;

  const server = http.createServer(app);

  new SocketConfig(server);

  server.listen(PORT, () => {
    initAdmin();
    initPlan();
    console.log(`Server is running on port ${PORT}`);
  });

  server.on('error', error => {
    console.error('Erro ao iniciar servidor:', error);
    process.exit(1);
  });
}

bootstrap().catch(error => {
  console.error('Erro ao carregar secrets:', error);
  process.exit(1);
});
