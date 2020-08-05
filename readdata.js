const fs = require('fs');
const data = require('./data.json');

// for(const emp of data) {
// 	console.log(emp.employeeID);
// }

// query --> new array of objects
const addressInfos = data.map(emp => ({ "name": `${emp.firstName} ${emp.lastName}`, "city": emp.address.city, "phone" : emp.address.phone}));

// query --> get sum from all objects
const numberOfTerritories = data.reduce((acc, emp) => {
	acc += emp.territoryIDs.length;
	return acc;
}, 0);

console.log(addressInfos);
console.log(numberOfTerritories);