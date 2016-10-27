var moment = require('moment');

console.log(moment().format());

// Unix timestamps
// January 1st 1970 @ 12:00 am -> 0
// January 1st 1970 @ 12:01 am -> 60
// December 31st 1969 @ 23:59 -> -60

var now = moment();

console.log('current timestamp', now.unix());

var timestamp = 1476959115;
var currentMoment = moment.unix(timestamp);

console.log('currentMoment: ', currentMoment.format('Do MMM YYYY @ H:mm a'));