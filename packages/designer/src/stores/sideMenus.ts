import { defineStore } from 'pinia';
import type { IMenuModel, ILiveTimeCompModel } from '@/types/menus';
import type { ComponentModel } from '@/types/component';
import { DFSLiveTimeComps } from '@/utils/DFS';

export const useSideMenus = defineStore('sideMenu', () => {
	const checkedMenu = ref<IMenuModel>({
		label: '',
		key: '',
		icon: ''
	});
	const setCheckedMenu = (menu: IMenuModel) => {
		checkedMenu.value = menu;
	};
	const resetMenu = () => {
		checkedMenu.value = { label: '', key: '', icon: '' };
	};

	const liveTimeComps = ref<ILiveTimeCompModel[]>([]);
	const setLiveTimeComps = (components: ComponentModel[]) => {
		liveTimeComps.value.length = 0;
		const root: ComponentModel = {
			id: 'root',
			label: '活动对象树',
			key: 'root',
			style: [],
			children: components
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
