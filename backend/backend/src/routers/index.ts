import { Router } from 'express';
import type { IRouter } from '../@types/interface/router';
import AuthRouter from './auth';
import { CampaignApiRouter } from './campaign';
import HistoryPlaysRouter from './historyPlays';
import PlanRouter from './plan';
import { VideoRouter } from './video';
import WebhookRouter from './webhook';

const applyRouters = (router: Router, routers: IRouter[]): void => {
  routers.forEach(route => route.create(router));
};

export const applyApiRouters = (router: Router): void => {
  const routers: IRouter[] = [
    PlanRouter,
    AuthRouter,
    HistoryPlaysRouter,
    // CampaignApiRouter,
    // VideoRouter,
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
