import { messageError, MESSEGE_VALIDITY } from "@/utils/error";
import api from "../config";
import { ErrorMessage } from "@/@types/error";

export const URL_PLAN = "/plans";

export const getPlan = async () => {
  try {
    const { data } = await api.get(URL_PLAN);

    if (!data) {
      throw MESSEGE_VALIDITY;
    }

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
