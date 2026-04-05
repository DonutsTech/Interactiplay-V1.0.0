import { resolveMx } from "dns/promises";
import Joi from "joi";

export const customJoi = Joi.extend((joi) => ({
  type: "emailMix",
  base: joi.string().email().required(),
  messages: {
    "emailMix.base": "O email deve ser um texto.",
    "emailMix.empty": "O email é obrigatório.",
    "emailMix.email": "Formato de email inválido.",
    "emailMix.invalid": "Domínio não possui servidor de e-mail válido.",
    "emailMix.error": "Erro ao validar domínio do e-mail.",
  },
  async validate(value, helpers) {
    const domain = value.split("@")[1];
    if (!domain) {
      return { value, errors: helpers.error("emailMix.email") };
    }
    try {
      const mxRecords = await resolveMx(domain);
      if (!mxRecords.length) {
        return { value, errors: helpers.error("emailMix.invalid") };
      }
      return { value };
    } catch {
      return { value, errors: helpers.error("emailMix.error") };
    }
  }
}))
