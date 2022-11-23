export interface IFormCodeModel {
	isDialog: boolean; // 是否弹窗
	type: 'r' | 'cu';
	items: IFormItemModel[];
}

interface IFormItemModel {
	label: string;
	value: string;
	field: string;
	type: 'text' | 'imgs' | 'files'; // 类型
	event?: any;
}
