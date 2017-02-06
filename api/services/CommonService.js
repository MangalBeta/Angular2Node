/*
Author :- MAngal Singh
Purpose :- Common Service used to provide utility methods
*/

module.exports = {

     generateOtp : function (num) {
          let text = "";
          let possible = "0123456789";
          for( let i = 0; i < num; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
     },
     generateCode:function(len,cb){
          let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
          let charSetLength = charSet.length;
          let code = '';
          let i = 0;
          while (i < len){
               code += charSet[Math.floor((Math.random() * charSetLength - 1 ) + 1)];
               i++;
          }
          return cb(code);
     },
     generateRandom:function(num){
          let text = "";
          possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for( let i=0; i < num; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
     },

     /**
     Function to get email template
     */
     getTemplate : function (referenceId, callback) {
          const TemplateModel = require(APP_PATH + '/api/models/template.js');
          TemplateModel
          .findOne(
               {
                    "title" : referenceId
               },
               {
                    "status" : 0,
                    "isDeleted" : 0,
                    "createdDate" : 0,
                    "modifiedDate" : 0
               }
          )
          .exec(
               function (err, template) {
                    if(err) {
                         callback (true, null);
                    } else {
                         if(template) {
                              callback (null, template);
                         } else {
                              callback (true, null);
                         }
                    }
               }
          )
     }


};
