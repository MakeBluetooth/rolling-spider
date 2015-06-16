var RollingSpider = require('rolling-spider');

var rs = new RollingSpider();

console.log('connecting ...');
rs.connect(function(error) {
  if (error) {
    console.log('error connecting: ' + error);
    process.exit(-1);
  }

  console.log('connected, setting up ...');
  rs.setup(function() {
    console.log('set up');
    rs.flatTrim();
    rs.startPing();
    rs.flatTrim();

    setTimeout(takeOff, 1000);

    setTimeout(land, 10000);
  });
});

function takeOff() {
  console.log('taking off ...');
  rs.takeOff();
}

function land() {
  console.log('landing ...');
  rs.land(function() {
    process.exit(0);
  });
}
