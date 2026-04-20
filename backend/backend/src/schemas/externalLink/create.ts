import Joi from 'joi';

const createExternalLink = Joi.object({
  TEXT: Joi.string().max(104).allow('').optional().messages({
    'string.base': 'O texto deve ser uma string',
    'string.max': 'O texto não pode ter mais de 104 caracteres',
  }),

  STYLE_TEXT: Joi.string().allow('').optional().messages({
    'string.base': 'O estilo do texto deve ser uma string',
  }),

  BUTTON_TEXT: Joi.string().allow('').optional().messages({
    'string.base': 'O texto do botão deve ser uma string',
  }),

  BUTTON_STYLE: Joi.string().allow('').optional().messages({
    'string.base': 'O estilo do botão deve ser uma string',
  }),

  LINK_URL: Joi.string().uri().allow('').optional().messages({
    'string.base': 'A URL do link deve ser uma string',
    'string.uri': 'A URL do link deve ser uma URL válida',
  }),
}).messages({
  'object.base': 'Os dados do link externo devem ser um objeto válido',
});

export default createExternalLink;
