// // Please don't change the pre-written code
// // Import the necessary modules here
// import fs from 'fs';
// import winston from 'winston';
// // Write your code here

// export const loggerMiddleware = async (req, res, next) => {
//   // Write your code here
//   const logData = `${req.url} - ${JSON.stringify(req.body)}`;
//     logger.info(logData);
//     next();
// };

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'request-logging' },
//   transports: [
//     new winston.transports.File({ filename: 'log.txt'}),
//   ],
// });
// export default loggerMiddleware;


// Import the necessary modules here
import fs from 'fs';
import winston from 'winston';

// Configure the Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp
    winston.format.json() // Log in JSON format
  ),
  defaultMeta: { service: 'request-logging' },
  transports: [
    new winston.transports.File({ filename: 'combined.log' }), // Log to combined.log
  ],
});

// Middleware function for logging
export const loggerMiddleware = (req, res, next) => {
  const logData = {
    timestamp: new Date().toISOString(), // Add timestamp
    url: req.originalUrl, // Log the requested route
    body: req.body // Log the request body
  };
  
  logger.info(logData); // Log the structured data
  next(); // Pass control to the next middleware
};

export default loggerMiddleware;
