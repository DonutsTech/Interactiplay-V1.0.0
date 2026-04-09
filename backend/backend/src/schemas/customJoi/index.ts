import { resolveMx } from 'dns/promises';
import JoiBase from 'joi';

export const emailJoi = JoiBase.extend((joi) => ({
  type: 'emailMx',
  base: joi.string(),
  messages: {
    "string.empty": "O email é obrigatório.",
    'emailMx.email': 'Formato de email inválido.',
    'emailMx.invalid': 'Um erro ocorreu ao validar o email.',
    'emailMx.noMx': 'Domínio do email não existe',
  },
  async validate(value, helpers) {
    const domain = value.split('@')[1];

    if (!domain) {
      return { value, errors: helpers.error('emailMx.email') };
    }

    try {
      const mxRecords = await resolveMx(domain);

      if (!mxRecords.length) {
        return { value, errors: helpers.error('emailMx.noMx') };
      }

      return { value };
    } catch {
      return { value, errors: helpers.error('emailMx.invalid') };
    }
  },
}));
