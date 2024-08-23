//In this we are trying to set path for cross plateform.
// Because mac uses forward slashes(/) in their path while windows uses backward slashes(\)
// So we are using path.join() function to resolve this conflict.

const fs = require('fs');
const path = require('path');

//making path
//This line fetches the absolute path of file but not complete
const filePath = path.join("src","data.txt");

//This file fetches the complete absolute path of file
const filePathResolved = path.resolve("src","data.txt");

//This line fetches the extenstion of file
const fileExtension = path.extname(filePathResolved);
// console.log(fileExtension);

// console.log(filePath);
// console.log(filePathResolved);
fs.readFile(filePath,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});