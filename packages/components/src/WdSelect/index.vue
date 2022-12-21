<template>
	<div class="w-full h-full flex items-center">
		<div class="w-24 pl-1.5 text-[14px]">{{ label }}</div>
		<div class="flex-1">
			<el-select v-model="selectedValue" placeholder="please select" style="width: 100%">
				<el-option
					v-for="item in options.values"
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
import type { PropType } from 'vue';
import { ref, toRefs } from 'vue';
import { ISelectOp } from '../types';

const props = defineProps({
	label: { type: String, default: '所在地' },
	options: {
		type: Object as PropType<{ value: string; values: ISelectOp[] }>,
		default: () => {
			return {
				value: 'suzhou',
				values: [
					{ label: '南京', value: 'nanjing' },
					{ label: '上海', value: 'shanghai' },
					{ label: '苏州', value: 'suzhou' }
				]
			};
		}
	}
});
const { label, options } = toRefs(props);

let selectedValue = ref<string>(options.value.value);
</script>

<style scoped></style>
