import type { IFormCodeModel } from '@/types/formCode';
import type { ComponentModel } from '@/types/component';
import type { ISelectOp } from '@visual-designer/components';

export const genFormCode = (component: ComponentModel): IFormCodeModel => {
	// 展示类型
	const targetType = component.style.formShowType.value;
	const formShowType = targetType ? targetType.value : component.style.formShowType[0].value;

	const formItems = component!.children!.map((compItem) => {
		return {
			type: compItem.key.substring(2).toLowerCase(),
			label: compItem.style.label,
			value: compItem.style.modelValue,
			field: compItem.style.field,
			options: compItem.style.options
		};
	});
	return {
		isDialog: component.style.isDialog,
		type: formShowType,
		items: formItems
	};
};
