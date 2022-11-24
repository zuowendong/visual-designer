const ejs = require('ejs');
const prettier = require('prettier');
const fs = require('fs');
const path = require('path');

function createTemplate(config) {
	const file = fs.readFileSync(path.join(__dirname, '../templates/index.ejs'));
	const code = ejs.render(file.toString(), { config });
	return prettier.format(code, { parser: 'html' });
}

module.exports = createTemplate;
