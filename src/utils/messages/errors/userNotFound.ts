import httpStatus from "http-status";
import { ErrorMessage } from "../ErrorMessage";

export const UserNotFoundError = {
  status: httpStatus.NOT_FOUND,
  message: ErrorMessage.USER_NOT_FOUND
}