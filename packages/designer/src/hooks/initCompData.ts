import generateID from '@/utils/generateID';
import type { ComponentModel } from '@/types/component';

// 生成组件数据
export const initCompDataByDrop = (key: string, style: any, top: number, left: number) => {
	const component: ComponentModel = {
		id: generateID(),
		key,
		style: { ...style, top, left }
	};
	if (key === 'WdForm') component.children = new Array(4).fill(1);
	return component;
};
