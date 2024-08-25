//To run this code
// 1. Open a terminal
// 2. run command : node http-event.js
// 3. Go to postman;
// 4. Select GET and POST method 
// 5. If you want to post something to select post method and give input otherwise select GET
// 6. Click send;

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        let body = '';
        req.on("data",(chunk)=>{
            body +=chunk.toString();
        });
        req.on("end",()=>{
            console.log(body);
            res.end("Data received successfully");
        });
    }else{
        res.end("Welcome to coding ninjas");
    }
});
server.listen(3100);
console.log("Server is listening on port number:3100");

