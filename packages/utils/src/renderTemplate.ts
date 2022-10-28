import * as fs from 'node:fs';
import * as path from 'node:path';
import ejs from 'ejs';

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

	const filename = path.basename(src);
	console.log(filename);

	// 递归每个文件修改
	const templateStr = fs.readFileSync(src, 'utf-8');
	const people = ['jack', 'tom', 'lucy'];
	const content = ejs.render(templateStr, { people: people });
	fs.writeFileSync(`${dest}`, content);

	const genFilePath = dest.replace('ejs', 'vue');
	fs.rename(dest, genFilePath, function () {});
}

renderTemplate('./template', './dist');

export default renderTemplate;
