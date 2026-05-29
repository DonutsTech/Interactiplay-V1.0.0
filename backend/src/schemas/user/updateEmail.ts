import Joi from "joi";

const updateEmail = Joi.object({
  EMAILOLD: Joi.string().email().required(),
  EMAILNEW: Joi.string().email().required(),
});

export default updateEmail;
