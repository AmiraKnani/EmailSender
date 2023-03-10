const express= require('express')
const nodemailer = require('nodemailer')

const app = express()
const port= 3000


app.get('/', (req,res) => res.send('Email Sender API'))

const transporter = nodemailer.createTransport({
    service : "hotmail" ,
    auth: {
        user: "youremail@outlook.tn",
        pass: "your_password_here"
    }
});

const options = {
    from:"yourmail@outlook.tn",
    to: "toX@gmail.com",
    subject :"Sending email with Node.JS",
    text: "wow! that's working! "

};


transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent" +info.response);
})





app.listen(port, () => console.log(`Notre app Node est démarée sur : http://localhost:${port}`))