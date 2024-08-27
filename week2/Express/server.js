import Express from 'express'

// Create server
const server = Express();

server.get('/',(req,res)=>{
    res.send('This is express server');
})

server.listen(3100,()=>{
    console.log("Server is listening on port 3100");
})