import { defineStore } from 'pinia';
import type { IMenuModel, ILiveTimeCompModel } from '@/types/menus';
import { tileComponents } from '@/hooks/formatComponentData';
import type { ComponentModel } from '@/types/component';

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
	// let level = ref(0);
	const setLiveTimeComps = (components: ComponentModel[]) => {
		liveTimeComps.value.length = 0;
		// level.value = 0;
		const level = 0;
		tileComponents(components, liveTimeComps.value, level);

		console.log(111, liveTimeComps.value);
	};

	return {
		checkedMenu,
		setCheckedMenu,
		resetMenu,

		liveTimeComps,
		setLiveTimeComps
	};
});
