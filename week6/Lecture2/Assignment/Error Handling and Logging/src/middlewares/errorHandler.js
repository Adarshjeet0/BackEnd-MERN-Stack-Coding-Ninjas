// Please don't change the pre-written code
// Import the necessary modules here

// export class customErrorHandler extends Error {
//   constructor(statusCode, errMessage) {
//     super(errMessage);
//     this.statusCode = statusCode;
//   }
// }

import {logger} from './logger.middleware.js';

export class customErrorHandler extends Error {
  constructor(statusCode, message) {
    super(message);  // 'message' is already part of the Error class
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  
  // {
  //   level: 'error',
  //   timestamp: new Date().toString(),
  //   'request URL': req.originalUrl,
  //   'err message': err.message
  // };
  // console.log(logEntry);
  
  

  if (err instanceof customErrorHandler) {
    const logEntry = `level:${logger.level}, timestamp: ${new Date().toString()}, request URL: ${req.originalUrl}, err message: ${err.message}`;
    logger.error(logEntry);
    return res.status(err.statusCode).send(err.message);
  }

  // Handle unhandled errors (500)
  const logEntry = `level:${logger.level}, timestamp: ${new Date().toString()}, request URL: ${req.originalUrl}, err message: Oops! Something went wrong... Please try again later!`;
  logger.error(logEntry);
  res.status(500).send(
    'Oops! Something went wrong... Please try again later!'
  );
};
