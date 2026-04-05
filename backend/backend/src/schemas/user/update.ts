import Joi from "joi";

const updateUser = Joi.object().keys({
  NAME: Joi.string().min(2).max(255),
  PHONE: Joi.string().min(10).max(15),
});

export default updateUser;
