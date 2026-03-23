import { Login } from '@/@types/auth';
import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import axios from 'axios';

export const URL_LOGIN = `/login`;

export const postLogin = async (body: Login) => {
  try {
    const { data } = await axios.post(URL_LOGIN, body);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
