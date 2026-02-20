import { AppError } from './AppError';

export class BadRequestError extends AppError {
  constructor(
    message = 'Bad request',
    details?: unknown,
    code = 'BAD_REQUEST'
  ) {
    super({
      message,
      statusCode: 400,
      code,
      details,
    });
  }
}