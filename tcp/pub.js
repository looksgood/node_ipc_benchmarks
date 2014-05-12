var id = '04552ebb-8138-f96a-6336-617acac27fc7';

var net = require('net');

var client = net.connect({
	port : 8124
}, function() {//'connect' listener

	function next() {
		var n = 100;
		while (n--)
		client.write(JSON.stringify({
			id : id
		}) + '\n');
		setImmediate(next);
	}

	next();
});
