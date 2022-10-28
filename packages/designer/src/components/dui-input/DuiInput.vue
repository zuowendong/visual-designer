<template>
	<div>
		<el-input v-model="modelValue" placeholder="Please input" />
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	}
});

let { modelValue } = toRefs(props);
</script>

<style scoped lang="less"></style>
