import generateID from '@/utils/generateID';
import type { ComponentModel } from '@/types/component';

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

// // 转换活动对象 - 平级列表
// export const tileComponents = (
// 	components: ComponentModel[],
// 	liveTimeComps: ILiveTimeCompModel[],
// 	level: number
// ) => {
// 	// for (let i = 0; i < components.length; i++) {
// 	// 	const { id, label, key } = components[i];
// 	// 	if (id) liveTimeComps.push({ id, label, key, level });
// 	// 	if (components[i].children && components[i].children!.length) {
// 	// 		tileComponents(components[i].children!, liveTimeComps, ++level);
// 	// 	}
// 	// }
// 	const componentRoot: ComponentModel = {
// 		id: '0',
// 		label: 'root',
// 		key: 'root',
// 		style: {},
// 		children: cloneDeep(components)
// 	};
// 	debugger;
// 	// BFS
// 	const queue = [componentRoot];
// 	let levelIndex = 0;
// 	while (queue.length) {
// 		const first = queue.shift();
// 		levelIndex++;
// 		console.log(111111111, first);
// 		first?.children?.forEach((child: any) => {
// 			queue.push({
// 				...child,
// 				levelIndex
// 			});
// 		});
// 	}

// 	console.log(343434, componentRoot);
// 	liveTimeComps = queue;
// };
