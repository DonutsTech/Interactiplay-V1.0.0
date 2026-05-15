import { resolveMx } from 'dns/promises';
export const mxRecords = async (email) => {
    const domain = email.split('@')[1];
    if (!domain) {
        return {
            errors: 'O email deve conter um domínio válido.',
            values: email,
        };
    }
    try {
        const mxRecords = await resolveMx(domain);
        if (!mxRecords.length) {
            return {
                errors: 'O domínio do email não possui registros válidos.',
                values: email,
            };
        }
        return {
            errors: undefined,
            values: email,
        };
    }
    catch {
        return {
            errors: 'O domínio do email não possui registros válidos.',
            values: email,
        };
    }
};
const switchFunctions = async (key, values) => {
    switch (key) {
        case 'EMAIL':
            return await mxRecords(values);
        default:
            return {
                errors: undefined,
                values,
            };
    }
};
export const customJoiAsync = async (data) => {
    const keys = Object.keys(data);
    for (const key of keys) {
        const result = await switchFunctions(key, data[key]);
        if (result.errors) {
            return {
                errors: result.errors,
                values: data,
            };
        }
    }
    return {
        errors: undefined,
        values: data,
    };
};
//# sourceMappingURL=index.js.map