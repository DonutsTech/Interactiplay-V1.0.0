import express from 'express';
import { StatusCodes } from 'http-status-codes';
import path from 'path';
import { setErrors } from '../middleware';
import { applyApiRouters, applyPublicRouters, applyWebHookRouters } from '../routers';
import VideoRouter from '../routers/video';
import { corsOpenConfig, corsRestrictedConfig } from './cors';
export default class App {
    express;
    constructor() {
        this.express = express();
        this.webhook();
        this.midleware();
        this.routes();
        this.errorHandler();
        this.notFound();
    }
    midleware() {
        this.express.use(express.json({ limit: '50mb' }));
        this.express.use(express.urlencoded({ limit: '50mb', extended: true }));
        this.express.use('/api', corsRestrictedConfig);
        this.express.use('/data', corsRestrictedConfig);
        this.express.use('/public', corsOpenConfig);
        this.express.use('/widget', corsOpenConfig, express.static(path.resolve(process.cwd(), 'widget')));
    }
    routes() {
        const publicRouter = express.Router();
        const privateRouter = express.Router();
        VideoRouter.create(privateRouter);
        applyApiRouters(privateRouter);
        applyPublicRouters(publicRouter);
        this.express.use('/public', publicRouter);
        this.express.use('/api', privateRouter);
    }
    errorHandler() {
        this.express.use(setErrors);
    }
    webhook() {
        const router = express.Router();
        applyWebHookRouters(router);
        this.express.use('/data', router);
    }
    notFound() {
        this.express.use((_req, res) => {
            res.status(StatusCodes.NOT_FOUND).json({
                STATUS: StatusCodes.NOT_FOUND,
                MESSAGE: 'Rota não encontrada',
            });
        });
    }
}
//# sourceMappingURL=app.js.map