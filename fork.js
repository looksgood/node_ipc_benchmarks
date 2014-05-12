var cp = require('child_process');

var files = ['punt/master', 'axon/master', 'udp/master', 'tcp/master', 'ipc/master'];

console.log();
function next() {

	var file = files.shift();
	if (!file) {
		return process.exit();
	}
	console.log('  ' + file);
	console.log();
	cp.fork(__dirname + "/" + file).on('close', next);
}

next()