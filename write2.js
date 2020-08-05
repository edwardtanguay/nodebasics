const fs = require('fs');

const servers = {
	"62732": {
		name: 'External_83743',
		type: 'Linux',
		whenCreated: '2020-01-01',
		drives: 3
	},
	"893472": {
		name: 'External_32333',
		type: 'Windows',
		whenCreated: '2020-04-01',
		drives: 2
	}
};

for (let x = 1; x <= 10000; x++) {
	servers[x] = {
		'type': 'test',
		'identifier': x
	}
}

fs.writeFile('servers.json', JSON.stringify(servers), err => {
	if (err) throw err;
	console.log('finished');
});