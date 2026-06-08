import Joi from "joi";

 const createMail = Joi.object({
  EMAIL: Joi.string().email().messages({
      "string.base": "O email deve ser um texto.",
      "string.empty": "O email é obrigatório.",
      "string.email": "O email deve ser um formato válido.",
      "any.required": "O email é obrigatório.",
    }),

  NAME: Joi.string().required().messages({
    'string.base': 'O nome deve ser um texto',
    'string.empty': 'O nome não pode ficar vazio',
    'any.required': 'O nome é obrigatório',
  }),

  PHONE: Joi.string().required().messages({
    'string.base': 'O telefone deve ser um texto',
    'string.empty': 'O telefone não pode ficar vazio',
    'any.required': 'O telefone é obrigatório',
  }),

  MESSAGE: Joi.string().required().messages({
    'string.base': 'A mensagem deve ser um texto',
    'string.empty': 'A mensagem não pode ficar vazia',
    'any.required': 'A mensagem é obrigatória',
  }),
});

export default createMail;
