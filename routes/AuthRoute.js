module.exports = function(app, express) {
      let router = express.Router();
      let routeObj = require(APP_PATH + '/api/controllers/AuthController.js');

     //  router.post('/register', routeObj.register);
     //  router.post('/confirmAccount', routeObj.confirmOtp);
     //  router.get('/varifyEmail', routeObj.varifyEmail);
     //  router.post('/confirmAccountForgot', routeObj.confirmOtpForgot);
     //  router.post('/reSendOtp', routeObj.reSendOtp);
     //  router.post('/login', routeObj.login);
     //  router.post('/forgot-password', routeObj.forgot);
     //  router.post('/resetPassword', routeObj.resetPassword);
     //  router.get('/checkUniqueEmail', routeObj.checkUniqueEmail);
     //  router.get('/checkUniqueMobile', routeObj.checkUniqueMobile);
    router.post('/auth/register', routeObj.register);
    router.post('/auth/login',routeObj.login);
    router.get('/auth/verify-email', routeObj.varifyEmail);
    router.post('/auth/forgot', routeObj.forgot);
    router.post('/auth/verifycode', routeObj.confirmOtpForgot);
    router.post('/auth/resetPassword', routeObj.resetPassword);
    router.get('/auth/resendOtp', routeObj.reSendOtp);

      router.get('/*', function (req, res, next) {
             res.sendFile(path.join(__dirname, "/../client/dist", "index.html"));
        });
      app.use('/api', router);
}
