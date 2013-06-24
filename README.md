# speedometer

Speed measurement in Javascript

	npm install speedometer

## Usage

``` js
var speedometer = require('speedometer');
var speed = speedometer();

stream.on('data', function(data) {
	var bytesPerSecond = speed(data.length); // just call speed with the number of bytes transferred

	console.log('speed is '+bytesPerSecond)
});

setInterval(function() {
	console.log('current speed is '+speed());
}, 1000);
```

Per default `speedometer` uses a 10 second buffer.
To change this simply pass another value to the constructor

``` js
var speed = speedometer(20); // uses a 20s buffer instead
```

## License

MIT
