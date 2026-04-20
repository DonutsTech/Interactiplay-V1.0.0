import Joi from 'joi';

export const videoUpdate = Joi.object({
  NAME: Joi.string().required().messages({
    'any.required': 'O nome do vídeo é obrigatório',
    'string.base': 'O nome do vídeo deve ser um texto válido',
    'string.empty': 'O nome do vídeo não pode estar vazio',
  }),
});

export default videoUpdate;
