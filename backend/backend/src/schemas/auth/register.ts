import Joi from "joi";
import { customJoi } from "../CustomJoi";

const registerAuth = Joi.object().keys({
  EMAIL: customJoi.emailMix().required(),
  HASHED_PASSWORD: Joi.string().required(),
  NAME: Joi.string().min(2).max(255).required(),
  PHONE: Joi.string().min(10).max(15).required(),
});

export default registerAuth;
