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
import Editor from './Editor.vue';

import { useComponentStore } from '@/stores/component';
import { genCompStyleData } from '@/hooks/genComponentData';

const componentStore = useComponentStore();
const { editorDom, isChoosedComponent, components } = storeToRefs(componentStore);

// 当元素或选中的文本在可释放目标上被释放时触发
const dropHandle = async (e: any) => {
	const compKey = e.dataTransfer.getData('component');
	const canvasInfo = editorDom.value.getBoundingClientRect();
	if (compKey) {
		let style = await genCompStyleData(compKey);
		let component = {
			id: generateID(),
			key: compKey,
			style: {
				...style,
				top: e.clientY - canvasInfo.y, // 初始拖入位置
				left: e.clientX - canvasInfo.x
			}
		};

		const newComp = cloneDeep(component);
		componentStore.addComponent(newComp);
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
