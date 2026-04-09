import Joi from "joi";
import { emailJoi } from "../customJoi";

const loginAuth = Joi.object().keys({
  EMAIL: emailJoi.emailMx().required().messages({
    'emailMx.invalid': 'Email inválido',
    'emailMx.noMx': 'Domínio do email não existe',
  }),
  HASHED_PASSWORD: Joi.string().required(),
});

export default loginAuth;
