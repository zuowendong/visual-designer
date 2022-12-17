<template>
	<div class="w-full h-full flex items-center">
		<div class="w-24 pl-1.5 text-[14px]">{{ label }}</div>
		<div class="flex-1">
			<el-checkbox-group v-model="checkedVal">
				<el-checkbox
					v-for="(item, index) in boxList"
					:key="index"
					:label="item"
					class="text-white"
				/>
			</el-checkbox-group>
		</div>
	</div>
</template>

<script lang="ts">
export default { name: 'WdCheckbox' };
</script>

<script setup lang="ts">
import type { PropType } from 'vue';
import { toRefs, ref } from 'vue';

const props = defineProps({
	checkList: { type: Array as PropType<string[]>, default: (): string[] => [] },
	boxList: {
		type: Array as PropType<string[]>,
		default: (): string[] => ['Vue', 'React', 'solidjs', 'tailwindcss']
	},
	label: { type: String, default: '技术栈' }
});
const { checkList, boxList, label } = toRefs(props);

let checkedVal = ref(checkList.value);
</script>
