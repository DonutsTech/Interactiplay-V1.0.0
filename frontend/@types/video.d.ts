
export type IVideo = {
  ID: string;
  NAME: string;
  CREATED_AT: Date | null;
  UPDATED_AT: Date | null;
  USER_ID: string | null;
  SIZE: number;
  FORMAT: string;
  DURATION: number;
  ORIENTATION: string;
  HEIGHT: number;
  WIDTH: number;
  URL: string;
};
