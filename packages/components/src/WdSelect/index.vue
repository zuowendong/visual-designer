<template>
	<div class="w-full h-full flex items-center">
		<div class="w-24 pl-1.5 text-[14px]">{{ label }}</div>
		<div class="flex-1">
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

<script lang="ts">
export default { name: 'WdSelect' };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ISelectOp } from '../types';

const props = defineProps<{
	modelValue: string;
	label: string;
	options: ISelectOp[];
}>();

let selectedValue = ref<string>(props.modelValue);
</script>

<style scoped></style>
