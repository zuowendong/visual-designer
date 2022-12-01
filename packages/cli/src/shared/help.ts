import globSync from 'glob';

export function glob(pattern: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		globSync(pattern, (err, files) => {
			if (err) {
				reject(err);
			} else {
				resolve(files);
			}
		});
	});
}

export function formatComponentName(name: string) {
	if (name.includes('Wd')) {
		return name;
	} else {
		return `Wd${name.charAt(0).toUpperCase()}${name.slice(1)}`;
	}
}

export function findTempFileType(file: string) {
	const unitMap: { [k: string]: string } = {
		build: '.json',
		index: '.vue',
		properties: '.ts'
	};
	const type = file.split('/')[file.split('/').length - 1].split('.')[0];
	return unitMap[type];
}

export const bigCamelize = (s: string): string =>
	camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase());

export const camelize = (s: string): string =>
	s.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase());
