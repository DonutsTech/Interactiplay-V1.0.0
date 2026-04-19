import { ErrorMessage } from '@/@types/error';
import { messageError } from '@/utils/error';
import api from '../config';
import { getToken } from '../token';

export const URL_RESEND_VALIDATE_EMAIL = '/send-email-validate-email';

export const postResendValidateEmail = async () => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.post(
      URL_RESEND_VALIDATE_EMAIL,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};