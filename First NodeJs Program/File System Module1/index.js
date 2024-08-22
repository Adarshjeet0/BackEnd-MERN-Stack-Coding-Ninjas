//Here we will read the file data using js methods and functions
const fs = require("fs");
const buffer = fs.readFileSync("file.txt",{encoding:"utf8"});
console.log(buffer.toString());
console.log("Module started");
