<template>
	<div
		class="shapeBox"
		:class="{ active }"
		@click="selectCurComponent"
		@mousedown="handleMouseDownOnShape"
	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { useComponentStore } from '@/stores/component';

const props = defineProps({
	active: { type: Boolean, default: false },
	defaultStyle: { type: Object, default: () => {} },
	element: { type: Object, default: () => {} },
	index: { type: Number, default: 0 }
});
let { active, defaultStyle, element, index } = toRefs(props);

const selectCurComponent = (e: MouseEvent) => {
	// 阻止向父组件冒泡
	e.stopPropagation();
	e.preventDefault();
};

const componentStore = useComponentStore();

const handleMouseDownOnShape = (e: MouseEvent) => {
	e.stopPropagation();
	componentStore.setCurrentComponent(element.value, index.value);

	const pos = { ...defaultStyle.value };
	const startY = e.clientY;
	const startX = e.clientX;
	// 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
	const startTop = parseFloat(pos.top);
	const startLeft = parseFloat(pos.left);

	const move = (moveEvent: MouseEvent) => {
		const curX = moveEvent.clientX;
		const curY = moveEvent.clientY;
		pos.top = curY - startY + startTop;
		pos.left = curX - startX + startLeft;

		// update current componnet style
		componentStore.setShapeStyle(pos);
	};

	const up = () => {
		document.removeEventListener('mousemove', move);
		document.removeEventListener('mouseup', up);
	};

	document.addEventListener('mousemove', move);
	document.addEventListener('mouseup', up);
};
</script>

<style scoped lang="less">
.shapeBox {
	position: absolute;
	width: 100px;
	height: 100px;
	border: 1px solid red;
	&:hover {
		cursor: move;
	}
}
.active {
	outline: 1px solid #70c0ff;
	user-select: none;
}
</style>
