import type { User } from "../../generated/prisma/browser";

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
