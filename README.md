# speedometer

Speed measurement in Javascript

	npm install speedometer

## Usage

``` js
var speedometer = require('speedometer');
var fs = require('fs');
var speed = speedometer();

// Let'e measure how fast we can read from /dev/urandom
var stream = fs.createReadStream('/dev/urandom');

stream.on('data', function(data) {
	var bytesPerSecond = speed(data.length);

	process.stdout.write(bytesPerSecond+' bytes/second\n');
	process.stdout.moveCursor(0, -1); // move the cursor up
});
```

You can always get the current speed by calling `speed()`.

Per default `speedometer` uses a 5 second buffer.
To change this simply pass another value to the constructor

``` js
var speed = speedometer(20); // uses a 20s buffer instead
```

## License

MIT
