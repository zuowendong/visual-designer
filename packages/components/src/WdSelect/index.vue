<template>
	<div :style="selectConStyle">
		<span :style="selectLabelStyle">{{ label }}</span>
		<div style="flex: 1">
			<el-select v-model="selectedValue" placeholder="please select" style="width: 100%">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/>
			</el-select>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ISelectOp } from '../types';

defineOptions({
	name: 'WdSelect'
});

const props = defineProps<{
	modelValue: string;
	label: string;
	options: ISelectOp[];
}>();

let selectedValue = ref<string>(props.modelValue);

const selectConStyle = computed(
	() => `width: 100%; height: 100%; display: flex; align-items: center`
);
const selectLabelStyle = computed(
	() => `display: inline-block; width: 80px; padding-left: 6px; font-size: 14px`
);
</script>

<style scoped></style>
