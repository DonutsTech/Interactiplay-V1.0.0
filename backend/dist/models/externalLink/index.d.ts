import type { Prisma } from '../../generated/prisma/client';
declare class ExternalLinkModel {
    create(params: Prisma.External_LinkCreateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        TEXT: string | null;
        STYLE_TEXT: string | null;
        LINK_URL: string | null;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }>;
    findMany(params: Prisma.External_LinkFindManyArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        TEXT: string | null;
        STYLE_TEXT: string | null;
        LINK_URL: string | null;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }[]>;
    findBy(find: Prisma.External_LinkFindFirstArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        TEXT: string | null;
        STYLE_TEXT: string | null;
        LINK_URL: string | null;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    } | null>;
    deleteBy(where: Prisma.External_LinkWhereUniqueInput): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        TEXT: string | null;
        STYLE_TEXT: string | null;
        LINK_URL: string | null;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }>;
    deleteMany(where: Prisma.External_LinkWhereInput): Promise<Prisma.BatchPayload>;
    updateBy(params: Prisma.External_LinkUpdateArgs): Promise<{
        ID: string;
        CREATED_AT: Date | null;
        UPDATED_AT: Date | null;
        ATIVE: boolean;
        BUTTON_TEXT: string | null;
        BUTTON_STYLE: string | null;
        TEXT: string | null;
        STYLE_TEXT: string | null;
        LINK_URL: string | null;
        BUTTON_CLICK_CAMPAING: number;
        BUTTON_CLICK_TEST_AB: number;
    }>;
    count(where: Prisma.External_LinkWhereInput): Promise<number>;
}
export declare const externalLinkModel: ExternalLinkModel;
export {};
//# sourceMappingURL=index.d.ts.map