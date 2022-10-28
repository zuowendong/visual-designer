<template>
	<div style="height: 100%; display: flex; align-items: center">
		<span style="display: inline-block; width: 80px; padding-left: 6px">{{ label }}</span>
		<div style="flex: 1">
			<el-select v-model="modelValue" :placeholder="placeholder" style="width: 100%">
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
import { toRefs } from 'vue';
import type { PropType } from 'vue';

interface OptionModel {
	label: string;
	value: string;
}

defineOptions({
	name: 'WdSelect'
});

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: '请选择'
	},
	options: {
		type: Array as PropType<OptionModel[]>,
		default: () => {
			return [];
		}
	},
	label: {
		type: String,
		default: ''
	}
});
let { modelValue, placeholder, options, label } = toRefs(props);
</script>

<style scoped></style>
