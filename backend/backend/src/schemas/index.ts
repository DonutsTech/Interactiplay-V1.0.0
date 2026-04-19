import type { ObjectSchema } from 'joi';
import { forgetAuth, loginAuth, paymentAuth, registerAuth, resetAuth } from './auth';
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
};

export default schemas;
