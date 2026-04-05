import Joi from "joi";
import { customJoi } from "../CustomJoi";

const loginAuth = Joi.object().keys({
  EMAIL: customJoi.emailMix().required(),
  HASHED_PASSWORD: Joi.string().required(),
});

export default loginAuth;
