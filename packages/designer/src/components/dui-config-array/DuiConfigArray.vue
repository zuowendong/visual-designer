<template>
	<div class="grid grid-cols-[120px_120px_100px] gap-x-1.5">
		<el-input v-model="formData.label" placeholder="label" />
		<el-input v-model="formData.value" placeholder="value" />
		<el-button
			type="primary"
			plain
			:disabled="!(formData.label && formData.value)"
			@click="addHandle"
		>
			添加
		</el-button>
	</div>
	<div class="max-h-32 mt-1 overflow-x-hidden overflow-y-auto">
		<div
			v-for="(item, index) in optionList"
			:key="index"
			class="grid grid-cols-[120px_120px_100px] gap-x-1.5 items-center py-[3px]"
		>
			<span class="inline-block max-w-[100px] overflow-hidden">{{ item.label }}</span>
			<span class="inline-block max-w-[100px] overflow-hidden">{{ item.value }}</span>
			<el-button type="danger" plain @click="deleteHandle(index)">删除</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ISelectOp } from '@visual-designer/components';

defineOptions({
	name: 'DuiConfigArray'
});

const props = defineProps({
	modelValue: {
		type: Object as PropType<{ value: string; values: ISelectOp[] }>,
		default: () => {}
	}
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let formData = ref<ISelectOp>({ label: '', value: '' });
let optionList = ref<ISelectOp[]>(modelValue.value.values);

const addHandle = () => {
	optionList.value.push({ ...formData.value });
	formData.value = { label: '', value: '' };
	emit('change', optionList.value);
};
const deleteHandle = (index: number) => {
	optionList.value.splice(index, 1);
};
</script>
