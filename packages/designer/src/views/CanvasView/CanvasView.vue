<template>
	<div
		class="content"
		@drop.stop.prevent="dropHandle"
		@dragover.prevent="dragOverHandle"
		@mousedown.stop="mouseDownHandle"
		@mouseup="deselectCurComponent"
	>
		<Editor />
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import Editor from './Editor.vue';
import { useComponentStore } from '@/stores/component';
import { genCompStyleData } from '@/hooks/genComponentData';
import { useContextMenu } from '@/stores/contextMenu';
import { initCompDataByDrop } from '@/hooks/formatComponentData';
import { useSideMenus } from '@/stores/sideMenus';

const componentStore = useComponentStore();
const { editorDom, isChoosedComponent, isContainer, components } = storeToRefs(componentStore);

const sideMenus = useSideMenus();
const { checkedMenu } = storeToRefs(sideMenus);
// 当元素或选中的文本在可释放目标上被释放时触发
const dropHandle = async (e: any) => {
	const compKey = e.dataTransfer.getData('component');
	const canvasInfo = editorDom.value.getBoundingClientRect();
	if (compKey) {
		let style = await genCompStyleData(compKey);
		const initTop = e.clientY - canvasInfo.y;
		const initLeft = e.clientX - canvasInfo.x;
		const componentData = initCompDataByDrop(
			checkedMenu.value.label,
			compKey,
			style,
			initTop,
			initLeft
		);

		if (isContainer.value) {
			// 处理拖入容器的逻辑
			componentStore.addCompInContainer(
				e.target.dataset.compid || e.target.parentElement.dataset.compid,
				componentData,
				e.target.dataset.index
			);
		} else {
			componentStore.addComponent(componentData);
		}

		// 设置活动对象列表
		sideMenus.setLiveTimeComps(components.value);
		// 元素放下时恢复默认
		isContainer.value = false;
		// 重置选中的左侧菜单
		sideMenus.resetMenu();
	}
};

// affect which cursor is displayed while dragging.
const dragOverHandle = (e: any) => {
	e.dataTransfer.dropEffect = 'copy';

	// 拖入到容器组件上方
	if (e.target.dataset.key === 'WdForm' || e.target.parentElement.dataset.key === 'WdForm') {
		isContainer.value = true;
	} else {
		isContainer.value = false;
	}
};

// 指针设备按钮按下时触发
const mouseDownHandle = () => {
	// 取消选中组件
	componentStore.setChoosedComponentStatus(false);
};

const contextMenu = useContextMenu();
// 指针设备按钮放开时触发
const deselectCurComponent = (e: MouseEvent) => {
	// 未选中组件，currentComponet为空
	if (!isChoosedComponent.value) {
		componentStore.setCurrentComponent({ id: '', label: '', key: '', style: {} }, '');
	}
	// 右击才显示菜单
	if (e.button !== 2) contextMenu.hideContextMenu();
};
</script>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100%;
	overflow: auto;
}
</style>
