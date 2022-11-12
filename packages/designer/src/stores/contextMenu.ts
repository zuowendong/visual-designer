import { defineStore } from 'pinia';

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

	return {
		showMenu,
		menuTop,
		menuLeft,
		showContextMenu,
		hideContextMenu
	};
});
