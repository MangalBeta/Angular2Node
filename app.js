const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require("fs");

global.APP_PATH = path.resolve(__dirname);

// requiring database file
const db = require(APP_PATH + '/config/Db');

var app = express();

//process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'local';
// let http = require('http').Server(app);
// let io = require('socket.io')(http);
var io = require('socket.io')();
app.io = io;
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
//
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/dist')));
// app.use(express.static(__dirname, '/'));
// app.use(express.static(__dirname, '/server/'));
// app.use(express.static(__dirname + "/..", '/client/'));
// app.use(express.static(__dirname + '/node_modules'));

// app.engine('html', function (path, opt, fn) {
//      fs.readFile(path, 'utf-8', function(err, str) {
//           if(err) return str;
//           return fn (null, str);
//      })
// });
// app.get('/chat', function(req, res){
// 	res.redirect('/');
// });
// Requiring Routes into the application
require(APP_PATH + '/routes/AuthRoute')(app, express);
require(APP_PATH + '/routes/ChatRoute')(app, express, io);
require(APP_PATH + '/routes/index')(app, express);

// catc   h 404 and forward to error handler
app.use(function(req, res, next) {
     //res.io = io;
     var err = new Error('Not Found');
     err.status = 404;
     next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
     app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
               message: err.message,
               error: err
          });
     });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.render('error', {
          message: err.message,
          error: {}
     });
});


//module.exports = app;
module.exports = app;
