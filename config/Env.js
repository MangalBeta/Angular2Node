let constants = require(APP_PATH + "/config/Constant.js");

module.exports = function(){
     switch(process.env.NODE_ENV){

          case 'local':
          return {
               SITEURl : constants.LOCALURl,
               MONGODB : constants.MONGODB.LOCALHOST,
          };
          default:
          return {
               SITEURl : constants.LOCALURl,
               MONGODB : constants.MONGODB.LOCALHOST,
          };
     }
};
