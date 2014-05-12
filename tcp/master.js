var cp = require('child_process');

var sub = cp.fork(__dirname + "/sub.js");
setTimeout(function() {

	var pub = cp.fork(__dirname + "/pub.js");

	sub.on('close', function(code) {
		pub.kill('SIGHUP');
		process.exit();
	});

	pub.on('close', function(code) {
		console.log('child process exited with code ' + code);
	});

	process.on('uncaughtException', function(err) {
		process.exit();
	});
}, 1000);

/**
 *
 *
 */

