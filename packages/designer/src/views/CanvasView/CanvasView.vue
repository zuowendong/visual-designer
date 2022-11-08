<template>
	<div
		class="content"
		@drop="dropHandle"
		@dragover="dragOverHandle"
		@mousedown="handleMouseDown"
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
const { editorDom } = storeToRefs(componentStore);

const dropHandle = (e: any) => {
	e.preventDefault();
	e.stopPropagation();

	const index = e.dataTransfer.getData('index');
	const canvasInfo = editorDom.value.getBoundingClientRect();
	if (index) {
		const component = cloneDeep(componentList[index]);
		component.style.top = e.clientY - canvasInfo.y;
		component.style.left = e.clientX - canvasInfo.x;
		component.compId = generateID();
		componentStore.setCurrentComponent(component, index);
		componentStore.addComponent(component);
	}
};

const dragOverHandle = (e: any) => {
	e.preventDefault();
	e.dataTransfer.dropEffect = 'copy';
};

const handleMouseDown = (e: any) => {
	e.stopPropagation();
};

const deselectCurComponent = () => {};
</script>

<style scoped lang="less">
.content {
	width: 100%;
	height: 100%;
	overflow: auto;
}
</style>
