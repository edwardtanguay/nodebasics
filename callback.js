sleep = function (ms) {
	var start = new Date().getTime();
	let now = 0;
	let difference = 0;
	for (var i = 0; i < 1e17; i++) {
		now = new Date().getTime();
		difference = now - start;
		if (difference > ms) {
			break;
		}
	}
}

const goShopping = (list, cbItemReport, cbFinished, cbError) => {
	let count = 0;
	let numberFound = 0;

	const randomError = Math.floor(Math.random() * 3);
	if (randomError == 0) {
		cbError('Something went wrong, trip aborted.');
	} else {
		list.forEach(item => {
			const randomFound = Math.floor(Math.random() * 4);
			if (randomFound > 0) {
				cbItemReport(item, true, ++count);
				numberFound++;
			} else {
				cbItemReport(item, false, ++count);
			}
			sleep(1000);
		})
		cbFinished(`Bought ${numberFound} things.`);
	}
}

goShopping(['milk', 'eggs', 'sugar', 'bread'],
	(item, found, count) => {
		console.log(`Item #${count} "${item}" was ${found ? 'found' : 'not found'}.`);
	},
	(message) => {
		console.log("Returned from shopping: " + message);
	},
	(error) => {
		console.log("ERROR: " + error);
	});
	
