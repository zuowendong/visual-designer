<template>
	<div ref="editor" class="editor" @mousedown="mouseDownHandle">
		<Grid />
		<ShapeBox
			v-for="(item, index) in components"
			:key="item.compId"
			:style="getShapeStyle(item.style)"
			:active="item.compId === currentComponent.compId"
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
onMounted(() => {
	componentStore.setEditorDom(editor.value);
});

let editorX = ref(0);
let editorY = ref(0);
let isShowArea = ref(false);

let width = ref(0);
let height = ref(0);

let start = reactive({ x: 0, y: 0 }); // 选中区域的起点

const mouseDownHandle = (e: any) => {
	// 如果没有选中组件 在画布上点击时需要调用 e.preventDefault() 防止触发 drop 事件
	if (!currentComponent.value) {
		e.preventDefault();
	}

	// 获取编辑器的位移信息，每次点击时都需要获取一次。主要是为了方便开发时调试用。
	const editorInfo = editor.value.getBoundingClientRect();
	editorX.value = editorInfo.x;
	editorY.value = editorInfo.y;

	const startX = e.clientX;
	const startY = e.clientY;
	start.x = startX - editorX.value;
	start.y = startY - editorY.value;
	// 展示选中区域
	isShowArea.value = true;

	const move = (moveEvent: MouseEvent) => {
		width.value = Math.abs(moveEvent.clientX - startX);
		height.value = Math.abs(moveEvent.clientY - startY);
		if (moveEvent.clientX < startX) {
			start.x = moveEvent.clientX - editorX.value;
		}
		if (moveEvent.clientY < startY) {
			start.y = moveEvent.clientY - editorY.value;
		}
	};

	const up = (e: MouseEvent) => {
		document.removeEventListener('mousemove', move);
		document.removeEventListener('mouseup', up);
		if (e.clientX == startX && e.clientY == startY) {
			return;
		}
	};

	document.addEventListener('mousemove', move);
	document.addEventListener('mouseup', up);
};
</script>

<style scoped lang="less">
.editor {
	position: relative;
	width: 100%;
	height: 100%;
	background: #fff;
	margin: auto;
	user-select: none;
	.component {
		outline: none;
		width: 100%;
		height: 100%;
	}
}
</style>
