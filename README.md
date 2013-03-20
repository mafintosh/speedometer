# speedometer

Meassure speed the simple way

	npm install speedometer

## Usage

``` js
var speedometer = require('speedometer');
var speed = speedometer();

stream.on('data', function(data) {
	var bytesPerSecond = speed(data.length);
});
```

Per default `speedometer` uses a 5 second buffer.
To change this simply pass another value to the constructor

``` js
var speed = speedometer(10); // uses a 10s buffer instead
```

## License

MIT