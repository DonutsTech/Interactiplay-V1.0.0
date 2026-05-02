import Joi from 'joi';

export const createTestAB = Joi.object({
  campaignIdA: Joi.string().uuid().required().messages({
    'string.base': 'A campainha A deve ser uma string',
    'string.uri': 'A campainha A deve ser uma URL válida',
  }),
  campaignIdB: Joi.string().uuid().required().messages({
    'string.base': 'A campainha B deve ser uma string',
    'string.uri': 'A campainha B deve ser uma URL válida',
  }),
});

export default createTestAB;
