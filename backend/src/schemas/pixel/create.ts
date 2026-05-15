import Joi from 'joi';

const createPixel = Joi.object({
  ATIVE: Joi.boolean().required().messages({
    'boolean.base': 'O status do pixel deve ser ativado ou desativado',
    'any.required': 'É necessário informar se o pixel está ativo',
  }),

  NAME_META: Joi.string().allow('').optional().max(255).messages({
    'string.base': 'O nome do meta pixel deve ser um texto.',
    'string.max': 'O nome do meta pixel deve ter no máximo 255 caracteres.',
  }),

  ID_META: Joi.string().allow('').optional().max(255).messages({
    'string.base': 'O ID do meta pixel deve ser um texto.',
    'string.max': 'O ID do meta pixel deve ter no máximo 100 caracteres.',
  }),
});

export default createPixel;
