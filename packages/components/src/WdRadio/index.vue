<template>
	<div class="w-full h-full flex items-center">
		<div class="w-24 pl-1.5 text-[14px]">{{ label }}</div>
		<div class="flex-1">
			<el-radio-group v-model="radioVal" class="ml-4">
				<el-radio v-for="(item, i) in radioList" :key="i" :label="item.value">{{
					item.label
				}}</el-radio>
			</el-radio-group>
		</div>
	</div>
</template>

<script lang="ts">
export default { name: 'WdRadio' };
</script>

<script setup lang="ts">
import type { PropType } from 'vue';
import { toRefs, ref } from 'vue';

const props = defineProps({
	label: { type: String, default: '籍贯' },
	modelValue: { type: String, default: 'nanjing' },
	radioList: {
		type: Array as PropType<{ value: string; label: string }[]>,
		default: () => [
			{ label: '南京', value: 'nanjing' },
			{ label: '上海', value: 'shanghai' },
			{ label: '苏州', value: 'suzhou' }
		]
	}
});
const { label, modelValue, radioList } = toRefs(props);

let radioVal = ref(modelValue.value);
</script>
