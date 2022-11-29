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

	const componentStore = useComponentStore();
	const { components, currentComponent } = storeToRefs(componentStore);

	// 复制粘贴
	const copyCompData = ref<ComponentModel>({ id: '', label: '', key: '', style: {} });
	const copy = () => {
		copyCompData.value = cloneDeep(currentComponent.value);
	};

	// 层级
	const maxLevel = ref<number>(0); // 最大层级
	const setTopLevel = () => {
		// 初始阶段，还没有组件置顶
		if (maxLevel.value === 0) {
			maxLevel.value = components.value.reduce((preVal: number, currVal: ComponentModel) => {
				return preVal > currVal.style.zIndex ? preVal : currVal.style.zIndex;
			}, 0);
		}
		maxLevel.value++;
		componentStore.updateCurrentComponent({
			...currentComponent.value.style,
			zIndex: maxLevel.value
		});
	};
	const upLevel = () => {
		componentStore.updateCurrentComponent({
			...currentComponent.value.style,
			zIndex: ++currentComponent.value.style.zIndex
		});
	};

	return {
		showMenu,
		menuTop,
		menuLeft,
		showContextMenu,
		hideContextMenu,

		copyCompData,
		copy,

		maxLevel,
		setTopLevel,
		upLevel
	};
});
