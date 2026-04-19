import cors from 'cors';

const corsOpenConfig = cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
});

const corsRestrictedConfig = cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:4000',
    'https://seudominio.com',
    'https://app.seudominio.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

export { corsOpenConfig, corsRestrictedConfig };
