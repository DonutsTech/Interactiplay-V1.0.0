import Joi from "joi";

const resetAuth = Joi.object().keys({
  EMAIL: Joi.string().email().required().messages({
      "string.empty": "O email é obrigatório.",
      "string.email": "Formato de email inválido.",
    }),

  HASHED_PASSWORD: Joi.string().required().messages({
    "string.base": "A senha deve ser um texto.",
    "string.empty": "A senha é obrigatória.",
    "any.required": "A senha é obrigatória.",
  }),
});

export default resetAuth;
