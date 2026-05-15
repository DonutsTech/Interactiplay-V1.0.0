interface CustomJoi {
    errors: string | undefined;
    values: any;
}
export declare const mxRecords: (email: string) => Promise<CustomJoi>;
export declare const customJoiAsync: (data: any) => Promise<CustomJoi>;
export {};
//# sourceMappingURL=index.d.ts.map