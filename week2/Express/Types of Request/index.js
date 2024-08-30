// import express module
import express from 'express'

//Creating server
const server = express();

//Handling Requests
server.get('/',(req,res)=>{
    res.send('Get request received');
    console.log("Get request received");
    console.log(req.method + " "+ req.path);
})

server.post('/',(req,res)=>{
    res.send('Post request received');
    console.log("Post request received");
    console.log(req.method + " "+ req.path);
})

server.put('/',(req,res)=>{
    res.send('Put request received');
    console.log("Put request received");
    console.log(req.method + " "+ req.path);
})

server.delete('/',(req,res)=>{
    res.send('Delete request received');
    console.log("Delete request received");
    console.log(req.method + " "+ req.path);
})

//Adding listener for the server
server.listen(3200);
console.log("Server is listening");