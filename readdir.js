var fs = require('fs');
var path = require('path');
var getFilesRecursive = function (dir, done, options = { excludeDirs: [], searchWord: null }) {
	var results = [];
	fs.readdir(dir, function (err, list) {
		if (err) return done(err);
		var i = 0;
		(function next() {
			var file = list[i++];
			if (!file) return done(null, results);
			file = path.resolve(dir, file);
			fs.stat(file, function (err, stat) {
				const numberOfFinds = options.excludeDirs.reduce((acc, excludeDir) => {
					if (file.endsWith(excludeDir)) {
						acc++;
					}
					return acc;
				}, 0);
				if (numberOfFinds == 0) {
					if (stat && stat.isDirectory()) {
						getFilesRecursive(file, function (err, res) {
							results = results.concat(res);
							next();
						}, options);
					} else {
						if (options.searchWord == null || (options.searchWord != null && file.toUpperCase().includes(options.searchWord.toUpperCase()))) {
							results.push(file);
						}
						next();
					}
				} else {
					next();
				}
			});
		})();
	});
};

getFilesRecursive('c:/edward/nwo', function (err, pathAndFileNames) {
	if (err) {
		console.log('sorry, there was a problem: ' + err);
	}
	pathAndFileNames.forEach(pathAndFileName => console.log(pathAndFileName));
}, { excludeDirs: ['node_modules', '.git'], searchWord: 'config' });

// OPTIONS:
//console.dir(files, { 'maxArrayLength': null });
//console.dir(files);
//const fileItems = pathAndFileNames.map(pathAndFileName => ({ pathAndFileName: pathAndFileName, file: path.basename(pathAndFileName) }));
//const fileItems = files.forEach(console.log(file));
//}, { excludeDirs: ['node_modules', '.git'] });
//}, { excludeDirs: ['node_modules', '.git'], searchWord: 'bs-' });
