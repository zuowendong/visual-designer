const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

function createTemplate() {
	const file = fs.readFileSync(path.join(__dirname, '../templates/index.ejs'));

	const code = ejs.render(file.toString(), {});

	console.log('createTmeplate.js', code);

	return code;
}

module.exports = createTemplate;
