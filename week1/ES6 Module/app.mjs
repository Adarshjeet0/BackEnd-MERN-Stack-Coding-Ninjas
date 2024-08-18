//****If you want to run on local IDE then run this code*********** */
// // app.js - our main application file
// // const math = require("./math.js");
// import * as mathModule from './math.mjs'; 
// const nums = [1, 2, 3, 4, 5];
// console.log(`The sum is ${mathModule.sum(nums)}`);
// console.log(`The mean is ${mathModule.mean(nums)}`);




//**********To submit on coding ninjas use this code*********** */
// app.js - our main application file
// const math = require("./math.js");
import * as math from './math.mjs';
const nums = [1, 2, 3, 4, 5];
console.log(`The sum is ${math.sum(nums)}`);
console.log(`The mean is ${math.mean(nums)}`);
