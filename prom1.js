const getName = (idCode) => {
	return new Promise((resolve, reject) => {
		const chance = Math.floor(Math.random() * 3) + 1;
		if (chance == 1) {
			resolve(`Found record for "${idCode}".`);
		} else {
			reject('ERROR #' + chance);
		}
	});
};


getName('james')
	.then((result) => console.log('SUCCESS: ' + result))
	.catch((error) => console.log(error))
	.finally(() => {
		console.log('(close all connections)');
	});