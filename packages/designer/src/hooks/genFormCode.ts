import type { IFormCodeModel } from '@/types/formCode';
import type { ComponentModel } from '@/types/component';

export const genFormCode = (components: ComponentModel[]): IFormCodeModel => {
	return {
		isDialog: true,
		type: 'c',
		items: components.map((compItem) => {
			return {
				type: compItem.key.substring(2).toLowerCase(),
				label: compItem.style.label,
				value: compItem.style.modelValue,
				field: compItem.style.field,
				options: compItem.style.options
			};
		})
	};
};
