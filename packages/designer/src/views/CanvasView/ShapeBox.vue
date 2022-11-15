<template>
	<div
		class="shapeBox"
		:class="{ active, isContainer }"
		@click.stop.prevent
		@mousedown.stop="mouseDownOnShapeHandle"
	>
		<div
			v-for="item in active ? points : []"
			:key="item"
			class="shapePoint"
			:style="getPointStyle(item)"
			@mousedown.stop.prevent="(e) => mouseDownOnPointHandle(item, e)"
		></div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';

const props = defineProps({
	active: { type: Boolean, default: false },
	defaultStyle: { type: Object, default: () => {} },
	element: { type: Object, default: () => {} },
	componentId: { type: String, default: '' }
});
let { active, defaultStyle, element, componentId } = toRefs(props);

const componentStore = useComponentStore();
let cursors = reactive<any>({});

const mouseDownOnShapeHandle = (e: MouseEvent) => {
	componentStore.setChoosedComponentStatus(true);
	componentStore.setCurrentComponent(element.value, componentId.value);

	cursors = getCursor(); // 根据旋转角度获取光标位置

	const pos = { ...defaultStyle.value };
	const startY = e.clientY;
	const startX = e.clientX;
	// 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
	const startTop = parseFloat(pos.top);
	const startLeft = parseFloat(pos.left);

	const move = (moveEvent: MouseEvent) => {
		const curX = moveEvent.clientX;
		const curY = moveEvent.clientY;
		// 鼠标移动的坐标 - 初始按下鼠标时的坐标 = 移动的距离 + 组件原始坐标 = 新坐标
		pos.top = curY - startY + startTop;
		pos.left = curX - startX + startLeft;
		// update current component style
		componentStore.setShapeStyle(pos);
	};

	const up = () => {
		document.removeEventListener('mousemove', move);
		document.removeEventListener('mouseup', up);
	};

	document.addEventListener('mousemove', move);
	document.addEventListener('mouseup', up);
};

// change current component of width & height
const points = reactive(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']);
const getPointStyle = (point: string) => {
	const { width, height } = defaultStyle.value;
	const hasT = /t/.test(point);
	const hasB = /b/.test(point);
	const hasL = /l/.test(point);
	const hasR = /r/.test(point);
	let newLeft = 0;
	let newTop = 0;

	// 四个角的点 lt:0 lb:0 rt:width rb:height
	if (point.length === 2) {
		newLeft = hasL ? 0 : width;
		newTop = hasT ? 0 : height;
	} else {
		// 上下两点的点，宽度居中
		if (hasT || hasB) {
			newLeft = Math.floor(width / 2);
			newTop = hasT ? 0 : height;
		}

		// 左右两边的点，高度居中
		if (hasL || hasR) {
			newLeft = hasL ? 0 : width;
			newTop = Math.floor(height / 2);
		}
	}
	return {
		marginLeft: '-4px',
		marginTop: '-4px',
		left: `${newLeft}px`,
		top: `${newTop}px`,
		cursor: cursors[point]
	};
};

const { currentComponent, isContainer } = storeToRefs(componentStore);

/**
 *
 * 点击小圆点时，记录点击的坐标 xy
 * 假设向下拖动，那么 y 坐标就会增大
 * 用新的 y 坐标减去原来的 y 坐标，就可以知道在纵轴方向的移动距离是多少
 * 最后再将移动距离加上原来组件的高度，就可以得出新的组件高度
 * 如果是正数，说明是往下拉，组件的高度在增加。如果是负数，说明是往上拉，组件的高度在减少。
 */

const mouseDownOnPointHandle = (point: string, e: any) => {
	const pos = { ...defaultStyle.value };
	const height = Number(pos.height);
	const width = Number(pos.width);
	const top = Number(pos.top);
	const left = Number(pos.left);
	const startX = e.clientX;
	const startY = e.clientY;

	const move = (moveEvent: MouseEvent) => {
		const currX = moveEvent.clientX;
		const currY = moveEvent.clientY;
		const disY = currY - startY;
		const disX = currX - startX;
		const hasT = /t/.test(point);
		const hasB = /b/.test(point);
		const hasL = /l/.test(point);
		const hasR = /r/.test(point);
		const newHeight = height + (hasT ? -disY : hasB ? disY : 0);
		const newWidth = width + (hasL ? -disX : hasR ? disX : 0);
		pos.height = newHeight > 0 ? newHeight : 0;
		pos.width = newWidth > 0 ? newWidth : 0;
		pos.left = left + (hasL ? disX : 0);
		pos.top = top + (hasT ? disY : 0);

		componentStore.setShapeStyle(pos);
	};

	const up = () => {
		document.removeEventListener('mousemove', move);
		document.removeEventListener('mouseup', up);
	};

	document.addEventListener('mousemove', move);
	document.addEventListener('mouseup', up);
};

const angleToCursor = reactive([
	// 每个范围的角度对应的光标
	{ start: 338, end: 23, cursor: 'nw' },
	{ start: 23, end: 68, cursor: 'n' },
	{ start: 68, end: 113, cursor: 'ne' },
	{ start: 113, end: 158, cursor: 'e' },
	{ start: 158, end: 203, cursor: 'se' },
	{ start: 203, end: 248, cursor: 's' },
	{ start: 248, end: 293, cursor: 'sw' },
	{ start: 293, end: 338, cursor: 'w' }
]);
const initialAngle = reactive<any>({
	// 每个点对应的初始角度
	lt: 0,
	t: 45,
	rt: 90,
	r: 135,
	rb: 180,
	b: 225,
	lb: 270,
	l: 315
});
const getCursor = () => {
	const rotate = mod360(currentComponent.value.style.rotate || 0); // 取余 360
	const result: any = {};
	let lastMatchIndex = -1; // 从上一个命中的角度的索引开始匹配下一个，降低时间复杂度

	points.forEach((point) => {
		const angle = mod360(initialAngle[point] + rotate);
		const len = angleToCursor.length;
		while (point) {
			lastMatchIndex = (lastMatchIndex + 1) % len;
			const angleLimit = angleToCursor[lastMatchIndex];
			if (angle < 23 || angle >= 338) {
				result[point] = 'nw-resize';
				return;
			}
			if (angleLimit.start <= angle && angle < angleLimit.end) {
				result[point] = angleLimit.cursor + '-resize';
				return;
			}
		}
	});
	return result;
};

const mod360 = (deg: number) => {
	return (deg + 360) % 360;
};
</script>

<style scoped lang="less">
.shapeBox {
	position: absolute;
	outline: 1px solid #4c7a9e;
	&:hover {
		cursor: move;
	}
}
.active {
	outline: 1px solid #70c0ff;
	user-select: none;
	.shapePoint {
		position: absolute;
		width: 8px;
		height: 8px;
		background-color: #ffffff;
		border: 1px solid #59c7f9;
		border-radius: 50%;
		z-index: 1;
	}
}
.isContainer {
	outline: 1px solid #70ffa7;
}
</style>
