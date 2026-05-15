import Joi from "joi";
const loginAuth = Joi.object().keys({
    EMAIL: Joi.string().email().messages({
        "string.base": "O email deve ser um texto.",
        "string.empty": "O email é obrigatório.",
        "string.email": "O email deve ser um formato válido.",
        "any.required": "O email é obrigatório.",
    }),
    HASHED_PASSWORD: Joi.string().required(),
});
export default loginAuth;
//# sourceMappingURL=login.js.map