import { Router } from 'express';
import type { IRouter } from '../@types/interface/router';
import AuthRouter from './auth';
import AutoPlayRouter from './autoPlay';
import { CampaignApiRouter } from './campaign';
import ExternalLinkRouter from './externalLink';
import HistoryPlaysRouter from './historyPlays';
import PlanRouter from './plan';
import UserRouter from './user';
import WebhookRouter from './webhook';

const applyRouters = (router: Router, routers: IRouter[]): void => {
  routers.forEach(route => route.create(router));
};

export const applyApiRouters = (router: Router): void => {
  const routers: IRouter[] = [
    PlanRouter,
    AuthRouter,
    HistoryPlaysRouter,
    UserRouter,
    CampaignApiRouter,
    AutoPlayRouter,
    ExternalLinkRouter,
  ];
  applyRouters(router, routers);
};

export const applyWebHookRouters = (router: Router): void => {
  const routers: IRouter[] = [WebhookRouter];
  applyRouters(router, routers);
};

export const applyPublicRouters = (router: Router): void => {
  const routers: IRouter[] = [];
  applyRouters(router, routers);
};
