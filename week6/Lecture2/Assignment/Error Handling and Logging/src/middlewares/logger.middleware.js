// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";

export const logger = winston.createLogger({
  // Write your code here
  level: 'error',
    format: winston.format.json(),
    defaultMeta: { },
    transports: [
      new winston.transports.File({ filename: 'error.log'}),
    ],
});

const loggerMiddleware = async (err, req, res, next) => { 
  // 1. Log request body.
  // const logData = `${req.url} - ${JSON.stringify(req.body)}`;
  // logger.info(logData);
  const logEntry = `level:${level}, timestamp:${new Date().toString()}, request URL:${req.originalUrl}, err message:${err.message}`;
  // {
  //   level: 'error',
  //   timestamp: new Date().toString(),
  //   'request URL': req.originalUrl,
  //   'err message': err.message
  // };
  console.log(logEntry);
  logger.error(logEntry);
  next(err);
};

export default loggerMiddleware;
