import { ErrorRequestHandler } from 'express';

const defaultErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  console.error(error);

  res.statusCode = statusCode;

  if (process.env.NODE_ENV !== 'production') {
    return res.json({
      error: {
        message: error.message,
        stack: error.stack,
      },
    });
  }

  return res.json({
    error: {
      message: 'internal server error',
    },
  });
};

export default defaultErrorHandler;
