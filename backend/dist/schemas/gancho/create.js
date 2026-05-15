import Joi from 'joi';
const createGancho = Joi.object({
    ATIVE: Joi.boolean().required().messages({
        'boolean.base': 'O status do gancho deve ser ativado ou desativado',
        'any.required': 'É necessário informar se o gancho está ativo',
    }),
    TITLE: Joi.string().allow('').optional().messages({
        'string.base': 'O título deve conter apenas texto',
        'string.empty': 'O título pode ficar vazio',
    }),
    TITLE_STYLE: Joi.string().allow('').optional().messages({
        'string.base': 'O estilo do título deve conter apenas texto',
        'string.empty': 'O estilo do título pode ficar vazio',
    }),
    SUBTITLE: Joi.string().allow('').optional().messages({
        'string.base': 'O subtítulo deve conter apenas texto',
        'string.empty': 'O subtítulo pode ficar vazio',
    }),
    SUBTITLE_ANIMATION: Joi.boolean().required().messages({
        'boolean.base': 'A animação do subtítulo deve ser ativada ou desativada',
        'any.required': 'É necessário informar se a animação do subtítulo está ativada',
    }),
    SUBTITLE_ANIMATION_TYPE: Joi.string().allow('').optional().messages({
        'string.base': 'O tipo de animação deve conter apenas texto',
        'string.empty': 'O tipo de animação pode ficar vazio',
    }),
    SUBTITLE_STYLE: Joi.string().allow('').optional().messages({
        'string.base': 'O estilo do subtítulo deve conter apenas texto',
        'string.empty': 'O estilo do subtítulo pode ficar vazio',
    }),
});
export default createGancho;
//# sourceMappingURL=create.js.map