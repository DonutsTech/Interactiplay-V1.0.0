import { Login } from '@/@types/auth';
import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import api from '../config';


export const URL_LOGIN = `/login`;

export const postLogin = async (body: Login) => {
  try {
    const { data } = await api.post(URL_LOGIN, body);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
