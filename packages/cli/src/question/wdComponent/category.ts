export default () => {
	return {
		type: 'list',
		name: 'categoryName',
		message: 'select category name',
		choices: [
			{ name: '表单类' },
			{ name: '文本类' },
			{ name: '图表类' },
			{ name: '展示类' },
			{ name: '媒体类' }
		]
	};
};
