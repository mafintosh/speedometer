module.exports = function(seconds) {
	seconds = seconds || 5;
	var transfers = [{time:Date.now(), transferred:0},{time:Date.now(), transferred:0}];
	var tail = transfers[1];
	var head = transfers[0];

	return function(delta) {
		delta = delta || 0;
		head.time = Date.now();
		head.transferred += delta;

		if (head.time - tail.time > transfers.length * 1000) {
			transfers.unshift({time:head.time, transferred:head.transferred});
			if (transfers.length > seconds) transfers.pop();
			head = transfers[0];
			tail = transfers[transfers.length-1];
		}

		return 1000 * (head.transferred - tail.transferred) / Math.max(1, head.time - tail.time);
	};
};