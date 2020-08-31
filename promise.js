const shopping = (list) => {
	return new Promise((resolve, reject) => {
		let count = 0;
		list.forEach(item => {
			resolve(item, ++count);
		});
		finished(`bought ${list.length} things`);
	});
}
