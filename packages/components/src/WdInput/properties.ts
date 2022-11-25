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
		id: 'inputSetting',
		name: '输入框配置',
		attrs: [
			{
				name: '标签名',
				key: 'label',
				type: 'dui-input-text',
				value: '姓名'
			},
			{
				name: '输入值',
				key: 'modelValue',
				type: 'dui-input-text',
				value: 'wendZzoo'
			},
			{
				name: '字段',
				key: 'field',
				type: 'dui-input-text',
				value: 'name'
			}
		]
	}
];
