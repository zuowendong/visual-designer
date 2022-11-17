import generateID from '@/utils/generateID';
import type { ComponentModel } from '@/types/component';
import type { ILiveTimeCompModel } from '@/types/menus';

import { cloneDeep } from 'lodash-es';

// 生成组件数据
export const initCompDataByDrop = (
	label: string,
	key: string,
	style: any,
	top: number,
	left: number
) => {
	const component: ComponentModel = {
		id: generateID(),
		label,
		key,
		style: { ...style, top, left }
	};
	if (key === 'WdForm') component.children = [];
	return component;
};

// 转换活动对象 - 平级列表
export const tileComponents = (
	components: ComponentModel[],
	liveTimeComps: ILiveTimeCompModel[],
	level: number
) => {
	// for (let i = 0; i < components.length; i++) {
	// 	const { id, label, key } = components[i];
	// 	if (id) liveTimeComps.push({ id, label, key, level });
	// 	if (components[i].children && components[i].children!.length) {
	// 		tileComponents(components[i].children!, liveTimeComps, ++level);
	// 	}
	// }
	// const componentList = cloneDeep(components);
	// // BFS
	// while (componentList.length) {
	// 	const first = componentList.shift();
	// 	// https://blog.csdn.net/an2766160/article/details/88417171
	// }
};
