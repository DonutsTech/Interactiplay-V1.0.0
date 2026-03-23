import { CheckoutPlanRegister } from "@/@types/plan";
import api from "../config";
import { messageError, MESSEGE_VALIDITY } from "@/utils/error";
import { ErrorMessage } from "@/@types/error";

export const URL_CHECKOUT_PLAN_REGISTER = "/create-checkout";

export async function postCheckoutPlanRegister(body: CheckoutPlanRegister) {
  try {
    const { data } = await api.post(URL_CHECKOUT_PLAN_REGISTER, body);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
}
