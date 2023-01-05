import { IProperties } from '../types';
import baseProperty from '../baseProperty';

export const properties: IProperties[] = [
	{
		id: 'base',
		name: '基本配置',
		attrs: [
			{ name: '宽度', key: 'width', type: 'dui-input-number', value: 200 },
			{ name: '高度', key: 'height', type: 'dui-input-number', value: 30 },
			...new baseProperty().arttrs
		]
	},
	{
		id: 'fontSetting',
		name: '文字样式',
		attrs: [
			{ name: '字号', key: 'fontSize', type: 'dui-input-number', value: 16 },
			{ name: '颜色', key: 'color', type: 'dui-color-picker', value: '#fff' },
			{ name: '文本', key: 'text', type: 'dui-input-text', value: '文本标签' },
			{ name: '背景图', key: 'bgImg', type: 'dui-upload', value: '' }
		]
	}
];

// export default properties;
