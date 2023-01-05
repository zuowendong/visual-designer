import { IProperties } from '../types';
import baseProperty from '../baseProperty';

export const properties: IProperties[] = [
	{
		id: 'base',
		name: '基本配置',
		attrs: [
			{ name: '宽度', key: 'width', type: 'dui-input-number', value: 300 },
			{ name: '高度', key: 'height', type: 'dui-input-number', value: 300 },
			...new baseProperty().arttrs
		]
	},
	{
		id: 'imageSetting',
		name: '图片设置',
		attrs: [{ name: '选择图片', key: 'imgData', type: 'dui-upload', value: '' }]
	}
];

// export default properties;
