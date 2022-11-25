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
	modelValue: { type: Array as PropType<ISelectOp[]>, default: () => [] }
});

let { modelValue } = toRefs(props);

let selectedVal = ref<string | number>('');
let optionList = ref<ISelectOp[]>(modelValue.value);
watch(
	() => props.modelValue,
	(list) => {
		optionList.value = list;
	},
	{ deep: true }
);

const changeHandle = (val: string) => {
	for (let i = 0; i < optionList.value.length; i++) {
		optionList.value[i].active = false;
		if (optionList.value[i].value === val) {
			optionList.value[i].active = true;
			// selectedVal.value = optionList.value[i].value;
		}
	}
};
</script>

<style scoped lang="less"></style>
