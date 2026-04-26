import { ErrorMessage } from "@/@types/error";
import { getToken } from "../token";
import { messageError } from "@/utils/error";
import api from "../config";

export interface TimeLineResponse {
  ID: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  HEIGHT: number;
  COR: string;
}

export interface TimeLineRequest {
  ATIVE: boolean;
  HEIGHT: number;
  COR: string;
}

export const postCampaignTimeLine = async (
  campaignId: string,
  body: TimeLineRequest
): Promise<TimeLineResponse | ErrorMessage> => {
  try {
    const token = getToken();

    if (!token) {
      throw new Error('Token não encontrado');
    }

    const { data } = await api.post<TimeLineResponse>(
      `/user/campaigns/${campaignId}/timeline`,
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
}
