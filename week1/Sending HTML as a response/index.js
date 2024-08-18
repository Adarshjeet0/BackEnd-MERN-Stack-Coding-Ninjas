// Please don't change the pre-written code
// Import the necessary modules here
const http = require('http');
const fs = require('fs');

// Write your code here
const server = http.createServer((req, res)=>{
    const data = fs.readFileSync('index.html');
    res.end(data);
});

server.listen(8080);
console.log('Server is listening');

module.exports = server;
