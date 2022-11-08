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
import { cloneDeep } from 'lodash-es';
import { storeToRefs } from 'pinia';

import generateID from '@/utils/generateID';
import componentList from '@/assets/componnetList';
import Editor from './Editor.vue';

import { useComponentStore } from '@/stores/component';

const componentStore = useComponentStore();
const { editorDom, isChoosedComponent } = storeToRefs(componentStore);

// 当元素或选中的文本在可释放目标上被释放时触发
const dropHandle = (e: any) => {
	const compIndex = e.dataTransfer.getData('index');
	const canvasInfo = editorDom.value.getBoundingClientRect();
	if (compIndex) {
		let component = cloneDeep(componentList[compIndex]);
		component.compId = generateID();
		// 初始拖入位置
		component.style.top = e.clientY - canvasInfo.y;
		component.style.left = e.clientX - canvasInfo.x;

		componentStore.addComponent(component);
	}
};

// affect which cursor is displayed while dragging.
const dragOverHandle = (e: any) => (e.dataTransfer.dropEffect = 'copy');

// 指针设备按钮按下时触发
const mouseDownHandle = () => {
	// 取消选中组件
	componentStore.setChoosedComponentStatus(false);
};

// 指针设备按钮放开时触发
const deselectCurComponent = () => {
	// 未选中组件，currentComponet为空
	if (!isChoosedComponent.value) componentStore.setCurrentComponent({}, -1);
};
</script>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100%;
	overflow: auto;
}
</style>
