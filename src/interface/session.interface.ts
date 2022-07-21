import { UserViewData } from "./userView.interface";

export enum SessionTypeEnum {
  ACCESS = "ACCESS",
  REFRESH = "REFRESH",
}

export interface SessionData {
  id?: number
  token: string,
  expiresDate: Date,
  type: SessionTypeEnum,
  user: UserViewData
}
