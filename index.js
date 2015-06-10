var RollingSpider = require('rolling-spider');

var rs = new RollingSpider();

console.log('attempt to connect to Rolling Spider ...');
rs.connect(function(error) {
  if (error) {
    throw error;
  }

  console.log('Rolling Spider connected successfully, setting up ...');
  rs.setup(function() {
    console.log('Rolling Spider setup successfully, flat trim + starting ping ...');
    rs.flatTrim();
    rs.startPing();
    rs.flatTrim();

    setTimeout(function() {
      console.log('Rolling Spider take off!');
      rs.takeOff(function() {
        console.log('Rolling Spider in air ...');

        setTimeout(function() {
          console.log('Rolling Spider land!');
          rs.land(function() {
            console.log('Rolling Spider landed ... bye');
            process.exit(0);
          });
        }, 2000);
      });
    }, 1000);
  });
});
