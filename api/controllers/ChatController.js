/*
* Author : Mangal Singh
* Module : InfractionController
* Description : Use to report User or listing if
*/
const AppMessages = require(APP_PATH + '/config/Message.js');
const AppConstants = require(APP_PATH + '/config/Constant.js');
const CommonService = require(APP_PATH + '/api/services/CommonService.js');
const UserModel = require(APP_PATH + '/api/models/UserModel.js');

class ChatController  {

     /**--------------------------------------------------------------------------
     Function    : list
     Description : list online users
     --------------------------------------------------------------------------*/
     onlineUsers () {
          UserModel.find({isLogin : true, role : 'USER'}).exec(function(err, OnlineUsers){
               return OnlineUsers;
          });
     }

}

module.exports = new ChatController();
