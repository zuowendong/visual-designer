import { IProperties } from '../types';
import baseProperty from '../baseProperty';

export const properties: IProperties[] = [
	{
		id: 'base',
		name: '基本配置',
		attrs: [
			{ name: '宽度', key: 'width', type: 'dui-input-number', value: 400 },
			{ name: '高度', key: 'height', type: 'dui-input-number', value: 50 },
			...new baseProperty().arttrs
		]
	},
	{
		id: 'selectSetting',
		name: '下拉框配置',
		attrs: [
			{ name: '标签名', key: 'label', type: 'dui-input-text', value: '地区' },
			{ name: '默认值', key: 'modelValue', type: 'dui-input-text', value: '上海' },
			{ name: '字段', key: 'field', type: 'dui-input-text', value: 'region' },
			{
				name: '选项',
				key: 'options',
				type: 'dui-config-array',
				value: [
					{ label: '上海', value: '上海' },
					{ label: '南京', value: '南京' },
					{ label: '苏州', value: '苏州' }
				]
			}
		]
	}
];
