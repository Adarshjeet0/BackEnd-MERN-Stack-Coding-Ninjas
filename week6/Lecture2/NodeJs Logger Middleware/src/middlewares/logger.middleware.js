// // Please don't change the pre-written code
// // Import the necessary modules here

// // Write your code here

// export const loggerMiddleware = async (req, res, next) => {
//   // Write your code here
// };
// export default loggerMiddleware;

import fs from 'fs';

const fsPromise = fs.promises;

async function log(logData) {
    try {
        logData = 
        `\n ${new Date().toString()} - ${logData}`;
        await fsPromise.appendFile('log.txt', logData);
    } catch(err) {
        console.log(err);
    }
}

const loggerMiddleware = async (
    req, 
    res, 
    next
) => { 
    // 1. Log request body.
    const logData = `${req.url} - ${JSON.stringify(req.body)}`;
    await log(logData);
    next();
};

export default loggerMiddleware;