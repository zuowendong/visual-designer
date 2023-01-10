import { IProperties } from '../types';
import baseProperty from '../baseProperty';

export const properties: IProperties[] = [
	{
		id: 'base',
		name: '基本配置',
		attrs: [
			{ name: '宽度', key: 'width', type: 'dui-input-number', value: 500 },
			{ name: '高度', key: 'height', type: 'dui-input-number', value: 300 },
			...new baseProperty().arttrs,
			{ name: '背景色', key: 'bgColor', type: 'dui-color-picker', value: '#fff' }
		]
	}
];
