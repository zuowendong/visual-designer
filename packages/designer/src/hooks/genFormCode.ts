import type { IFormCodeModel } from '@/types/formCode';
import type { ComponentModel } from '@/types/component';

export const genFormCode = (components: ComponentModel[]): IFormCodeModel => {
	return {
		isDialog: true,
		type: 'c',
		items: components.map((compItem) => {
			return {
				label: compItem.style.label,
				value: compItem.style.modelValue,
				field: compItem.style.modelValue,
				type: 'select'
			};
		})
	};
};
