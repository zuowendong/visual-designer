export interface IProperties {
	id: string;
	name: string;
	attrs: IPropertyItem[];
}

interface IPropertyItem {
	name: string;
	key: string;
	type: string;
	value: string | number | boolean | ISelectOp[];
}

export interface ISelectOp {
	label: string;
	value: string | number;
	[k: string]: any;
}
