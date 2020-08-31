const getText = (id) => {
	return new Promise((resolve, rejects) => {
		const seconds = Math.floor(Math.random() * 4) + 1;
		const nnn = seconds / nn;
		console.log('here');
		setTimeout(() => {
			resolve({
				id: id,
				name: 'Text #' + id,
				seconds: seconds
			});
		}, seconds * 1000);
	});
}

const getTexts = async (ids) => {
	try {
		for (const id of ids) {
			const text = await getText(id);
			console.log(`Got ${text.name} with id #${text.id} which took ${text.seconds} seconds.`);
		}
	} catch (error) {
		const errorLines = error.split('\n');
		//console.log(errorLines.length);
		//console.log('there was an error: ', error);
	}
}


getTexts([1, 2, 3, 4]);
getTexts([5, 6, 7, 8]);