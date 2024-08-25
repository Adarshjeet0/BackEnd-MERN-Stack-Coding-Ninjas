// // Please do not change the prewritten code

// import http from "http";
// import fs from "fs";

// const server = http.createServer((req, res) => {
//   //  Write your code here
//   if(req.method === "POST"){
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk.toString();
//     });
//     req.on('end',()=>{
//       // console.log(body);
//       fs.appendFile('data.txt',body,(err)=>{
//         if(err){
//           console.log("Error occured: "+err);
//         }
//         // else{
//         //   fs.readFile('data.txt',(err,data)=>{
//         //     if(err){
//         //       console.log("Error occured: "+err);
//         //     }else{
//         //       res.end(data);
//         //     }
//         //   });
//         // }
//       });
//       fs.readFile('data.txt',(err,data)=>{
//         if(err){
//           console.log("Error occured: "+err);
//         }else{
//           res.end(data);
//         }
//       })
//       // res.end(readData);
//     });
//   }else{
//     console.log("Welcome to coding ninjas");
//     res.end("Get data received");
//   }

// });
// // const readData = 

// export default server;


import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if(req.method === "POST"){
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      fs.appendFileSync('data.txt',body);
      console.log(fs.readFileSync('data.txt','utf-8'));
      res.end("Get data received");
      });
  } 
});

export default server;
