var async = require('async');

var RollingSpider = require('rolling-spider');

var rs = new RollingSpider();

async.series([
  connect,
  setup,
  flatTrimAndStartPing,
  takeOff,
  inAirDelay,
  land,
  exit
]);

function connect(callback) {
  console.log('connecting ...');
  rs.connect(callback);
}

function setup(callback) {
  console.log('setting up ...');
  rs.setup(callback);
}

function flatTrimAndStartPing(callback) {
  console.log('flat trimming and starting ping ...');
  rs.flatTrim();
  rs.startPing();
  rs.flatTrim();

  setTimeout(callback, 1000); // delay while commands are processed
}

function takeOff(callback) {
  console.log('taking off ...');
  rs.takeOff(callback);
}

function inAirDelay(callback) {
  setTimeout(callback, 2000);
}

function land(callback) {
  console.log('landing ...');
  rs.land(callback);
}

function exit() {
  process.exit(0);
}
