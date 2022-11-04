import { IProperties } from '../types';

export const properties: IProperties[] = [
	{
		name: '标签名',
		key: 'label',
		type: 'dui-input',
		value: 'select'
	},
	{
		name: '默认值',
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
];
