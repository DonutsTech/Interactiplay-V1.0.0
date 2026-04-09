import Joi from 'joi';
import { emailJoi } from '../customJoi';

const forgetAuth = Joi.object().keys({
  EMAIL: emailJoi.emailMx().required().messages({
    'emailMx.invalid': 'Email inválido',
    'emailMx.noMx': 'Domínio do email não existe',
  }),
});

export default forgetAuth;
