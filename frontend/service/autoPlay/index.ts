import { ErrorMessage } from "@/@types/error";
import api from "../config";
import { getToken } from "../token";
import { messageError } from "@/utils/error";

interface AutoPlayResponse {
  ID: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  ATIVE: boolean;
  SECOND: number;
}

interface AutoPlayRequest {
  ATIVE: boolean;
  SECOND: number;
}

export const postCampaignAutoPlay = async (
  campaignId: string,
  body: AutoPlayRequest
): Promise<AutoPlayResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.post<AutoPlayResponse>(
      `/user/campaigns/${campaignId}/auto-play`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error: ErrorMessage | unknown) {
    return messageError(error) as ErrorMessage;
  }
};
