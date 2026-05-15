interface VideoMetadata {
    duration: number;
    width: number;
    height: number;
}
export declare function getMetadata(file: string, timeoutMs?: number): Promise<VideoMetadata>;
export {};
//# sourceMappingURL=metadata.d.ts.map