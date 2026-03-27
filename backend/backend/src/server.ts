import dotenv from 'dotenv';
import http from 'http';
import path from 'path';
import App from './config/app';
//import { initADM } from './utils/initAdmin';

dotenv.config({
  path: path.resolve('.env'),
});

const PORT = process.env.PORT || 4000;

const app = new App().express;

const server = http.createServer(app);

server.listen(PORT, () => {
  //initADM();
  console.log(`Server is running on port ${PORT}`);
});

server.on('error', (error) => {
  console.error('Erro ao iniciar servidor:', error);
  process.exit(1);
});
