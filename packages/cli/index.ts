/* eslint-disable prettier/prettier */

import * as fs from 'node:fs';
import * as path from 'node:path';
import ejs from 'ejs';

const people = ['jack', 'tom', 'lucy'];
const html = ejs.render('<%= people.join(","); %>', { people: people });
console.log(html);

function renderTemplate(src: string, dest: string) {
	const stats = fs.statSync(src);

	// copy directory
	if (stats.isDirectory()) {
		fs.mkdirSync(dest, { recursive: true });
		for (const file of fs.readdirSync(src)) {
			renderTemplate(path.resolve(src, file), path.resolve(dest, file));
		}
		return;
	}
	fs.copyFileSync(src, dest);

	console.log(fs.readFileSync('./template/form.ejs', 'utf-8'));

	const templateRoot = new URL('./template', import.meta.url).pathname;
	console.log(11111111, templateRoot);
}

renderTemplate('./template', './dist');

export default renderTemplate;
