import cors from 'cors';

const corsOpenConfig = cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
});

const corsRestrictedConfig = cors({
  origin: ['https://front-dev.d1jimwec3k4m0w.amplifyapp.com/', '*'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

export { corsOpenConfig, corsRestrictedConfig };
