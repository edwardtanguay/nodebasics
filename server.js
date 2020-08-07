const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3001;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl = `mongodb+srv://learn:go2goTime@cluster0.hqjr5.mongodb.net/nodebasics.main?retryWrites=true&w=majority`;

const messages = [];

app.get('/messages', (req, res) => {
	res.send(messages);
});

app.post('/messages', (req, res) => {
	messages.push(req.body);
	io.emit('message', req.body);
	res.sendStatus(200);
});

io.on('connection', (socket) => {
	console.log('a user connected');
});

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log('mongo db connection', err);
})

const server = http.listen(port, () => {
	console.log(`Listening on port ${server.address().port}...`);
}); 