<template>
	<div class="w-full h-full flex items-center">
		<el-input v-model="inputVal" placeholder="Please input" />
	</div>
</template>

<script lang="ts">
export default { name: 'WdInput' };
</script>

<script setup lang="ts">
import { toRefs, ref, watch } from 'vue';

const props = defineProps({
	modelValue: { type: String, default: '' }
});
const { modelValue } = toRefs(props);

let inputVal = ref(modelValue.value);

watch(
	() => props.modelValue,
	(val) => {
		inputVal.value = val;
	}
);
</script>

<style scoped></style>
