<template>
	<div class="w-full h-full flex items-center">
		<div class="w-24 pl-1.5 text-[14px]">{{ label }}</div>
		<div class="flex-1">
			<el-switch v-model="switchVal" />
		</div>
	</div>
</template>

<script lang="ts">
export default { name: 'WdSwitch' };
</script>

<script setup lang="ts">
import { toRefs, ref } from 'vue';

const props = defineProps({
	modelValue: { type: Boolean, default: false },
	label: { type: String, default: '🐏没🐏' }
});
const { modelValue, label } = toRefs(props);

let switchVal = ref<boolean>(modelValue.value);
</script>
