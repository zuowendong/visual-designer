<template>
	<div
		class="shapeBox"
		:class="{ active }"
		@click="selectCurComponent"
		@mousedown="mouseDownOnShapeHandle"
	>
		<div
			v-for="item in points"
			:key="item"
			class="shapePoint"
			:style="getPointStyle(item)"
			@mousedown="(e) => mouseDownOnPointHandle(item, e)"
		></div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import calculateComponentPositonAndSize from '../../utils/calculateComponentPositonAndSize';

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
let cursors = reactive<any>({});
const mouseDownOnShapeHandle = (e: MouseEvent) => {
	e.stopPropagation();
	componentStore.setCurrentComponent(element.value, index.value);

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

// change width & height
const points = reactive(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']);
const getPointStyle = (point: string) => {
	const { width, height } = defaultStyle.value;
	const hasT = /t/.test(point);
	const hasB = /b/.test(point);
	const hasL = /l/.test(point);
	const hasR = /r/.test(point);
	let newLeft = 0;
	let newTop = 0;

	// 四个角的点
	if (point.length === 2) {
		newLeft = hasL ? 0 : width;
		newTop = hasT ? 0 : height;
	} else {
		// 上下两点的点，宽度居中
		if (hasT || hasB) {
			newLeft = width / 2;
			newTop = hasT ? 0 : height;
		}
		// 左右两边的点，高度居中
		if (hasL || hasR) {
			newLeft = hasL ? 0 : width;
			newTop = Math.floor(height / 2);
		}
	}

	const style = {
		marginLeft: '-4px',
		marginTop: '-4px',
		left: `${newLeft}px`,
		top: `${newTop}px`,
		cursor: cursors[point]
	};
	return style;
};

const { editorDom, currentComponent } = storeToRefs(componentStore);

const mouseDownOnPointHandle = (point: string, e: any) => {
	// this.$store.commit("setInEditorStatus", true);
	// this.$store.commit("setClickComponentStatus", true);
	e.stopPropagation();
	e.preventDefault();

	const style = { ...defaultStyle.value };

	// 组件宽高比
	const proportion = style.width / style.height;

	// 组件中心点
	const center = {
		x: style.left + style.width / 2,
		y: style.top + style.height / 2
	};

	// 获取画布位移信息
	const editorRectInfo = editorDom.value.getBoundingClientRect();

	const pointRect = e.target.getBoundingClientRect();
	// 当前点击圆点相对于画布的中心坐标
	const curPoint = {
		x: Math.round(pointRect.left - editorRectInfo.left + e.target.offsetWidth / 2),
		y: Math.round(pointRect.top - editorRectInfo.top + e.target.offsetHeight / 2)
	};

	// 获取对称点的坐标
	const symmetricPoint = {
		x: center.x - (curPoint.x - center.x),
		y: center.y - (curPoint.y - center.y)
	};

	// 是否需要保存快照
	let isFirst = true;

	const move = (moveEvent: MouseEvent) => {
		// 第一次点击时也会触发 move，所以会有“刚点击组件但未移动，组件的大小却改变了”的情况发生
		// 因此第一次点击时不触发 move 事件
		if (isFirst) {
			isFirst = false;
			return;
		}

		const curPositon = {
			x: moveEvent.clientX - Math.round(editorRectInfo.left),
			y: moveEvent.clientY - Math.round(editorRectInfo.top)
		};

		calculateComponentPositonAndSize(point, style, curPositon, proportion, {
			center,
			curPoint,
			symmetricPoint
		});

		componentStore.setShapeStyle(style);
	};

	const up = () => {
		document.removeEventListener('mousemove', move);
		document.removeEventListener('mouseup', up);
		// needSave && this.$store.commit('recordSnapshot');
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
	const rotate = mod360(currentComponent.value.style.rotate); // 取余 360
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
	&:hover {
		cursor: move;
	}
}
.active {
	outline: 1px solid #70c0ff;
	user-select: none;
}

.shapePoint {
	position: absolute;
	background: #fff;
	border: 1px solid #59c7f9;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	z-index: 1;
}
</style>
