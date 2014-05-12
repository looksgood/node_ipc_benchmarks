var id = '04552ebb-8138-f96a-6336-617acac27fc7';

var client = require('redis').createClient(6379, 'localhost');

function next() {
	var n = 100;
	while (n--)
	client.publish('chan1', JSON.stringify({
		id : id
	}));
	setImmediate(next);
}

next();

process.on('uncaughtException', function(err) {
	process.exit();
});
