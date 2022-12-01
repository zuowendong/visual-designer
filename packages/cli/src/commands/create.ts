import ejs from 'ejs';
import { removeSync, readFileSync, copySync, pathExistsSync, writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import logger from '../shared/logger';
import { wdComponentQuestions } from '../question/index';
import type { IComponentConfig } from '../types/config';
import { formatComponentName, glob, findTempFileType } from '../shared/help';

function createConfig(configAnswer: IComponentConfig) {
	const categoryMap: { [k: string]: string } = {
		表单类: 'form',
		文本类: 'text',
		图表类: 'chart',
		展示类: 'display',
		媒体类: 'media'
	};
	return {
		name: configAnswer.name,
		label: configAnswer.label,
		categoryName: configAnswer.categoryName,
		categoryKey: categoryMap[configAnswer.categoryName]
	};
}

async function renderTemplates(componentFolder: string, config: IComponentConfig) {
	const templateFiles = await glob(`${componentFolder}/**/*.ejs`);
	templateFiles.forEach((file) => {
		const templateCode = readFileSync(file, { encoding: 'utf-8' });
		const code = ejs.render(templateCode, config);
		const genFile = file.replace('.ejs', findTempFileType(file));
		writeFileSync(genFile, code);
		removeSync(file);
	});
}

export async function create() {
	logger.title('\n✨✨ Create a component ! \n');
	const answer = await wdComponentQuestions();
	const config = createConfig(answer);
	const SRC_DIR = resolve(process.cwd(), 'src');
	const componentFolder = resolve(SRC_DIR, formatComponentName(config.name));
	if (pathExistsSync(componentFolder)) {
		logger.warning(
			`🚫 ${formatComponentName(config.name)} already exist and cannot be recreated...`
		);
		return;
	}
	copySync(resolve(__dirname, '../../template/createWdComp'), componentFolder);
	await renderTemplates(componentFolder, {
		...config,
		name: formatComponentName(config.name)
	});
}
