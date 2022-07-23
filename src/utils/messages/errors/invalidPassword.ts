import httpStatus from "http-status";
import { ErrorMessage } from "../ErrorMessage";

export const InvalidPassword = {
  status: httpStatus.BAD_REQUEST,
  message: ErrorMessage.INVALID_PASSWORD
}