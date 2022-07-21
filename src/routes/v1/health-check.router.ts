import { Router } from "express";
import httpStatus from "http-status";


export const healthCheckRouter = Router();

healthCheckRouter.get('/', (_, response) => {
  return response.status(httpStatus.OK).json({message: "i'm working"})
})
