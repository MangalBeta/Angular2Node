module.exports = function(app, express, io) {
     let router = express.Router();
     const UserModel = require(APP_PATH + '/api/models/UserModel.js');
     const ConversationModel = require(APP_PATH + '/api/models/ConversationModel.js');
     let sockets = [];

     router.get('/list/:userId/:fromId', function (req, res) {
          ConversationModel.find({$or : [{from : req.params.userId, to : req.params.fromId}, {to : req.params.userId, from : req.params.fromId}]}).populate({path:'from to'}).exec(function(err, msgArr){
               res.json({result :msgArr});
          });
     });
     app.use('/chat', router);

     // socket.io events
     io.sockets.on( "connection", function( socket ) {
          console.log( "A user connected" );

          // Register your client with the server, providing your username
          socket.on('init', function(data) {
               //console.log("OHh, I am registered on Sockets");
               //sockets[username] = socket;
               socket.join(data.userId);
          });

          socket.on('list onlineUsers', function () {
               UserModel.find({isLogin : true}).exec(function(err, userArr){
                    io.emit('list onlineUsers', userArr);
               });
          });

          socket.on('list message', function () {
               ConversationModel.find({}).populate({path : "from to"}).exec(function(err, msgArr){
                    io.emit('list message', msgArr);
               });
          });

          socket.on('chat message', function (obj) {
               var mongoose = require('mongoose');
               var from = mongoose.Types.ObjectId(obj.from);
               var to = mongoose.Types.ObjectId(obj.to);

               //console.log(from+ "========" + to);
               ConversationModel(obj).save(function(err, msgObj){
                    if(err) {
                         return console.log("Some Error Occured");
                    }
                    ConversationModel.find(
                         {
                              $or : [
                                   {from : from, to : to},
                                   {from :to, to : from}
                              ]
                         }).
                         populate({path : "from to"}).
                         limit(1).
                         sort({ "createdDate" : -1 }).
                         exec(function(err, msgObj){
                              //console.log(msgObj);
                              //socket.to(obj.to).emit('chat message', msgObj[0]);
                              io.sockets.in(obj.to).emit('chat message', msgObj[0]);

                              //io.emit('chat message', msgObj[0]);
                         });
                    });
               });

               socket.on('disconnect', function(){
                    console.log('user disconnected');
               });
          });
     }
