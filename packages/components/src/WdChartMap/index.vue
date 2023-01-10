<template>
	<div id="chartMap" class="w-full h-full"></div>
</template>

<script lang="ts">
export default { name: 'WdChartMap' };
</script>

<script lang="ts" setup>
import echarts from '../charts';
import { onBeforeUnmount, onMounted } from 'vue';
function drawLine() {
	// 基于准备好的dom，初始化echarts实例
	let myChart1 = echarts.init(document.getElementById('chartMap') as HTMLElement);
	// 绘制图表配置
	let option = {
		tooltip: {},
		xAxis: {
			data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
		},
		yAxis: {},
		series: [
			{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20],
				color: 'rgb(11, 234, 246)'
			}
		]
	};
	myChart1.setOption(option);
	// 图表随着窗口大小的变化而变化
}

onMounted(() => {
	drawLine();
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
