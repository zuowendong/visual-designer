import { IProperties } from '../types';
import baseProperty from '../baseProperty';

export const properties: IProperties[] = [
	{
		id: 'base',
		name: '基本配置',
		attrs: [
			{ name: '宽度', key: 'width', type: 'dui-input-number', value: 100 },
			{ name: '高度', key: 'height', type: 'dui-input-number', value: 50 },
			...new baseProperty().arttrs
		]
	},
	{
		id: 'buttonStyle',
		name: '按钮样式',
		attrs: [
			{
				name: '类型',
				key: 'type',
				type: 'dui-layout-array',
				value: '',
				values: [
					{ label: '无', value: '' },
					{ label: 'Primary', value: 'primary' },
					{ label: 'Success', value: 'success' },
					{ label: 'Info', value: 'info' },
					{ label: 'Warning', value: 'warning' },
					{ label: 'Danger', value: 'danger' }
				]
			},
			{ name: '朴素按钮', key: 'isPlain', type: 'dui-switch', value: false },
			{
				name: '风格',
				key: 'showStyle',
				type: 'dui-layout-array',
				value: 'text',
				values: [
					{ label: '文字', value: 'text' },
					{ label: '扁平', value: 'round' }
				]
			},
			{ name: '是否禁用', key: 'isDisabled', type: 'dui-switch', value: false }
		]
	},
	{
		id: 'buttonSetting',
		name: '按钮设置',
		attrs: [
			{
				name: '文字',
				key: 'text',
				type: 'dui-input-text',
				value: '确定'
			}
		]
	}
];
