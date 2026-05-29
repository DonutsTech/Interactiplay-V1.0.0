import { ErrorMessage } from '@/@types/error';
import { CheckoutPlanRegister } from '@/@types/plan';
import api from '../config';
import { MESSEGE_VALIDITY } from '@/utils/error';

export const URL_PAYMENT_CHECKOUT = '/payment-checkout';

export interface PaymentCheckoutResponse {
  LINK: string;
}

export const postPaymentCheckout = async (
  body: CheckoutPlanRegister
): Promise<PaymentCheckoutResponse | ErrorMessage> => {
  try {
    const { data } = await api.post(URL_PAYMENT_CHECKOUT, body);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    if (!(typeof data === 'object')) {
      throw MESSEGE_VALIDITY;
    }

    return data;

  } catch (error: ErrorMessage | unknown) {
    return error as ErrorMessage;
  }
};

export const URL_PAYMENT_CHECKOUT_NEW = '/payment-checkout-new';

export const postPaymentCheckoutNew = async (
  body: CheckoutPlanRegister
): Promise<PaymentCheckoutResponse | ErrorMessage> => {
  try {
    const { data } = await api.post(URL_PAYMENT_CHECKOUT_NEW, body);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    if (!(typeof data === 'object')) {
      throw MESSEGE_VALIDITY;
    }

    return data;

  } catch (error: ErrorMessage | unknown) {
    return error as ErrorMessage;
  }
};
