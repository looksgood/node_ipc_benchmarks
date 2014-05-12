var cp = require('child_process');

var pub = cp.fork(__dirname + "/pub.js");

var sub = cp.fork(__dirname + "/sub.js");

pub.on('message', function(message) {
	if (sub.killed)
		return;
	sub.send(message)
});

/**
 *
 *
 */

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
