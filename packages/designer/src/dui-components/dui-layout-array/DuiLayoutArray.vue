<template>
	<el-select v-model="selectedVal" @change="changeHandle">
		<el-option
			v-for="item in optionList"
			:key="item.value"
			:label="item.label"
			:value="item.value"
		/>
	</el-select>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ISelectOp } from '@visual-designer/components';

defineOptions({
	name: 'DuiLayoutArray'
});

const props = defineProps({
	modelValue: {
		type: Object as PropType<{ value: string; values: ISelectOp[] }>,
		default: () => {}
	}
});
let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let selectedVal = ref<string | number>(modelValue.value.value);
let optionList = ref<ISelectOp[]>(modelValue.value.values);

const changeHandle = (val: string) => {
	emit('change', {
		...modelValue.value,
		value: val
	});
};
</script>
