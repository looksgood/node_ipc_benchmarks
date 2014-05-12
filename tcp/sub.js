var humanize = require('humanize-number');
var net = require('net');
var readline = require('readline');
var server = net.createServer(function(sock) {//'connection' listener

	readline.createInterface({
		input : sock,
		output : process.stdout,
		terminal : false
	}).on('line', function(buf) {
		JSON.parse(buf);
		if (n++ % ops == 0) {
			var ms = Date.now() - prev;
			var sec = ms / 1000;
			var persec = ops / sec | 0;
			results.push(persec);
			process.stdout.write('\r  [' + persec + ' ops/s] [' + n + ']');
			prev = Date.now();
		}
	});

});

/**
 *
 *
 */

var n = 0;
var ops = 5000;
var results = [];
var prev = start = Date.now();
var bytes = 256;

function sum(arr) {
	return arr.reduce(function(sum, n) {
		return sum + n;
	});
}

function min(arr) {
	return arr.reduce(function(min, n) {
		return n < min ? n : min;
	});
}

function median(arr) {
	arr = arr.sort();
	return arr[arr.length / 2 | 0];
}

function done() {
	var ms = Date.now() - start;
	var avg = n / (ms / 1000);
	console.log('\n');
	console.log('      min: %s ops/s', humanize(min(results)));
	console.log('     mean: %s ops/s', humanize(avg | 0));
	console.log('   median: %s ops/s', humanize(median(results)));
	console.log('    total: %s ops in %ds', humanize(n), ms / 1000);
	console.log('  through: %d mb/s', ((avg * bytes) / 1024 / 1024).toFixed(2));
	console.log();
	process.exit();
}

process.on('SIGINT', done);

server.listen(8124, function() {//'listening' listener

	setTimeout(done, 10000);
});
