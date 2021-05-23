export default class ApiError extends Error {
    constructor(
        public readonly message: string,
        public readonly httpCode: number = 400
    ) {
      super(message);
    
      Error.captureStackTrace(this);
    }
  }
    