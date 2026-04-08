import Joi from "joi";

const updateUser = Joi.object({
  NAME: Joi.string().min(2).max(255).messages({
    "string.base": "O nome deve ser um texto.",
    "string.empty": "O nome não pode estar vazio.",
    "string.min": "O nome deve ter pelo menos 2 caracteres.",
    "string.max": "O nome deve ter no máximo 255 caracteres.",
  }),

  PHONE: Joi.string().min(10).max(15).messages({
    "string.base": "O telefone deve ser um texto.",
    "string.empty": "O telefone não pode estar vazio.",
    "string.min": "O telefone deve ter no mínimo 10 dígitos.",
    "string.max": "O telefone deve ter no máximo 15 dígitos.",
  }),
});
export default updateUser;
