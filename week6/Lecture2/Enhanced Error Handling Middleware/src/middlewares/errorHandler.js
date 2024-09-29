// // Please don't change the pre-written code

// export class customErrorHandler extends Error {
//   constructor(statusCode, errMessage) {
//     super(errMessage);
//     this.statusCode = statusCode;
//   }
// }

// export const errorHandlerMiddleware = (err, req, res, next) => {
//   // Write your code here
//   console.log(err);
//     if (err instanceof customErrorHandler){
//       res.status(err.statusCode).send(err.errMessage);
//     }
  
//     // server errors.
//     res
//     .status(500)
//     .send(
//       'Oops! Something went wrong... Please try again later!'
//       );
// };


// src/middlewares/errorHandler.js

export class customErrorHandler extends Error {
  constructor(statusCode, message) {
    super(message);  // 'message' is already part of the Error class
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err); // More appropriate for logging errors

  if (err instanceof customErrorHandler) {
    return res.status(err.statusCode).send(err.message);
  }

  // Handle unhandled errors (500)
  res.status(500).send(
    'Oops! Something went wrong... Please try again later!'
  );
};
