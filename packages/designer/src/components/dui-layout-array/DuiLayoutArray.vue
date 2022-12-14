<template>
	<div>
		<el-select v-model="selectedVal" style="width: 100%" @change="changeHandle">
			<el-option
				v-for="item in optionList"
				:key="item.value"
				:label="item.label"
				:value="item.value"
			/>
		</el-select>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ISelectOp } from '@form-designer/components';

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

<style scoped lang="less"></style>
