import { defineStore, storeToRefs } from 'pinia';
import type { IMenuModel, ILiveTimeCompModel } from '@/types/menus';
import type { ComponentModel } from '@/types/component';
import { DFSLiveTimeComps } from '@/utils/DFS';
import { useComponentStore } from './component';

export const useSideMenus = defineStore('sideMenu', () => {
	// 当前选中拖拽的组件元素 --- 获取当前组件的信息
	const checkedMenu = ref<IMenuModel>({ label: '', key: '', icon: '' });
	const setCheckedMenu = (menu: IMenuModel) => {
		checkedMenu.value = menu;
	};
	const resetMenu = () => {
		checkedMenu.value = { label: '', key: '', icon: '' };
	};

	const liveTimeComps = ref<ILiveTimeCompModel[]>([]);
	const setLiveTimeComps = () => {
		const componentStore = useComponentStore();
		const { components } = storeToRefs(componentStore);

		liveTimeComps.value.length = 0;
		const root: ComponentModel = {
			id: 'root',
			label: '活动对象树',
			key: 'root',
			style: [],
			children: components.value
		};
		DFSLiveTimeComps(root, -1, liveTimeComps.value);
	};

	return {
		checkedMenu,
		setCheckedMenu,
		resetMenu,

		liveTimeComps,
		setLiveTimeComps
	};
});
