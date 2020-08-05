const fs = require('fs');
const employees = require('./employees.json');
const orders = require('./orders.json');
const dpod = require('./dpod.js');

exports.fetch_short_phone_list = () => {
	return employees.map(emp => ({ "name": `${emp.firstName} ${emp.lastName}`, "city": emp.address.city, "phone": emp.address.phone }));
};

exports.fetch_number_of_territories = () => {
	return employees.reduce((acc, emp) => {
		acc += emp.territoryIDs.length;
		return acc;
	}, 0);
};

exports.fetch_city_list = () => {
	return employees.map(emp => emp.address.city);
};

exports.fetch_field_list = (field) => {
	return employees.map(emp => emp[field]);
};

exports.fetch_employee_by_id = (id) => {
	return employees.find(emp => emp.employeeID == id);
};

exports.fetch_notes_by_keyword = (keyword) => {
	const emps = employees.filter(emp => emp.notes.includes(keyword));
	return emps.map(emp => ({ "name": `${emp.firstName} ${emp.lastName}`, "notes": emp.notes }));
};

exports.fetch_orders_for_employee = (empId) => {
	const empOrders = orders.filter(ord => ord.employeeID == empId);
	return empOrders.map(ord => {
		const emp = dpod.fetch_employee_by_id(ord.employeeID);
		return {
			id: ord.orderID, date: ord.orderDate.substr(0, 10), customer: ord.shipName,
			salesperson: `${emp.firstName} ${emp.lastName}`
		}
	});
};