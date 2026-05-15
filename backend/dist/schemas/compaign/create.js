import Joi from 'joi';
export const createCampaign = Joi.object({
    NAME: Joi.string().min(2).max(60).allow('').optional().messages({
        'string.min': 'O nome da campanha deve ter pelo menos 2 caracteres',
        'string.max': 'O nome da campanha não pode ter mais de 60 caracteres',
        'string.base': 'O nome da campanha deve ser um texto',
    }),
    CAMPAIGN_VIDEOS: Joi.array()
        .items(Joi.object({
        VIDEO_ID: Joi.string().required().messages({
            'any.required': 'O ID do vídeo é obrigatório',
            'string.base': 'O ID do vídeo deve ser um texto',
            'string.empty': 'O ID do vídeo não pode estar vazio',
        }),
        ORDER: Joi.number().min(1).required().messages({
            'any.required': 'A ordem do vídeo é obrigatória',
            'number.base': 'A ordem deve ser um número',
            'number.min': 'A ordem deve ser pelo menos 1',
        }),
        CTA: Joi.boolean().required().messages({
            'any.required': 'O campo CTA é obrigatório',
            'boolean.base': 'CTA deve ser verdadeiro ou falso',
        }),
        CTA_START: Joi.number().min(0).optional().messages({
            'number.base': 'O tempo de início do CTA deve ser um número',
            'number.min': 'O tempo de início do CTA não pode ser negativo',
        }),
        CTA_TEXT: Joi.string().allow('').optional().messages({
            'string.base': 'O texto do CTA deve ser um texto',
        }),
        CTA_URL: Joi.string().uri().allow('').optional().messages({
            'string.base': 'A URL do CTA deve ser um texto',
            'string.uri': 'A URL do CTA deve ser uma URL válida',
        }),
        CTA_STYLE: Joi.string().allow('').optional().messages({
            'string.base': 'O estilo do CTA deve ser um texto',
        }),
        X_POSITION: Joi.number().required().messages({
            'any.required': 'A posição X é obrigatória',
            'number.base': 'A posição X deve ser um número',
        }),
        Y_POSITION: Joi.number().required().messages({
            'any.required': 'A posição Y é obrigatória',
            'number.base': 'A posição Y deve ser um número',
        }),
        BONDS: Joi.array()
            .items(Joi.object({
            VIDEO_ID: Joi.string().required().messages({
                'any.required': 'O ID do vídeo do bond é obrigatório',
                'string.base': 'O ID do vídeo do bond deve ser um texto',
            }),
            BOND: Joi.object({
                VIDEO_ID: Joi.string().required().messages({
                    'any.required': 'O ID do vídeo de destino do bond é obrigatório',
                    'string.base': 'O ID do vídeo de destino deve ser um texto',
                }),
                BUTTON: Joi.boolean().required().messages({
                    'any.required': 'O campo botão é obrigatório',
                    'boolean.base': 'Botão deve ser verdadeiro ou falso',
                }),
                BUTTON_TEXT: Joi.string().max(200).allow('').optional().messages({
                    'string.base': 'O texto do botão deve ser um texto',
                    'string.max': 'O texto do botão não pode ter mais de 200 caracteres',
                }),
                BUTTON_STYLE: Joi.string().allow('').optional().messages({
                    'string.base': 'O estilo do botão deve ser um texto',
                }),
                BUTTON_START: Joi.number().min(0).optional().messages({
                    'number.base': 'O tempo de início do botão deve ser um número',
                    'number.min': 'O tempo de início do botão não pode ser negativo',
                }),
                X_POSITION: Joi.number().required().messages({
                    'any.required': 'A posição X do botão é obrigatória',
                    'number.base': 'A posição X do botão deve ser um número',
                }),
                Y_POSITION: Joi.number().required().messages({
                    'any.required': 'A posição Y do botão é obrigatória',
                    'number.base': 'A posição Y do botão deve ser um número',
                }),
            }).optional(),
        }))
            .optional()
            .messages({
            'array.base': 'Bonds deve ser uma lista',
        }),
    }).messages({
        'object.base': 'Cada vídeo da campanha deve ser um objeto válido',
    }))
        .messages({
        'array.base': 'CAMPAIGN_VIDEOS deve ser uma lista de vídeos',
    }),
}).messages({
    'object.base': 'Os dados da campanha devem ser um objeto válido',
});
export default createCampaign;
//# sourceMappingURL=create.js.map