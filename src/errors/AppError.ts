interface AppErrorProps {
  message: string;
  statusCode?: number;
  code?: string;
  isOperational?: boolean;
  details?: unknown;
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly isOperational: boolean;
  public readonly details?: unknown;

  constructor({
    message,
    statusCode = 400,
    code = 'APPLICATION_ERROR',
    isOperational = true,
    details,
  }: AppErrorProps) {
    super(message);

    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this);
  }
}