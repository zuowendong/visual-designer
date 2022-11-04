<template>
	<div :style="inputConStyle">
		<span :style="inputLabelStyle">{{ labelValue }}</span>
		<div style="flex: 1">
			<el-input v-model="inputValue" placeholder="Please input" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

defineOptions({
	name: 'WdInput'
});

const props = defineProps<{
	modelValue: string;
	label: string;
}>();

let inputValue = ref<string>(props.modelValue);
let labelValue = ref<string>(props.label);

const inputConStyle = computed(() => `height: 100%; display: flex; align-items: center`);
const inputLabelStyle = computed(
	() => `display: inline-block; width: 80px; padding-left: 6px; font-size: 14px`
);
</script>

<style scoped></style>
