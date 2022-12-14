export interface IProperties {
	id: string;
	name: string;
	attrs: IPropertyItem[];
}

interface IPropertyItem {
	name: string;
	key: string;
	type: string;
	value: string | number | boolean; // 响应值
	values?: ISelectOp[]; // 下拉框数组
}

export interface ISelectOp {
	label: string;
	value: string | number;
	[k: string]: any;
}
