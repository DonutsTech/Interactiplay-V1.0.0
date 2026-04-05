import Joi from 'joi';
import { customJoi } from '../CustomJoi';

const forgetAuth = Joi.object().keys({
  EMAIL: customJoi.emailMix().required()
});

export default forgetAuth;
