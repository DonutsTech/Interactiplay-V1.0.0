import dotenv from 'dotenv';
import http from 'http';
import path from 'path';
import App from './config/app';
import load from './config/load';
import { SocketConfig } from './config/socket';
import { initAdmin } from './utils/initAdmin';
import { initPlan } from './utils/initPlan';
//import { initADM } from './utils/initAdmin';
dotenv.config({ path: path.resolve('.env') });

async function main() {
  try {
    await load(); // AWS secrets

    const PORT = process.env.PORT || 4000;

    const app = new App().express;
    const server = http.createServer(app);

    new SocketConfig(server);

    server.listen(PORT, () => {
      initAdmin();
      initPlan();
      console.log(`Server running on ${PORT}`);
    });

    server.on('error', err => {
      console.error('Server error:', err);
      process.exit(1);
    });
  } catch (error) {
    console.error('FALHA CRÍTICA AO CARREGAR SECRETS:', error);
    process.exit(1); // 🔥 evita subir app quebrado
  }
}

main();
