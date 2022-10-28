<template>
	<div style="height: 100%; display: flex; align-items: center">
		<span style="display: inline-block; width: 80px; padding-left: 6px">{{ label }}</span>
		<div style="flex: 1">
			<el-input v-model="input" placeholder="Please input" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

defineOptions({
	name: 'WdInput'
});

const props = defineProps({
	label: {
		type: String,
		default: ''
	},
	input: {
		type: String,
		default: ''
	}
});
let { label, input } = toRefs(props);
</script>

<style scoped></style>
