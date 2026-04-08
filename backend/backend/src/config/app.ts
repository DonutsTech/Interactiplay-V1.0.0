import express from 'express';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
import { setErrors } from '../middleware';
import { applyApiRouters, applyPublicRouters, applyWebHookRouters } from '../routers';
import { corsOpenConfig, corsRestrictedConfig } from './cors';

export default class App {
  public express: express.Express;

  constructor() {
    this.express = express();
    this.webhook();
    this.midleware();
    this.routes();
    this.errorHandler();
    this.notFound();
  }

  private midleware(): void {
    this.express.use(express.json({ limit: '10mb' }));

    this.express.use('/api', corsRestrictedConfig);
    this.express.use('/data',  corsRestrictedConfig);

    this.express.use('/public', corsOpenConfig);
    this.express.use('/widget', corsOpenConfig, express.static(path.resolve(__dirname, '../../widget')));
  }

  private routes(): void {
    const publicRouter = express.Router();
    const privateRouter = express.Router();

    applyApiRouters(privateRouter);
    applyPublicRouters(publicRouter);

    this.express.use('/public', publicRouter);
    this.express.use('/api', privateRouter);
  }

  private errorHandler(): void {
    this.express.use(setErrors);
  }

  private webhook(): void {
    const router = express.Router();
    applyWebHookRouters(router);
    this.express.use('/data', router);
  }

  private notFound(): void {
    this.express.use((_req, res) => {
      res.status(StatusCodes.NOT_FOUND).json({
        STATUS: StatusCodes.NOT_FOUND,
        MESSAGE: "Rota não encontrada",
      });
    });
  }
}
