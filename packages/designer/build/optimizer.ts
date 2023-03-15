const vendorLibs: { match: string[]; output: string }[] = [
	{
		match: ['element-plus'],
		output: 'element'
	},
	{
		match: ['lodash-es'],
		output: 'lodashEs'
	}
];

export const configManualChunk = (id: string) => {
	if (/[\\/]node_modules[\\/]/.test(id)) {
		const matchItem = vendorLibs.find((item) => {
			const reg = new RegExp(`[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`, 'ig');
			return reg.test(id);
		});
		return matchItem ? matchItem.output : null;
	}
};
