declare global {
  interface Window {
    fbq?: (
      command: 'init' | 'track' | 'trackCustom',
      pixelId?: string | Record<string, unknown>,
      data?: Record<string, unknown>,
      options?: Record<string, unknown>
    ) => void;
    _fbq?: Window['fbq'];
  }
}

export { };
