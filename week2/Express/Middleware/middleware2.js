//import express module
import express from 'express'

//1. Create server
const server = express();

//2. create middlewares 

function firstMiddleware(req,res, next) {
    console.log("This is first middleware");
    next();
}
function secondMiddleware(req,res, next) {
    console.log("This is Second middleware");
    next();
}

// Global object executes for every request like post, get and anyother
function globalMiddleware(req,res,next) {
    console.log("this is global middleware");
    next();
}

server.use(globalMiddleware);
//3. Handling response

server.get('/send', [firstMiddleware, secondMiddleware], (req,res)=> {
    res.send("This is last middleware");
});

//4. Listening server

server.listen(3000);
console.log('Server is listening on port number 3000');