import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export const validationFormatterMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status).json({
    error: err.message,
    validation: err.validationErrors,
    schema: err.validationSchema,
  });
};
