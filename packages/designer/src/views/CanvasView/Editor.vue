<template>
	<div ref="editor" class="editor">
		<Grid />
		<ShapeBox
			v-for="(item, index) in components"
			:key="item.id"
			:style="getShapeStyle(item.style)"
			:active="item.id === currentComponent.id"
			:default-style="item.style"
			:element="item"
			:index="index"
		>
			<div>测试</div>
		</ShapeBox>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import { getShapeStyle } from '../../utils/formatStyle';
import Grid from './Grid.vue';
import ShapeBox from './ShapeBox.vue';

const componentStore = useComponentStore();
const { currentComponent, components } = storeToRefs(componentStore);

const editor = ref();
onMounted(() => componentStore.setEditorDom(editor.value));
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
