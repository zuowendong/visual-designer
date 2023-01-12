<template>
	<div ref="chartBox" class="w-full h-full"></div>
</template>

<script lang="ts">
export default { name: 'BaseChart' };
</script>

<script lang="ts" setup>
import echarts from '../charts';
import { onMounted, ref, onBeforeUnmount, toRefs } from 'vue';

const props = defineProps({
	option: { type: Object, default: () => {} }
});

let { option } = toRefs(props);

let chartBox = ref();
const initCharts = () => {
	let chartDom = echarts.init(chartBox.value as HTMLElement);
	chartDom.setOption(option.value);
	resizeChartDom(chartDom);
};

// 兼容性 chrome
let resizeObserver = ref();
const resizeChartDom = (chartDom: any) => {
	resizeObserver.value = new ResizeObserver((entries) => {
		const dom = entries[0].target;
		chartDom.resize({
			width: dom.clientWidth,
			height: dom.clientHeight
		});
	});
	resizeObserver.value.observe(chartBox.value);
};

onMounted(() => initCharts());

onBeforeUnmount(() => {
	let chartDom = echarts.init(chartBox.value as HTMLElement);
	chartDom.dispose();
	resizeObserver.value && resizeObserver.value.unobserve(chartBox.value);
});
</script>
