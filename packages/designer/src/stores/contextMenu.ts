import { defineStore, storeToRefs } from 'pinia';
import { cloneDeep } from 'lodash-es';
import type { ComponentModel } from '../types/component';
import { useComponentStore } from './component';

export const useContextMenu = defineStore('contextMenu', () => {
	const showMenu = ref(false);
	const menuTop = ref<number>(0);
	const menuLeft = ref<number>(0);

	const showContextMenu = (top: number, left: number) => {
		menuTop.value = top;
		menuLeft.value = left;
		showMenu.value = true;
	};
	const hideContextMenu = () => {
		showMenu.value = false;
	};

	// 复制粘贴
	const copyCompData = ref<ComponentModel>({ id: '', label: '', key: '', style: {} });
	const currentCompData = computed(() => {
		const componentStore = useComponentStore();
		const { currentComponent } = storeToRefs(componentStore);
		return currentComponent.value;
	});
	const copy = () => {
		copyCompData.value = cloneDeep(currentCompData.value);
	};
	const paste = () => {
		console.log(copyCompData.value);
	};

	return {
		showMenu,
		menuTop,
		menuLeft,
		showContextMenu,
		hideContextMenu,

		copyCompData,
		copy,
		paste
	};
});
