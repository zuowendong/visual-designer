<template>
	<div ref="editor" class="editor" @contextmenu="contextMenuHandle">
		<Grid />

		<ShapeBox
			v-for="item in components"
			:key="item.id"
			:style="getShapeStyle(item.style)"
			:active="item.id === currentComponent.id"
			:default-style="item.style"
			:element="item"
			:component-id="item.id"
		>
			<component :is="item.key" v-bind="{ ...getComponentProps(item.id) }"></component>
		</ShapeBox>

		<ContextMenu />
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import { useContextMenu } from '@/stores/contextMenu';
import { getShapeStyle } from '../../utils/formatStyle';

import Grid from './Grid.vue';
import ShapeBox from './ShapeBox.vue';
import ContextMenu from './ContextMenu.vue';

const componentStore = useComponentStore();
const { currentComponent, components } = storeToRefs(componentStore);

const editor = ref();
onMounted(() => componentStore.setEditorDom(editor.value));

const contextMenu = useContextMenu();
// 菜单选择
const contextMenuHandle = (e: any) => {
	e.stopPropagation();
	e.preventDefault();

	const editorStyle = editor.value.getBoundingClientRect();
	let top = e.clientY - editorStyle.y;
	let left = e.clientX - editorStyle.x;
	contextMenu.showContextMenu(top, left);
};

const getComponentProps = (id: string) => {
	return components.value.find((compItem) => compItem.id === id).style;
};
</script>

<style scoped lang="less">
@import '@/style/base.less';
.editor {
	position: relative;
	width: 100%;
	height: 100%;
	background-color: @editorBgColor;
	margin: auto;
	user-select: none;
	overflow: hidden;
	.component {
		outline: none;
		width: 100%;
		height: 100%;
	}
}
</style>
