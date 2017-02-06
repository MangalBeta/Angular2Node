/*
* Author : Mangal Singh
* Module : AuthsController
* Description : Use to register User on application
*/
const AppMessages = require(APP_PATH + '/config/Message.js');
const AppConstants = require(APP_PATH + '/config/Constant.js');
const CommonService = require(APP_PATH + '/api/services/CommonService.js');
const EmailService = require(APP_PATH + '/api/services/EmailService.js');
const JwtService = require(APP_PATH + '/api/services/JwTokenService.js');
const UserModel = require(APP_PATH + '/api/models/UserModel.js');
const UserModelObj = new UserModel();
const momentHelper = require(APP_PATH + '/api/services/moment.js');
const WEB_EMAIL ="mangal@yopmail.com"
const ENV_OBJ = require(APP_PATH + '/config/Env.js')();
let fieldsToExclude = {"password" : 0, "isDeleted" : 0, "createdDate" : 0, "modifiedDate" : 0, "otp" : 0};
var redis = require('redis');
var client = redis.createClient(6379);
module.exports = {

     /**--------------------------------------------------------------------------
     Function    : register
     Description : use to register a user
     --------------------------------------------------------------------------*/
     register: function (req, res) {
          let email1 = req.body.email;
          let email = email1.toLowerCase();
          let password = req.body.password;
          if(!email){
               res.json({
                    status  : 'error',
                    message : 'Email field is required',
                    data    : {}
               });
          }

          if(!password){
               res.json({
                    status  : 'error',
                    message : 'Password field is required',
                    data    : {}
               });
          }

          UserModel.findOne({ email: email},(err, user) => {
               if(err) return res.json({ status: 'error', message: 'some error occured, Please try later.', data: {}});
               if(user){
                    res.json({
                         status: 'error',
                         message: "User is already registered with this email address, Please use new one.",
                         data: {}
                    });
               } else {
                    CommonService.generateCode(6, (code) => {
                         let newUser = UserModel({
                              email: email,
                              password: password,
                              verificationCode: code
                         });
                         newUser.save((err, user) => {
                              if(err) return res.json({ status: 'error', message: 'some error occured, Please try later.', data: {} });

                              CommonService.getTemplate("VERIFICATION-CODE",function(err, template){
                                   if (err) {
                                        return res.json({status:'error', message : err.message});
                                   }
                                   if(template) {
                                        let randomCode = code;
                                        template.description = template.description.replace("{{CODE}}", randomCode);

                                        let mailOptions = {
                                             from: WEB_EMAIL,
                                             to: email,
                                             subject: template.subject,
                                             html: template.description
                                        }
                                        EmailService.send(mailOptions,function(err, response){
                                             if(err) {
                                                  console.log("Email Not Sent");
                                             } else {
                                                  console.log("Email Sent Succesfully");
                                             }
                                        });
                                   } else {
                                        console.log("Template Not Found");
                                   }
                              });
                              res.json({
                                   status  : 'success',
                                   message : "Verification Code has been sent to your email, Please verify your email address",
                                   data : {
                                        id : user._id
                                   }
                              });
                         });
                    });

               }
          });
     },

     /**--------------------------------------------------------------------------
     | Function    : confirmOtp
     | Description : use to confirm account after register of user
     |--------------------------------------------------------------------------*/
     varifyEmail: function (req, res) {
          let code = req.query.code;
          UserModel.findOne({ verificationCode: code }, function(err, user){
               if(err) return res.json({ status: 'error', message: 'some error occured', data: {}});
               if(user){
                    var miliSeconds = momentHelper.getIntervalInMiliSeconds(user.updatedAt);
                    if(miliSeconds < 180000){
                         UserModel.update({ _id: user.id },{ activated: true, verificationCode:"" }, function(err){
                              if(err) return res.json({ status: 'error', message: 'some error occured', data: {}});
                              CommonService.getTemplate("EMPLOYER-SUCCESSFUL-REGISTRATION",function(err, template){
                                   if (err) {
                                        return res.json({status:'error', message : err.message});
                                   }
                                   if(template) {
                                        let mailOptions = {
                                             from: WEB_EMAIL,
                                             to: user.email,
                                             subject: template.subject,
                                             html: template.description
                                        }
                                        EmailService.send(mailOptions,function(err, response){
                                             if(err) {
                                                  console.log("Email Not Sent");
                                             } else {
                                                  console.log("Email Sent Succesfully");
                                             }
                                        });
                                   } else {
                                        console.log("Template Not Found");
                                   }
                              });
                              res.json({
                                   status  : 'success',
                                   message : "Your account has been verified",
                                   data    : { userId: user.id }
                              });
                         });
                    } else {
                         res.json({
                              status  : 'error',
                              message : "Your code has expired, try resending code",
                              data    : { userId: user.id }
                         });
                    }

               }else{
                    res.json({
                         status  : 'error',
                         message : "Wrong Code provided, please try again with the right code",
                         data    : {}
                    });
               }
          });
     },

     /**--------------------------------------------------------------------------
     | Function    : reSendOtp
     | Description : use to resend OTP in case of OTP not received
     |--------------------------------------------------------------------------*/
     reSendOtp: function (req, res) {
          let reqId = req.query.reqId;
          var attemptsLeft = '';
          if(req.query.role == 'EMPLOYER') {
               client.get(reqId+"_attempts", (err, reply) =>{
                    if(!reply){
                         client.set(reqId+"_attempts",1);
                         attemptsLeft = 1;
                         client.expireat(reqId+"_attempts", parseInt((+new Date)/1000) + 600);
                    }else{
                         attemptsLeft = parseInt(--reply);
                         client.set(reqId+"_attempts",attemptsLeft);
                    }
                    if(attemptsLeft >= 0){
                         CommonService.generateCode(6, (code) => {
                              UserModel.findOneAndUpdate({ _id : reqId},{verificationCode : code},function (err, resData) {
                                   if(err){
                                        return res.json({status:'error', message : "Some error occured",data:{ attemptsLeft: attemptsLeft}});
                                   }
                                   if(resData == null) {
                                        return res.json({status:'error', message :"Some error occured",data:{ attemptsLeft: attemptsLeft }});
                                   } else {
                                        CommonService.getTemplate("RESEND",function(err, template){
                                             if (err) {
                                                  return res.json({status:'error', message : err.message});
                                             }
                                             if(template) {
                                                  let randomCode = code;
                                                  template.description = template.description.replace("{{CODE}}", randomCode);

                                                  let mailOptions = {
                                                       from: WEB_EMAIL,
                                                       to: resData.email,
                                                       subject: template.subject,
                                                       html: template.description
                                                  }
                                                  EmailService.send(mailOptions,function(err, response){
                                                       if(err) {
                                                            console.log("Email Not Sent");
                                                       } else {
                                                            console.log("Email Sent Succesfully");
                                                       }
                                                  });
                                             } else {
                                                  console.log("Template Not Found");
                                             }
                                        });

                                        return res.json({status:'success', message : "New code has been sent to your email",data:{_id:resData._id, attemptsLeft: attemptsLeft} });
                                   }
                              });
                         })
                    }else{
                         return res.json({status:'error', message :"You cannot send any more verification code",data:{attemptsLeft: attemptsLeft}});
                    }
               });
          }
     },

     /**--------------------------------------------------------------------------
     | Function    : register
     | Description : use to recover password in case of forgot password
     |--------------------------------------------------------------------------*/
     forgot: function (req, res) {
          let email = req.body.email.toLowerCase();
          if (!email) {
               return res.json({status:'error', message :'Email is required', fieldEmpty:"email"});
          }
          if(req.body.role == 'EMPLOYER') {
               UserModel.findOne({ email : email, isDeleted: false },function (err, resData) {
                    if(err) return res.json({status:'error', message :"some error occured",data:{} });
                    if(resData == null) {
                         return res.json({status:'error', message :"Your account is invalid",data:{}});
                    } else {
                         CommonService.generateCode(6, (code) => {
                              UserModel.findOneAndUpdate({email : email},{verificationCode : code}, {new : true},function(err, resData){
                                   if (err) return res.json({status:'error', message : "some error occured"});
                                   if(resData != null) {
                                        //mailHelper.sendActivationMail(mailData);
                                        CommonService.getTemplate("FORGOT-PASSWORD",function(err, template){
                                             if (err) {
                                                  return res.json({status:'error', message : err.message});
                                             }
                                             if(template) {
                                                  let randomCode = code;
                                                  template.description = template.description.replace("{{CODE}}", randomCode);
                                                  let mailOptions = {
                                                       from: WEB_EMAIL,
                                                       to: email,
                                                       subject: template.subject,
                                                       html: template.description
                                                  }
                                                  EmailService.send(mailOptions,function(err, response){
                                                       if(err) {
                                                            console.log("Email Not Sent");
                                                       } else {
                                                            console.log("Email Sent Succesfully");
                                                       }
                                                  });
                                             } else {
                                                  console.log("Template Not Found");
                                             }
                                        });
                                        return res.json({status : 'success', message : "OTP is send to your email", data:{ _id : resData._id}});
                                   }
                                   else {
                                        return res.json({status : 'error', message :"Your OTP is not correct",data:{}});
                                   }
                              })
                         });

                    }
               });
          }
     },

     /**--------------------------------------------------------------------------
     | Function    : confirmOtpForgot
     | Description : use to confirm account in case of forgot password
     |--------------------------------------------------------------------------*/
     confirmOtpForgot: function (req, res) {
          let code = req.body.code;
          let verifyId = req.query.reqId;
          if(req.body.role == 'EMPLOYER') {
               UserModel.findOneAndUpdate({ _id:verifyId, verificationCode: code} ,{activated:true, verificationCode:"" }, {new:true}).exec(function (err, resData) {
                    if(err) return res.json({status:'error', message :"Some error occured",data:{}});

                    if(resData == null) {
                         return res.json({status:'error', message :"Code is invaild",data:{}});
                    } else {
                         return res.json({status:'success', message :"Your Code successfully verify please change the password", data:{_id:resData._id}});
                    }
               });
          }
     },

     /**--------------------------------------------------------------------------
     | Function    : login
     | Description : use to login user
     |--------------------------------------------------------------------------*/
     login: function (req, res) {
          let email = req.body.email;
          let password = req.body.password;

          if(!email){
               return res.json({status:'error', message : 'Please provide your email.', data : {} });
          }else{
               email = email.trim().toLowerCase();
          }

          if(!password){
               return res.json({status:'error', message : 'Please provide your password.',data : {} });
          }

          //let query = UserModel.findOne({email:email}, {"activated":1,"password" : 1, "isSubscribed": 1,"company" :1});
          let query = UserModel.findOne({email:email});
          query.exec(function(err, user) {
               if(err) return res.json({ status: 'error', message: 'some error occured, Please try again later.', data: {}});
               if(!user){
                    return res.json({status:'error', message : 'User not Exist ',data : {} });
               }else{
                    if(!user.activated){
                         CommonService.generateCode(6, (code) => {
                              UserModel.findOneAndUpdate({ _id : user.id},{verificationCode : code},function (err, user) {

                                   if(err) return res.json({ status: 'error', message: 'some error occured, Please try later.', data: {} });

                                   CommonService.getTemplate("VERIFICATION-CODE",function(err, template){
                                        if (err) {
                                             return res.json({status:'error', message : err.message});
                                        }
                                        if(template) {
                                             let randomCode = code;
                                             template.description = template.description.replace("{{CODE}}", randomCode);

                                             let mailOptions = {
                                                  from: WEB_EMAIL,
                                                  to: email,
                                                  subject: template.subject,
                                                  html: template.description
                                             }
                                             EmailService.send(mailOptions,function(err, response){
                                                  if(err) {
                                                       console.log("Email Not Sent");
                                                  } else {
                                                       console.log("Email Sent Succesfully");
                                                  }
                                             });
                                        } else {
                                             console.log("Template Not Found");
                                        }
                                   });
                              });
                         });
                         return res.json({status:'error', message : 'User not verified.Please first verify',data :"notvarified" });
                    }
                    UserModelObj.comparePassword(password,user,function(err, validuser) {
                         if (err) {
                              return res.json({status:'error', message : 'some error occured, Please try again later.', data : {}});
                         }
                         if(!validuser){
                              return res.json( {status:'error', message :'You have entered wrong password.',data : {}});
                         }else {

                              user.password = undefined;
                              user.email = email;
                              req.body.platform = req.body.platform || 'WEB';
                              req.body.deviceToken = req.body.deviceToken || '';
                              return res.json({status:'success', message :'You have been successfully login.', data: {user:user,token:JwtService.issueToken(user._id,req.body.platform, req.body.deviceToken)} });
                         }

                    });
               }
          });
     },

     /**--------------------------------------------------------------------------
     | Function    : resetPassword
     | Description : use to reset password
     |--------------------------------------------------------------------------*/
     resetPassword: function (req, res) {
          let reqId = req.query.reqId;
          let password = req.body.password;
          let con_Password = req.body.confirmPassword;

          if (!password) {
               return res.json({status:'error', message :'Password is required',data:{}});
          }
          if (!con_Password ||  (password != con_Password)) {
               return res.json({status:'error', message :'Passwords do not match',data:{}});
          }
          if(req.body.role == 'EMPLOYER') {

               UserModel.findOne({ _id:reqId }).exec(function(err,userData){
                    if (err) {
                         return res.json({status:'error', message :"Some error occured",data:{}});
                    }
                    if(userData != null) {
                         userData.password = req.body.password;
                         userData.fcm = {};
                         userData.fcm.platform = req.body.platform || 'WEB';
                         userData.fcm.deviceToken = req.body.deviceToken || userData._id;
                         userData.save(function(err, data) {
                              console.log("++++++++++",err);
                              if (err) return res.json({status:'error',message:"Some error occured",data:{}});
                              return res.json({status:'success', message : "Your password is succefully updated",data:{_id:userData._id}});
                         });
                    }
               });
          }
     }
}
