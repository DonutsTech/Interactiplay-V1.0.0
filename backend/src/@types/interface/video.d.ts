export interface createVideo {
  NAME: string;
  SIZE: number;
  FORMAT: string;
  DURATION: number;
  ORIENTATION: 'portrait' | 'landscape' | 'square';
  HEIGHT: number;
  WIDTH: number;
}

export type UpdateVideo = Parcial<createVideo>;

export interface FormVideo {
  DURATION: string;
  WIDTH: string;
  HEIGHT: string;
}
