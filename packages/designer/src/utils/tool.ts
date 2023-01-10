export const transformHump = (str: string) => {
	return str
		.replace(/-(\w)/g, function ($0, $1) {
			return $1.toUpperCase();
		})
		.replace(/^\w/, function ($0, $1) {
			return $0.toUpperCase();
		});
};
