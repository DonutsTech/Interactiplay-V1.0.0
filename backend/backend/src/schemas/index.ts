import type { ObjectSchema } from "joi";
import { forgetAuth, loginAuth, paymentAuth, registerAuth, resetAuth } from "./auth";
import { updateUser } from "./user";

const schemas: { [key: string]: ObjectSchema } = {
  'auth/forget': forgetAuth,
  'auth/login': loginAuth,
  'auth/register': registerAuth,
  'auth/reset': resetAuth,
  'auth/payment': paymentAuth,
  'user/update': updateUser,
};

export default schemas;
