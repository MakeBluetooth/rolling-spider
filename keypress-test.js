var keypress = require('keypress');

keypress(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key.name);

  if (key.ctrl && key.name == 'c') {
    process.exit();
  }
});
