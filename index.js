module.exports = function(seconds) {
	seconds = seconds || 5;
	var transfers = Array(seconds);
	for (var i = 0; i < transfers.length; i++) {
		transfers[i] = {time:Date.now(), transferred:0};
	}

	var head = transfers[0];
	var tail = transfers[transfers.length-1];
	return function(delta) {
		delta = delta || 0;
		head.time = Date.now();
		head.transferred += delta;

		if (head.time - tail.time > seconds * 1000) {
			transfers.unshift({time:head.time, transferred:head.transferred});
			transfers.pop();
			head = transfers[0];
			tail = transfers[transfers.length-1];
		}

		return Math.round(1000 * (head.transferred - tail.transferred) / (head.time - tail.time));
	};
};