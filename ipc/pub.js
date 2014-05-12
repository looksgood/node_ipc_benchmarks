var id = '04552ebb-8138-f96a-6336-617acac27fc7';

function next() {
	var n = 100;
	while (n--)
	process.send({
		id : id
	});
	setImmediate(next);
}

next();


process.on('uncaughtException', function(err) {
	process.exit();
});
