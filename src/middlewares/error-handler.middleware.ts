import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export function errorHandlerMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      code: err.code,
      message: err.message,
      details: err.details ?? undefined,
    });
  }

  console.error('Unexpected error:', err);

  return res.status(500).json({
    status: 'error',
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Internal server error',
  });
}