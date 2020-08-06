const express = require('express');

const app = express();
const port = 3001;

app.use(express.static(__dirname));
const server = app.listen(port, () => {
	console.log(`Listening on port ${server.address().port}...`);
}); 