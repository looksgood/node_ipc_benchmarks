var id = '04552ebb-8138-f96a-6336-617acac27fc7';
var axon = require('axon');

var sock = axon.socket('push');
sock.bind(3000);

function next() {
	var n = 100;
	while (n--)
	sock.send({
		id : id
	});
	setImmediate(next);
}

next();


process.on('uncaughtException', function(err) {
	process.exit();
});
