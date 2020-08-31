// CALLBACK
const getData = (id, callback) => {
	setTimeout(() => {
		if (!id) return callback('ERROR: id is missing')
		return callback("The data for id " + id);
	}, 1000)
};

getData(111, console.log);
getData(222, console.log);
getData(null, console.log);

// PROMISE
const getData2 = id => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!id) reject('id is missing');
			resolve("The data for id " + id);
		}, 1000);
	});
};
getData2(333).then(console.log).catch((message) => console.log("ERROR: " + message));
getData2(444).then(console.log).catch((message) => console.log("ERROR: " + message));
getData2(null).then(console.log).catch((message) => console.log("ERROR: " + message));