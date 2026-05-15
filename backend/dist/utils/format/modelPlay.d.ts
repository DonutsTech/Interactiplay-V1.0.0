import type { ClientPublic } from '../../@types/interface/socket';
import type { Prisma } from '../../generated/prisma/browser';
export declare const transformModelPlayToClient: (modelPlay: Prisma.Model_PlayModel, userId: string | undefined, modelTime: {
    ID_MODEL_TIME: string;
    TIMESCREEN: number;
} | null | undefined, data: ClientPublic | null) => ClientPublic;
//# sourceMappingURL=modelPlay.d.ts.map