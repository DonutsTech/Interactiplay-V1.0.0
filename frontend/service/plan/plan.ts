import { ErrorMessage } from '@/@types/error';
import { Plan } from '@/@types/plan';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import api from '../config';

export const URL_PLAN = '/plans';

export const getPlan = async () => {
  try {
    const { data } = await api.get(URL_PLAN);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data as Plan[];
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
