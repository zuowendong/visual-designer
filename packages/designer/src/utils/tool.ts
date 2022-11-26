export function deepCopy(target: any) {
	if (typeof target == 'object') {
		const result: any = Array.isArray(target) ? [] : {};
		for (const key in target) {
			if (typeof target[key] == 'object') {
				result[key] = deepCopy(target[key]);
			} else {
				result[key] = target[key];
			}
		}
		return result;
	}
	return target;
}

export const transformHump = (str: string) => {
	return str
		.replace(/-(\w)/g, function ($0, $1) {
			return $1.toUpperCase();
		})
		.replace(/^\w/, function ($0, $1) {
			return $0.toUpperCase();
		});
};
