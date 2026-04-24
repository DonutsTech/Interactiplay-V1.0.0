import type { ObjectSchema } from 'joi';
import { forgetAuth, loginAuth, paymentAuth, registerAuth, resetAuth } from './auth';
import { createAutoPlay } from './autoPlay';
import { createCampaign } from './compaign';
import { createExternalLink } from './externalLink';
import { createGancho } from './gancho';
import { createPixel } from './pixel';
import { createTimeline } from './timeline';
import { updateUser } from './user';
import { videoUpdate } from './video';

const schemas: { [key: string]: ObjectSchema } = {
  'auth/forget': forgetAuth,
  'auth/login': loginAuth,
  'auth/register': registerAuth,
  'auth/reset': resetAuth,
  'auth/payment': paymentAuth,
  'user/update': updateUser,
  'video/update': videoUpdate,
  'autoPlay/create': createAutoPlay,
  'externalLink/create': createExternalLink,
  'campaign/create': createCampaign,
  'gancho/create': createGancho,
  'pixel/create': createPixel,
  'timeline/create': createTimeline,
};

export default schemas;
