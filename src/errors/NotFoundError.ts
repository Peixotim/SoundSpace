import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor(
    message = 'Resource not found',
    details?: unknown,
    code = 'NOT_FOUND'
  ) {
    super({
      message,
      statusCode: 404,
      code,
      details,
    });
  }
}