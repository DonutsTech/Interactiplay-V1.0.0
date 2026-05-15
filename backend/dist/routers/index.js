import { Router } from 'express';
import AuthRouter from './auth';
import AutoPlayRouter from './autoPlay';
import { CampaignApiRouter, CampaignPublicRouter } from './campaign';
import ExternalLinkRouter from './externalLink';
import GanchoRouter from './gancho';
import HistoryPlaysRouter from './historyPlays';
import PixelRouter from './pixel';
import PlanRouter from './plan';
import ThumbRouter from './thumb';
import TimeLineRouter from './timeline';
import UserRouter from './user';
import WebhookRouter from './webhook';
import { TestABApiRouter, TestABPublicRouter } from './testAB';
const applyRouters = (router, routers) => {
    routers.forEach(route => route.create(router));
};
export const applyApiRouters = (router) => {
    const routers = [
        PlanRouter,
        AuthRouter,
        HistoryPlaysRouter,
        UserRouter,
        CampaignApiRouter,
        AutoPlayRouter,
        ExternalLinkRouter,
        GanchoRouter,
        PixelRouter,
        ThumbRouter,
        TimeLineRouter,
        TestABApiRouter,
    ];
    applyRouters(router, routers);
};
export const applyWebHookRouters = (router) => {
    const routers = [WebhookRouter];
    applyRouters(router, routers);
};
export const applyPublicRouters = (router) => {
    const routers = [CampaignPublicRouter, TestABPublicRouter];
    applyRouters(router, routers);
};
//# sourceMappingURL=index.js.map