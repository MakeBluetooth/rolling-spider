var keypress = require('keypress');
var RollingSpider = require('rolling-spider');

keypress(process.stdin);

var active = true;

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

  setTimeout(ready, 1000);
}

function ready() {
  console.log('ready to receive commands!');
  console.log();

  clearActive();
}

process.stdin.setRawMode(true);

function clearActive() {
  active = false;
}

process.stdin.on('keypress', function (ch, key) {
  if (key.ctrl && key.name == 'c') {
    process.exit();
  }

  if (active) {
    return;
  }
  active = true;

  if (key.name === 't') {
    console.log('taking off');
    rs.takeOff();
  } else if (key.name === 'l') {
    console.log('landing');
    rs.land();
  }

  setTimeout(clearActive, 100);
});

connect();
