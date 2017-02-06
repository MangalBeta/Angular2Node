const moment = require('moment');

module.exports = {
  getIntervalInMiliSeconds : function(startDate){
    var now = moment();
    startDate = moment(startDate);
    return now.diff(startDate);
  },
  getTodayAndTomorowDate: function(){
    let today = moment().startOf('day');
    let tomorrow = moment(today).add(1, 'days');

    return { today : today, tomorrow : tomorrow };
  },
  getTodayAndThreeDate: function(){
    let today = moment().startOf('day');
    let thirdDay = moment(today).add(3, 'days');
    return { today : today, thirdDay : thirdDay };
  },

  getYesterDayDate: function(){
       return moment().subtract(1,'days');
  }

};
