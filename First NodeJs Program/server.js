//**********Server to handle single request**************


// //create a server using NodeJs.

// // 1. Import http library/module
// const http = require('http');

// // 2. Create server
// const server = http.createServer((req, res) =>{
//     res.end('Welcome to my first server.');
// });

// // 3. Specify a port to listen client's request
// server.listen(3100, ()=>{
//     console.log('Server is listening on port number 3100');
// });

// ***************Server to handle multiple request ****************

// import library/module
const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/product'){
        res.end('Welcome to product page');
    }else if(req.url === '/user'){
        res.end('Welcome to User page');
    }else{
        res.end('Welcome to Running server')
    }
});


server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});
