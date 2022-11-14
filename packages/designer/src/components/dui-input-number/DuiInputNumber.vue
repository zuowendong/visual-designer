<template>
	<div>
		<el-input-number v-model="numValue" :min="0" style="width: 100%" @change="valChangeHandle" />
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'DuiInputNumber'
});

const props = defineProps({
	modelValue: { type: Number, default: 0 }
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let numValue = ref(modelValue.value);
watch(
	() => props.modelValue,
	(num) => {
		numValue.value = num;
	}
);

const valChangeHandle = (val: number) => {
	emit('change', val);
};
</script>

<style scoped lang="less"></style>
