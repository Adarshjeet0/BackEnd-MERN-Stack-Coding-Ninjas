// Please don't change the pre-written code
// Import the necessary modules here
const express = require('express')
// Write your code here

// 1. Create server
const server = express();

//2. Handling request and response
server.get('/',(req,res)=>{
    res.send('Be a Coding Ninja.');
})
// server.listen(4000,()=>{
//     console.log('Express server is running on port number 3100');
// })

module.exports = { server };
