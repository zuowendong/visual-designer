export default () => {
	return {
		type: 'input',
		name: 'label',
		message: 'set component label',
		validate(val: string) {
			if (val) return true;
			return 'please enter component name';
		}
	};
};
