import Joi from 'joi';
const createAutoPlay = Joi.object({
    ATIVE: Joi.boolean().required().messages({
        'any.required': 'É necessário informar se o autoplay está ativo',
        'boolean.base': 'O status do autoplay deve ser true (ativo) ou false (inativo)',
    }),
    SECOND: Joi.number().min(0).required().messages({
        'any.required': 'É necessário informar o tempo em segundos para o autoplay',
        'number.base': 'O tempo deve ser um número válido',
        'number.min': 'O tempo não pode ser negativo (mínimo 0 segundos)',
    }),
});
export default createAutoPlay;
//# sourceMappingURL=create.js.map