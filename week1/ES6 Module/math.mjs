// math.js - a CommonJS module for performing calculations on a set of numbers

//****If you want to run on local IDE then run this code*********** */


// function sum(nums) {
//     return nums.reduce((total, num) => total + num, 0);
//   }
  
//   function mean(nums) {
//     return sum(nums) / nums.length;
//   }
//   export {sum,mean};
  
  
//   // module.exports = {
//   //   sum: sum,
//   //   mean: mean,
//   // };



//**********To submit on coding ninjas use this code*********** */
  // math.js - a CommonJS module for performing calculations on a set of numbers

export const sum = (nums) =>{
    return nums.reduce((total, num) => total + num, 0);
  };
  
  export const mean = (nums)=> {
    return sum(nums) / nums.length;
  };
  