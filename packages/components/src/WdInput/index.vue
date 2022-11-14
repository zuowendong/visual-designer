<template>
	<div :style="inputConStyle">
		<span :style="inputLabelStyle">{{ label }}</span>
		<div style="flex: 1">
			<el-input v-model="modelValue" placeholder="Please input" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

defineOptions({
	name: 'WdInput'
});

const props = defineProps({
	modelValue: { type: String, default: '' },
	label: { type: String, default: 'input' }
});
const { modelValue, label } = toRefs(props);

const inputConStyle = computed(
	() => `width: 100%; height: 100%; display: flex; align-items: center`
);
const inputLabelStyle = computed(
	() => `display: inline-block; width: 80px; padding-left: 6px; font-size: 14px`
);
</script>

<style scoped></style>
