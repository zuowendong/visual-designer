<template>
	<el-color-picker v-model="colorVal" show-alpha @change="valChangeHandle" />
</template>

<script setup lang="ts">
defineOptions({
	name: 'DuiColorPicker'
});

const props = defineProps({
	modelValue: { type: String, default: 'rgba(19, 206, 102, 0.8)' }
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let colorVal = ref(modelValue.value);
watch(
	() => props.modelValue,
	(val) => {
		colorVal.value = val;
	}
);

const valChangeHandle = (val: string) => {
	emit('change', val);
};
</script>
