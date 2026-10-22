import { Router } from 'express';
import type { IRouter } from '../@types/interface/router';
import AuthRouter from './auth';
import AutoPlayRouter from './autoPlay';
import { CampaignApiRouter, CampaignPublicRouter } from './campaign';
import ExternalLinkRouter from './externalLink';
import GanchoRouter from './gancho';
import HistoryPlaysRouter from './historyPlays';
import MailRouter from './mail';
import MetaPixelRouter from './metaPixel';
import PixelRouter from './pixel';
import PlanRouter from './plan';
import { TestABApiRouter, TestABPublicRouter } from './testAB';
import ThumbRouter from './thumb';
import TimeLineRouter from './timeline';
import UserRouter from './user';
import WebhookRouter from './webhook';

const applyRouters = (router: Router, routers: IRouter[]): void => {
  routers.forEach(route => route.create(router));
};

export const applyApiRouters = (router: Router): void => {
  const routers: IRouter[] = [
    PlanRouter,
    AuthRouter,
    MetaPixelRouter,
    HistoryPlaysRouter,
    UserRouter,
    CampaignApiRouter,
    AutoPlayRouter,
    ExternalLinkRouter,
    GanchoRouter,
    MailRouter,
    PixelRouter,
    ThumbRouter,
    TimeLineRouter,
    TestABApiRouter,
  ];
  applyRouters(router, routers);
};

export const applyWebHookRouters = (router: Router): void => {
  const routers: IRouter[] = [WebhookRouter];
  applyRouters(router, routers);
};

export const applyPublicRouters = (router: Router): void => {
  const routers: IRouter[] = [CampaignPublicRouter, TestABPublicRouter];
  applyRouters(router, routers);
};
