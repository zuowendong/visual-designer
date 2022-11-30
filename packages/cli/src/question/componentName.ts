export default () => {
	return {
		type: 'input',
		name: 'componentName',
		message: 'set package name',
		validate(val: string) {
			if (val) return true;
			return 'please enter component name';
		}
	};
};
