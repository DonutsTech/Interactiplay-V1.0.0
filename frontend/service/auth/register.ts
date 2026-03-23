import { Register } from '@/@types/auth';
import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import axios from 'axios';

export const URL_REGISTER = '/register';

export const postRegister = async (body: Register) => {
  try {
    const { data } = await axios.post(URL_REGISTER, body);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
