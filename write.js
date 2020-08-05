const fs = require('fs');
const data = require('./data.json');

// synchronous data access to JSON files
console.log('--- before 1');
console.log(data.name);
console.log(data.server.name);
console.log('--- after 1');

// asynchronous data access to JSON files
console.log('--- before 2');
fs.readFile('./data.json', 'utf-8', (err, rawData) => {
	const data = JSON.parse(rawData);
	console.log(data.name);
});
console.log('--- after 2');