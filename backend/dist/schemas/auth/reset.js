import Joi from "joi";
const resetAuth = Joi.object().keys({
    CODE: Joi.string().required().messages({
        "string.base": "O código deve ser um texto.",
        "string.empty": "O código é obrigatório.",
        "any.required": "O código é obrigatório.",
    }),
    HASHED_PASSWORD: Joi.string().required().messages({
        "string.base": "A senha deve ser um texto.",
        "string.empty": "A senha é obrigatória.",
        "any.required": "A senha é obrigatória.",
    }),
});
export default resetAuth;
//# sourceMappingURL=reset.js.map