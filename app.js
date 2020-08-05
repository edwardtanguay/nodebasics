const dpod = require('./dpod.js');

const list = dpod.fetch_short_phone_list();
const num = dpod.fetch_number_of_territories();
const cities = dpod.fetch_city_list();
const titles = dpod.fetch_field_list('title');
const employee = dpod.fetch_employee_by_id(5);
const notes = dpod.fetch_notes_by_keyword('1992');
const orders = dpod.fetch_orders_for_employee(6);

console.log(list);
console.log(num);
console.log(cities);
console.log(titles);
console.log(employee);
console.log(notes);
console.log(orders);
console.log(orders.length);
