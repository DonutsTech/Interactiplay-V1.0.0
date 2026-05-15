import { StatusCodes } from "http-status-codes";
export declare class CustomError<T> extends Error {
    readonly statusCode: number;
    readonly data: T | undefined;
    constructor(message: string, statusCode?: StatusCodes, data?: T | undefined);
}
//# sourceMappingURL=appError.d.ts.map