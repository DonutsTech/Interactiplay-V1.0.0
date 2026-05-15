import Joi from "joi";
const paymentAuth = Joi.object().keys({
    ID_USER: Joi.string().uuid().required().messages({
        "string.base": "O ID do usuário deve ser um texto.",
        "string.empty": "O ID do usuário é obrigatório.",
        "string.guid": "O ID do usuário deve ser um UUID válido.",
        "any.required": "O ID do usuário é obrigatório.",
    }),
    ID_PLAN: Joi.string().uuid().required().messages({
        "string.base": "O ID do plano deve ser um texto.",
        "string.empty": "O ID do plano é obrigatório.",
        "string.guid": "O ID do plano deve ser um UUID válido.",
        "any.required": "O ID do plano é obrigatório.",
    }),
});
export default paymentAuth;
//# sourceMappingURL=payment.js.map