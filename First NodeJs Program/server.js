//create a server using NodeJs.

// 1. Import http library/module
const http = require('http');

// 2. Create server
const server = http.createServer((req, res) =>{
    res.end('Welcome to my first server.');
});

// 3. Specify a port to listen client's request
server.listen(3100, ()=>{
    console.log('Server is listening on port number 3100');
});
