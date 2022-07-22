import { Request, Response } from "express";
import { BaseSchema } from "yup";

export const validateData = (schema: BaseSchema) => async (
  req: Request,
  _res: Response,
  next: Function
) => {
  const data = req.body;
  const body = await schema
    .validate(data, { abortEarly: false, stripUnknown: true })

  Object.assign(req, { body })
  next();
};
