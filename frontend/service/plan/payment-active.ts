import { ErrorMessage } from '@/@types/error';
import { messageError, MESSEGE_VALIDITY } from '@/utils/error';
import api from '../config';

export const PAYMENT_ACTIVE = '/payment-active';

export const getPaymentActive = async (token: string) => {
  try {
    const { data } = await api.get(PAYMENT_ACTIVE, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });

    if (!data) {
      throw MESSEGE_VALIDITY;
    }
    return data as { MESSAGE: string };
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};