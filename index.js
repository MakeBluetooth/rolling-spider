var RollingSpider = require('rolling-spider');

var rs = new RollingSpider();

console.log('attempt to connect to Rolling Spider ...');
rs.connect(function(error) {
  if (error) {
    throw error;
  }

  console.log('Rolling Spider connected successfully, setting up ...');
  rs.setup(function() {
    console.log('Rolling spider setup successfully, starting ping ...');
    rs.startPing();

  });
});
