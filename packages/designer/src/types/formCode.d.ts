import type { ISelectOp } from '@visual-designer/components';

export interface IFormCodeModel {
	isDialog: boolean; // 是否弹窗
	type: 'r' | 'c' | 'u'; // read | create | update
	items: IFormItemModel[];
}

interface IFormItemModel {
	label: string;
	value: string;
	field: string;
	type: string;
	event?: any;
	options?: ISelectOp[];
}
