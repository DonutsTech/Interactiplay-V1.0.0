import Joi from 'joi';

const forgetAuth = Joi.object().keys({
  EMAIL: Joi.string().email().required().messages({
      "string.empty": "O email é obrigatório.",
      "string.email": "Formato de email inválido.",
    })
});

export default forgetAuth;
