<template>
	<div :style="formConStyle">
		<div v-for="(item, i) in list" :key="i" :data-key="item.key" :data-compid="item.id">
			<slot :component="item"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

defineOptions({
	name: 'WdForm'
});

const props = defineProps<{
	list: any[];
	row: number;
	column: number;
}>();

let rowNum = ref<number>(props.row);
watch(
	() => props.row,
	(num) => {
		rowNum.value = num;
	}
);

let columnNum = ref<number>(props.column);
watch(
	() => props.column,
	(num) => {
		columnNum.value = num;
	}
);

const formConStyle = computed(
	() =>
		`width: 100%; height: 100%; display: grid; grid-template-columns: repeat(${columnNum.value}, 1fr); grid-template-rows: repeat(${rowNum.value}, 1fr); gap: 4px`
);
</script>

<style scoped></style>
