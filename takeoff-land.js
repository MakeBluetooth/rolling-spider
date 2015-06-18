var RollingSpider = require('rolling-spider');

var rs = new RollingSpider();

function connect() {
  console.log('connecting ...');
  rs.connect(connectCallback);
}

function connectCallback(error) {
  if (error) {
    console.log('error connecting: ' + error);
    process.exit(-1);
  }

  console.log('connected, setting up ...');
  rs.setup(setupCallback);
}

function setupCallback() {
  console.log('set up, flat trimming and starting ping ...');

  rs.flatTrim();
  rs.startPing();
  rs.flatTrim();

  setTimeout(takeOff, 1000); // delay take off, so commands can be processed
}

function takeOff() {
  console.log('taking off ...');
  rs.takeOff(takeOffCallback);
}

function takeOffCallback() {
  console.log('taken off');
  setTimeout(land, 2000);
}

function land() {
  console.log('landing ...');
  rs.land(landCallback);
}

function landCallback() {
  console.log('landed')
  process.exit(0);
}

connect();
