var keypress = require('keypress');

keypress(process.stdin);

var active = false;

process.stdin.setRawMode(true);

function clearActive() {
  active = false;
}

process.stdin.on('keypress', function (ch, key) {
  if (active) {
    return;
  }
  active = true;

  console.log('got "keypress"', key.name);

  if (key.ctrl && key.name == 'c') {
    process.exit();
  }

  setTimeout(clearActive, 100);
});
