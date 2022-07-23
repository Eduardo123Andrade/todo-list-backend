import httpStatus from "http-status";
import { ErrorMessage } from "../ErrorMessage";

export const AccessDenied = {
  status: httpStatus.FORBIDDEN,
  message: ErrorMessage.ACCESS_DENIED
}