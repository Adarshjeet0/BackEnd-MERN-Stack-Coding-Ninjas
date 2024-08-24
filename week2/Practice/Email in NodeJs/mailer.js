// 1. Import mailer
const nodeMailer = require('nodemailer');

// 2. Configure email and send it

async function sendMail() {
    //1. Create email transporte
    // Using SMTP
    const transporter = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:'chauhanabhi8303@gmail.com',
            pass:'bpctcyawmzijrdtx'
        },
    });
    //2. Configure email content
    const mailOptions = {
        from:'chauhanabhi8303@gmail.com',
        to:'chauhanji830358@gmail.com',
        subject:'Welcome to nodeJs app',
        text:'Hello, this is a test email sent by nodeJs app',
    };

    //3. Send the email
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (err) {
        console.log("Email failed to send: "+err);
        
    }

}
sendMail();
sendMail();
sendMail();
sendMail();