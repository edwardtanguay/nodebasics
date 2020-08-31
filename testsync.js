const getText = (id) => {
	return {
		id: id,
		name: 'Text #' + id,
		seconds: 0
	}
}

const getTexts = (ids) => {
	for (const id of ids) {
		const text = getText(id);
		console.log(`Got ${text.name} with id #${text.id} which took ${text.seconds} seconds.`);
	};
}

getTexts([1, 2, 3, 4]);
getTexts([5, 6, 7, 8]);