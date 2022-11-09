import { IProperties } from '../types';

export const properties: IProperties[] = [
	{
		id: 'base',
		name: '基本配置',
		attrs: [
			{
				name: '宽度',
				key: 'width',
				type: 'dui-input-number',
				value: 200
			},
			{
				name: '高度',
				key: 'height',
				type: 'dui-input-number',
				value: 50
			}
		]
	},
	{
		id: 'selectSetting',
		name: '下拉框配置',
		attrs: [
			{
				name: '标签名',
				key: 'label',
				type: 'dui-input',
				value: 'select'
			},
			{
				name: '选择值',
				key: 'modelValue',
				type: 'dui-input',
				value: 'default select'
			},
			{
				name: '选项',
				key: 'options',
				type: 'dui-layout-array',
				value: []
			}
		]
	}
];
