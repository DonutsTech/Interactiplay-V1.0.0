import { resolveMx } from 'dns/promises';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../error';
export async function validateEmail(email) {
    const domain = email.split("@")[1];
    try {
        if (!domain) {
            throw new CustomError("email.invalid", StatusCodes.BAD_REQUEST);
        }
        const mxRecords = await resolveMx(domain);
        if (!mxRecords.length) {
            throw new CustomError("Dominio do email não existe", StatusCodes.BAD_REQUEST);
        }
    }
    catch (error) {
        throw error;
    }
}
//# sourceMappingURL=index.js.map