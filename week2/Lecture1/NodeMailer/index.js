// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';
// const nodemailer = require('nodemailer');
// const readline = require('readline');

const Solution = () => {
  // Write your code here
  const enterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  enterface.question('Enter you email: ',(useremail)=>{
    sendmail(useremail);
    // console.log(useremail);
    enterface.close();
  });
};

async function sendmail(useremail) {
  //1. Create transporter
   const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'codingninjas2k16@gmail.com',
        pass:'slwvvlczduktvhdj',
        // pass:'bpctcyawmzijrdtx',
      },
   });

   //2. Configure email
   const mailOptions = {
    from:'codingninjas2k16@gmail.com',
    to:useremail,
    subject:'Coding Ninjas',
    text:'The world has enough coders; be a coding ninja!',
   };

   try {
    //3. sent email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email Sent Successfully');
    
   } catch (err) {
    console.log("Failed to sent mail: "+err);
    
   }

}


export default Solution;
