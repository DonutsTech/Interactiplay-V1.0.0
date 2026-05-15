import Joi from 'joi';
const createTimeline = Joi.object({
    ATIVE: Joi.boolean().required().messages({
        'boolean.base': 'O status da timeline deve ser ativado ou desativado',
        'any.required': 'É necessário informar se a timeline está ativa',
    }),
    HEIGHT: Joi.number().integer().min(0).required().messages({
        'number.base': 'A altura deve ser um número.',
        'number.integer': 'A altura deve ser um número inteiro.',
        'number.min': 'A altura deve ser maior ou igual a 0.',
        'any.required': 'A altura é obrigatória.',
    }),
    COR: Joi.string().allow('').optional().max(7).messages({
        'string.base': 'A cor deve ser um texto.',
        'string.max': 'A cor deve ter no máximo 7 caracteres.',
    }),
});
export default createTimeline;
//# sourceMappingURL=create.js.map