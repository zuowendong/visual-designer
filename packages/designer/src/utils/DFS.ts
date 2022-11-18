import type { ILiveTimeCompModel } from '@/types/menus';
import type { ComponentModel } from '@/types/component';

export const DFSLiveTimeComps = (
	node: ComponentModel,
	depth: number,
	list: ILiveTimeCompModel[]
) => {
	if (!node) return;
	list.push({
		id: node.id,
		key: node.key,
		label: node.label,
		depth
	});
	if (!(node.children && node.children!.length)) return;
	Array.from(node.children!).forEach((item) => {
		DFSLiveTimeComps(item, depth + 1, list);
	});
};
