import Joi from "joi";

const loginAuth = Joi.object().keys({
  EMAIL: Joi.string().email().required().messages({
      "string.empty": "O email é obrigatório.",
      "string.email": "Formato de email inválido.",
    }),
  HASHED_PASSWORD: Joi.string().required(),
});

export default loginAuth;
