import { ErrorRequestHandler } from 'express';
import ApiError from '../utils/errors';

const customErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ApiError) {
    res.statusCode = error.httpCode;

    return res.json({
      error: {
        message: error.message,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : null,
      },
    });
  }

  next(error);
};

export default customErrorHandler;