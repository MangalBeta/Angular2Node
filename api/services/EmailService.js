/*
   Author :- Mangal Singh
   Purpose :- Service used to send email throughout the application
 */

 /*
 Author :- Sunny chauhan
 Purpose :- Service used to send email throughout the application
 */

 let nodemailer = require('nodemailer');
 //let smtpConfig = 'smtps://bigdata@gmail.com:myAttitude@28@smtp.gmail.com';
 let smtpConfig = {
      service : "gmail",
      auth    : {
           user     : "mangalhcl449@gmail.com",
           pass : "mobilyte@123",
      }
 };
 let transporter = nodemailer.createTransport(smtpConfig);

 module.exports = {

      send: function(mailOptions, cb) {
           transporter.sendMail(mailOptions, function(err, info){
                if(err){
                     cb(err, null);
                }else {
                     cb(null, info);
                }
           });
      }
 };
