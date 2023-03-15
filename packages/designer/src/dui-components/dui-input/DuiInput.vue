<template>
	<el-input v-model="inputVal" placeholder="Please input" @change="valChangeHandle" />
</template>

<script setup lang="ts">
defineOptions({
	name: 'DuiInputText'
});

const props = defineProps({
	modelValue: { type: String, default: '' }
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let inputVal = ref(modelValue.value);
watch(
	() => props.modelValue,
	(val) => {
		inputVal.value = val;
	}
);

const valChangeHandle = (val: string) => {
	emit('change', val);
};
</script>
