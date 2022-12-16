import { IProperties } from '../types';
import baseProperty from '../baseProperty';

export const properties: IProperties[] = [
	{
		id: 'base',
		name: '基本配置',
		attrs: [
			{ name: '宽度', key: 'width', type: 'dui-input-number', value: 560 },
			{ name: '高度', key: 'height', type: 'dui-input-number', value: 50 },
			...new baseProperty().arttrs
		]
	}
];
