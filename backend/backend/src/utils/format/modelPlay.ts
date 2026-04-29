import type { ClientPublic } from '../../@types/interface/socket';
import type { Prisma } from '../../generated/prisma/browser';

export const transformModelPlayToClient = (
  modelPlay: Prisma.Model_PlayModel,
  userId: string = '',
  modelTime: { ID_MODEL_TIME: string; TIMESCREEN: number } | null = null,
): ClientPublic => {
  return {
    ID_ANALYTICS: modelPlay.ANALYTICS_ID || undefined,
    ID_MODEL_PLAY: modelPlay.ID,
    ID_MODEL_TIME: modelTime ? modelTime.ID_MODEL_TIME : undefined,
    ID_USER: userId || undefined,
    BROWSER: modelPlay.BROWSER,
    DEVICE: modelPlay.DEVICE,
    OS: modelPlay.OS,
    COUNTRY: modelPlay.COUNTRY,
    CITY: modelPlay.CITY,
    REGION: modelPlay.REGION,
    PLAY: modelPlay.PLAY,
    VIEW: modelPlay.VIEW,
    TIMESCREEN: modelTime ? modelTime.TIMESCREEN : 0,
  };
};
