<template>
	<div id="chartMap" class="w-full h-full"></div>
</template>

<script lang="ts">
export default { name: 'WdChartBar' };
</script>

<script lang="ts" setup>
import echarts from '../charts';
import { onBeforeUnmount, onMounted } from 'vue';

const initCharts = () => {
	let myChart = echarts.init(document.getElementById('chartMap') as HTMLElement);
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
	myChart.setOption(option);
};

onMounted(() => {
	initCharts();
});

// 处理echarts自适应
let getDOMFlag = true;
let myChart1: any = null;
let myChart2: any = null;
window.addEventListener('resize', function () {
	if (getDOMFlag) {
		myChart1 = echarts.init(document.getElementById('myChart1') as HTMLElement);
		myChart2 = echarts.init(document.getElementById('myChart2') as HTMLElement);
	}
	myChart1.resize();
	myChart2.resize();
});

// 销毁echarts
onBeforeUnmount(() => {
	var myChartone = echarts.init(document.getElementById('myChart1') as HTMLElement);
	myChartone.dispose();
	var myChartwo = echarts.init(document.getElementById('myChart2') as HTMLElement);
	myChartwo.dispose();
});
</script>
