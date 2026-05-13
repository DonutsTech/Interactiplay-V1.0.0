import type { ClientPublic } from '../../@types/interface/socket';
import type { Prisma } from '../../generated/prisma/browser';

export const transformModelPlayToClient = (
  modelPlay: Prisma.Model_PlayModel,
  userId: string = '',
  modelTime: { ID_MODEL_TIME: string; TIMESCREEN: number } | null = null,
  data: ClientPublic | null,
): ClientPublic => {
  return {
    ID_ANALYTICS: modelPlay.ANALYTICS_ID || undefined,
    ID_MODEL_PLAY: modelPlay.ID,
    ID_MODEL_TIME: modelTime ? modelTime.ID_MODEL_TIME : undefined,
    ID_USER: userId || undefined,
    ID_CAMPAIGN: data ? data.ID_CAMPAIGN : undefined,
    ID_MODEL_VIEW: modelPlay.MODEL_VIEWS_ID || undefined,
    BROWSER: data ? data.BROWSER : '',
    DEVICE: data ? data.DEVICE : '',
    OS: data ? data.OS : '',
    COUNTRY: data ? data.COUNTRY : '',
    CITY: data ? data.CITY : '',
    REGION: data ? data.REGION : '',
    PLAY: modelPlay.PLAY,
    VIEW: modelPlay.VIEW,
    TIMESCREEN: modelTime ? modelTime.TIMESCREEN : 0,
  };
};
