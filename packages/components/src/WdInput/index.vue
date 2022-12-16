<template>
	<div class="w-full h-full flex items-center">
		<div class="w-24 pl-1.5 text-[14px]">{{ label }}</div>
		<div class="flex-1">
			<el-input v-model="modelValue" placeholder="Please input" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

defineOptions({
	name: 'WdInput'
});

const props = defineProps({
	modelValue: { type: String, default: '' },
	label: { type: String, default: '姓名' }
});
const { modelValue, label } = toRefs(props);
</script>

<style scoped></style>
