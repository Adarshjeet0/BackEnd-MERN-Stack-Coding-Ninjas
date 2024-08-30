//Read this carefully
//In this program, I used a epxress method know as static() which tells the server that these are static file 
// which can be accessed by anyone without any authorization

// To access these static file just type url: localhost:5000/index.html
// but we can't access any other file without authorization except public folder 
//Run this program and see the adventure



//import express server
import express from 'express'

// creating server
const server = express();

server.get('/',(req,res)=>{
    res.send('Get request received');
})

server.use(express.static('public'));

//adding listener for the server

server.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});