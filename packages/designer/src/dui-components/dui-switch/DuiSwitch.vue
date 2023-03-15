<template>
	<el-switch v-model="switchVal" @change="valChangeHandle" />
</template>

<script setup lang="ts">
defineOptions({
	name: 'DuiSwitch'
});

const props = defineProps({
	modelValue: { type: Boolean, default: false }
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let switchVal = ref(modelValue.value);
watch(
	() => props.modelValue,
	(val) => {
		switchVal.value = val;
	}
);

const valChangeHandle = (val: boolean) => {
	emit('change', val);
};
</script>
