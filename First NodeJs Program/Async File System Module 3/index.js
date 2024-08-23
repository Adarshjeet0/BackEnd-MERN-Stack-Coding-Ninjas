//In this file we will see asynchronous operations
// In previous file system (module 1) we are using synchronous operations
//In this code execution main thread does not execute file operation.
//The main difference is readFileSync and readFile as shown in line number 10;

//Import module
const fs = require('fs');

//Read files
fs.readFile('./data.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        // console.log(data.toString());
    }
    console.log("Data Read");
});


//write file
fs.writeFile('employee.txt','New Data',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Data Write");
});

//Append data
fs.appendFile("employee.txt","\nThis is appended data",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Data Appended");
});

//Delete data

fs.unlink("employee.txt",(err)=>{
    console.log("File is deleted");
});
console.log("This is another operation");