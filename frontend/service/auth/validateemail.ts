
import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import api from '../config';

export const URL_VALIDATE_EMAIL = '/validate-email';

export const getValidateEmail = async (token: string) => {
  try {
    const { data } = await api.get(URL_VALIDATE_EMAIL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
