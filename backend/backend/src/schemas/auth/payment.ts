import Joi from "joi";

const paymentAuth = Joi.object().keys({
  ID_USER: Joi.string().uuid().required(),
  ID_PLAN: Joi.string().uuid().required(),
});

export default paymentAuth;
