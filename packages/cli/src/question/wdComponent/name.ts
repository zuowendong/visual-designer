export default () => {
	return {
		type: 'input',
		name: 'name',
		message: 'set component name',
		validate(val: string) {
			if (val) return true;
			return 'please enter component name';
		}
	};
};
