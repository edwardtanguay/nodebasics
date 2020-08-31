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
		})
		cbFinished(`Bought ${numberFound} things.`);
	}
}

console.log('111');
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
console.log('222');
