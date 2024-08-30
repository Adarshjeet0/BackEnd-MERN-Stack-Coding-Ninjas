//import express
// const express = require('express')
import express from 'express'
//1. Creating server 
const server = express();
// server.get('/',
//     // 1st middleware
//     (req, res, next)=>{
//     console.log("Server is running");
//     next();
//     }, 

//     // 2nd middleware
//     (req,res)=>{
//         res.send('Express server 2 is live');
//     })


    //alternate way to create middlewares
    server.get('/',(req, res, next)=>{
        console.log("Server is running");
        next();
    });
    server.get('/', (req, res,)=>{
        res.send("Server is running");
    });
//2. Adding listener 
server.listen(3000);

console.log("Server is listening on port number 3000");