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
			{ name: '标签名', key: 'label', type: 'dui-input-text', value: '所在地' },
			{ name: '字段', key: 'field', type: 'dui-input-text', value: 'region' },
			{
				name: '选项',
				key: 'options',
				type: 'dui-config-array',
				value: 'suzhou',
				values: [
					{ label: '南京', value: 'nanjing' },
					{ label: '上海', value: 'shanghai' },
					{ label: '苏州', value: 'suzhou' }
				]
			}
		]
	}
];
