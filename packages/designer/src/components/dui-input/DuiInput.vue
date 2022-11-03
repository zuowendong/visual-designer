<template>
	<div>
		<el-input v-model="inputValue" placeholder="Please input" />
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
let inputValue = ref<string>(modelValue.value);
</script>

<style scoped lang="less"></style>
