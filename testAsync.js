const getText = (id) => {
	return new Promise((resolve, rejects) => {
		const seconds = Math.floor(Math.random() * 4) + 1;
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
	for (const id of ids) {
		const text = await getText(id);
		console.log(`Got ${text.name} with id #${text.id} which took ${text.seconds} seconds.`);
	}
}

getTexts([1, 2, 3, 4]);
getTexts([5, 6, 7, 8]);