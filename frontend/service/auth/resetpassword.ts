

import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import api from '../config';

export const URL_RESET_PASSWORD = "/reset-password";

export const postResetPassword = async (body: { TOKEN: string; HASHED_PASSWORD: string; CODE: string }) => {
  try {
    const { data } = await api.post(URL_RESET_PASSWORD,  {
      HASHED_PASSWORD: body.HASHED_PASSWORD,
      CODE: body.CODE
    }, {
      headers: {
        Authorization: `Bearer ${body.TOKEN}`,
      },
    }
  );


    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
