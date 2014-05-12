var id = '04552ebb-8138-f96a-6336-617acac27fc7';
var punt = require('punt');

var sock = punt.connect('localhost:5000');

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
