import http from 'http';
import App from './config/app';
import { loadSecrets } from './config/load';
import { SocketConfig } from './config/socket';
import { initAdmin } from './utils/initAdmin';
import { initPlan } from './utils/initPlan';
//import { initADM } from './utils/initAdmin';

async function bootstrap() {
  try {
    await loadSecrets();

    const app = new App().express;
    const server = http.createServer(app);

    new SocketConfig(server);

    const PORT = process.env.PORT || 4000;

    server.listen(PORT, () => {
      initAdmin();
      initPlan();
      console.log(`Server running on ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Falha ao carregar secrets:', err);
    process.exit(1);
  }
}

bootstrap();
