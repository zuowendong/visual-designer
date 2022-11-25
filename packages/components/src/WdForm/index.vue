<template>
	<div :style="formConStyle">
		<div v-for="(item, i) in maskList" :key="i" :data-index="i" style="outline: 1px dashed #ccc">
			<!-- <slot :component="item"></slot> -->
			<slot :component="item" :index="i"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';

defineOptions({
	name: 'WdForm'
});

const props = defineProps({
	list: { type: Array, default: () => [] },
	row: { type: Number, default: 4 },
	column: { type: Number, default: 2 }
});
const { row, column } = toRefs(props);

let maskList = ref<any[]>([]);
maskList.value = new Array(row.value * column.value);

watch(
	() => props.list,
	(val) => {
		maskList.value = Object.assign(maskList.value, val);
	},
	{ deep: true }
);

let rowNum = ref<number>(row.value);
watch(
	() => props.row,
	(num) => {
		rowNum.value = num;
		maskList.value = new Array(num * column.value);
	}
);

let columnNum = ref<number>(column.value);
watch(
	() => props.column,
	(num) => {
		columnNum.value = num;
		maskList.value = new Array(row.value * num);
	}
);

const formConStyle = computed(
	() =>
		`width: 100%; height: 100%; display: grid; grid-template-columns: repeat(${columnNum.value}, 1fr); grid-template-rows: repeat(${rowNum.value}, 1fr); gap: 4px`
);
</script>

<style scoped></style>
