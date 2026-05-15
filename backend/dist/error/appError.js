import { StatusCodes } from "http-status-codes";
export class CustomError extends Error {
    statusCode;
    data;
    constructor(message, statusCode = StatusCodes.INTERNAL_SERVER_ERROR, data = undefined) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
//# sourceMappingURL=appError.js.map