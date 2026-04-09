import { Register } from '@/@types/auth';
import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import api from '../config';

export const URL_REGISTER = '/register';

export const postRegister = async (body: Register) => {
  try {
    const { data } = await api.post(URL_REGISTER, body);


    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};

// export const postRegister = async (body: Register) => {
//   const { data } = await api.post(URL_REGISTER, body);
//   console.log(data)
//   if ('MESSAGE' in data) {
//     return data as ErrorMessage;
//   }
//   return data;
// };