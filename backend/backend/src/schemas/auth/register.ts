import Joi from "joi";

const registerAuth = Joi.object().keys({
  EMAIL: Joi.string().email().required().messages({
      "string.empty": "O email é obrigatório.",
      "string.email": "Formato de email inválido.",
    }),
  HASHED_PASSWORD: Joi.string().min(6).required().messages({
    "string.base": "A senha deve ser um texto.",
    "string.empty": "A senha é obrigatória.",
    "string.min": "A senha inválida.",
    "any.required": "A senha é obrigatória.",
  }),

  NAME: Joi.string().min(2).max(255).required().messages({
    "string.base": "O nome deve ser um texto.",
    "string.empty": "O nome é obrigatório.",
    "string.min": "O nome deve ter pelo menos 2 caracteres.",
    "string.max": "O nome deve ter no máximo 255 caracteres.",
    "any.required": "O nome é obrigatório.",
  }),

  PHONE: Joi.string().min(10).max(15).required().messages({
    "string.base": "O telefone deve ser um texto.",
    "string.empty": "O telefone é obrigatório.",
    "string.min": "O telefone deve ter no mínimo 10 dígitos.",
    "string.max": "O telefone deve ter no máximo 15 dígitos.",
    "any.required": "O telefone é obrigatório.",
  }),
});

export default registerAuth;
