const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const messages = [
	{ name: 'Jim', text: '111' },
	{ name: 'Rob', text: '222' },
	{ name: 'Anders', text: '333' },
	{ name: 'George', text: '444' }
];

app.get('/messages', (req, res) => {
	res.send(messages);
});

app.post('/messages', (req, res) => {
	console.log(req.body);
	messages.push(req.body);
	res.sendStatus(200);
});

const server = app.listen(port, () => {
	console.log(`Listening on port ${server.address().port}...`);
}); 