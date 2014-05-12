var id = '04552ebb-8138-f96a-6336-617acac27fc7';
var dgram = require('dgram');
var sock = dgram.createSocket('udp4');

function next() {
	var n = 100;
	while (n--) {
		var buf = new Buffer(JSON.stringify({
			id : id
		}));
		sock.send(buf, 0, buf.length, 5322, '127.0.0.1');
	}
	setImmediate(next);
}

next();

process.on('uncaughtException', function(err) {
	process.exit();
});
