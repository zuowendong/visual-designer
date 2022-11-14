<template>
	<div class="numberLayout">
		<el-input-number v-model="leftValue" style="width: 100%" @change="lValChangeHandle" />
		<el-input-number v-model="rightValue" style="width: 100%" @change="rValChangeHandle" />
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineOptions({
	name: 'DuiLayoutNumber'
});

const props = defineProps({
	modelValue: { type: Array as PropType<number[]>, default: () => [] }
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let leftValue = ref(modelValue.value[0]);
let rightValue = ref(modelValue.value[1]);
watch(
	() => props.modelValue,
	(val) => {
		leftValue.value = val[0];
		rightValue.value = val[0];
	},
	{ deep: true }
);

const lValChangeHandle = (val: number) => {
	const [_, rightVal] = modelValue.value;
	emit('change', [val, rightVal]);
};
const rValChangeHandle = (val: number) => {
	const [leftVal, _] = modelValue.value;
	emit('change', [leftVal, val]);
};
</script>

<style scoped lang="less">
.numberLayout {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 6px;
}
</style>
