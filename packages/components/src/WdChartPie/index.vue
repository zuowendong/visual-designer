<template>
	<div ref="chartBar" class="w-full h-full"></div>
</template>

<script lang="ts">
export default { name: 'WdChartPie' };
</script>

<script lang="ts" setup>
import echarts from '../charts';
import { onMounted, ref, onBeforeUnmount } from 'vue';

let chartBar = ref();
const initCharts = () => {
	let chartDom = echarts.init(chartBar.value as HTMLElement);

	let option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '5%',
			left: 'center'
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: 'Search Engine' },
					{ value: 735, name: 'Direct' },
					{ value: 580, name: 'Email' },
					{ value: 484, name: 'Union Ads' },
					{ value: 300, name: 'Video Ads' }
				]
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
