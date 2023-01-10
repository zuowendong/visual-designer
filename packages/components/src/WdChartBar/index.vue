<template>
	<div ref="chartBar" class="w-full h-full"></div>
</template>

<script lang="ts">
export default { name: 'WdChartBar' };
</script>

<script lang="ts" setup>
import echarts from '../charts';
import { onMounted, ref, onBeforeUnmount } from 'vue';

let chartBar = ref();
const initCharts = () => {
	let chartDom = echarts.init(chartBar.value as HTMLElement);
	let option = {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar'
			}
		]
	};
	chartDom.setOption(option);
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
	resizeObserver.value.observe(chartBar.value);
};

onMounted(() => initCharts());

onBeforeUnmount(() => {
	let chartDom = echarts.init(chartBar.value as HTMLElement);
	chartDom.dispose();
	resizeObserver.value && resizeObserver.value.unobserve(chartBar.value);
});
</script>
