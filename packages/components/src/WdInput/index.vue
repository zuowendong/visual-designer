<template>
	<div class="w-full h-full flex items-center">
		<div class="w-24 pl-1.5 text-[14px]">{{ label }}</div>
		<div class="flex-1">
			<el-input v-model="inputVal" placeholder="Please input" />
		</div>
	</div>
</template>

<script lang="ts">
export default { name: 'WdInput' };
</script>

<script setup lang="ts">
import { toRefs, ref, watch } from 'vue';

const props = defineProps({
	modelValue: { type: String, default: '' },
	label: { type: String, default: '姓名' }
});
const { modelValue, label } = toRefs(props);

let inputVal = ref(modelValue.value);

watch(
	() => props.modelValue,
	(val) => {
		inputVal.value = val;
	}
);
</script>

<style scoped></style>
