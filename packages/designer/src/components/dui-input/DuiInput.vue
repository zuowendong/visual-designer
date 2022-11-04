<template>
	<div>
		<el-input v-model="inputValue" placeholder="Please input" @change="valChangeHandle" />
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'DuiInput'
});

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	}
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);
let inputValue = ref<string>(modelValue.value);
const valChangeHandle = (val: string) => {
	emit('change', val);
};
</script>

<style scoped lang="less"></style>
