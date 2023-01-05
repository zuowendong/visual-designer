<template>
	<div
		ref="editor"
		class="relative w-full h-full bg-[#2f2f2f] m-auto select-none overflow-hidden"
		@contextmenu="contextMenuHandle"
	>
		<!-- <span>{{ components }}</span> -->
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
			<Container v-if="item.key === 'WdForm'" :comp-item="item" />
			<component
				v-else
				:is="item.key"
				:data-key="item.key"
				:data-compid="item.id"
				v-bind="{ ...getComponentProps(item.id) }"
			></component>
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
import Container from './Container.vue';

const componentStore = useComponentStore();
const { currentComponent, components } = storeToRefs(componentStore);

const editor = ref();
onMounted(() => componentStore.setEditorDom(editor.value));

const contextMenu = useContextMenu();
// 菜单选择
const contextMenuHandle = (e: MouseEvent) => {
	e.stopPropagation();
	e.preventDefault();
	const editorStyle = editor.value.getBoundingClientRect();
	let top = e.clientY - editorStyle.y;
	let left = e.clientX - editorStyle.x;
	contextMenu.showContextMenu(top, left);
};

const getComponentProps = (id: string) => {
	return components.value.find((item) => item.id === id)!.style;
};
</script>
