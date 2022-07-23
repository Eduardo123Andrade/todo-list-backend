import httpStatus from "http-status";
import { ErrorMessage } from "../ErrorMessage";

export const UserAlreadyExists = {
  status: httpStatus.BAD_REQUEST,
  message: ErrorMessage.USER_ALREADY_EXISTS
}