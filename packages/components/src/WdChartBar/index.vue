<template>
	<BaseChart :option="option" />
</template>

<script lang="ts">
export default { name: 'WdChartBar' };
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseChart from '../BaseChart/index.vue';

const option = ref({
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
});
</script>
