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
				value: 520
			},
			{
				name: '高度',
				key: 'height',
				type: 'dui-input-number',
				value: 250
			},
			{
				name: '坐标X',
				key: 'left',
				type: 'dui-input-number',
				value: 0
			},
			{
				name: '坐标Y',
				key: 'top',
				type: 'dui-input-number',
				value: 0
			}
		]
	},
	{
		id: 'layerSetting',
		name: '布局配置',
		attrs: [
			{
				name: '行数',
				key: 'row',
				type: 'dui-input-number',
				value: 2
			},
			{
				name: '列数',
				key: 'column',
				type: 'dui-input-number',
				value: 2
			}
		]
	},
	{
		id: 'formConfig',
		name: '表单属性',
		attrs: [
			{
				name: '是否弹窗',
				key: 'isDialog',
				type: 'dui-switch',
				value: false
			},
			{
				name: '展示类型',
				key: 'formShowType',
				type: 'dui-layout-array',
				value: [
					{ label: '查看', value: 'r' },
					{ label: '新增', value: 'c' },
					{ label: '更新', value: 'u' }
				]
			}
		]
	}
];
