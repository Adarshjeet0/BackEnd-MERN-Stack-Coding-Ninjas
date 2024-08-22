//Writing into the file
const fs = require('fs');

//writing into the file
try {
    fs.writeFileSync('dataw.txt',"name:Adarsh, post:finance, position:manager");
} catch (err) {
    console.log(err);
}

//Appending into the file
fs.appendFileSync('dataw.txt',"Name1:Adarsjeet, Post:Developer, Position: Manager");

// Deleting the file
fs.unlinkSync('dataw.txt');
console.log("Writing into the file");