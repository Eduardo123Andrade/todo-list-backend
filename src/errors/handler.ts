import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { QueryFailedError } from "typeorm";
import { ValidationError } from "yup";
import { CustomError } from "./CustomError";

interface ValidationErrors {
  [key: string]: string[];
}


export const errorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach((err) => {
      if (err.path) errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: "Erro de validação", errors });
  }
  if (error instanceof QueryFailedError) {
    return response.status(httpStatus.BAD_REQUEST).json({
      message: error.message,
    });
  }

  if (error instanceof CustomError) {
    return response.status(error.status).json({
      message: error.message
    })
  }

  console.error(error);

  return response.status(500).json({ message: "Erro interno do servidor " });
};
