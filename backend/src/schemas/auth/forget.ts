import Joi from 'joi';

const forgetAuth = Joi.object().keys({
  EMAIL: Joi.string().email().messages({
      "string.base": "O email deve ser um texto.",
      "string.empty": "O email é obrigatório.",
      "string.email": "O email deve ser um formato válido.",
      "emailMx.invalid": "O domínio do email não possui registros válidos.",
      "emailMx.email": "O email deve ser um formato válido.",
      "any.required": "O email é obrigatório.",
    }),
});

export default forgetAuth;
