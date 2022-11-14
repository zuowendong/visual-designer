const e = [
	{
		id: 'base',
		name: '\u57FA\u672C\u914D\u7F6E',
		attrs: [
			{ name: '\u5BBD\u5EA6', key: 'width', type: 'dui-input-number', value: 400 },
			{ name: '\u9AD8\u5EA6', key: 'height', type: 'dui-input-number', value: 50 }
		]
	},
	{
		id: 'selectSetting',
		name: '\u4E0B\u62C9\u6846\u914D\u7F6E',
		attrs: [
			{ name: '\u6807\u7B7E\u540D', key: 'label', type: 'dui-input-text', value: 'select' },
			{
				name: '\u9009\u62E9\u503C',
				key: 'modelValue',
				type: 'dui-input-text',
				value: 'default select'
			},
			{ name: '\u9009\u9879', key: 'options', type: 'dui-layout-array', value: [] }
		]
	}
];
export { e as properties };
