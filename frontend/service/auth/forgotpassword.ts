
import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import api from '../config';

export const URL_FORGOT_PASSWORD = '/forgot-password';

export const postForgotPassword = async (body: { EMAIL: string }) => {
  try {
    const { data } = await api.post(URL_FORGOT_PASSWORD,  {
      EMAIL: body.EMAIL
    });


    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
