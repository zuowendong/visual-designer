<template>
	<div>
		<div class="inputWrap">
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
		<div class="opsList">
			<div v-for="(item, index) in optionList" :key="index" class="opsItem">
				<span class="opItemText">{{ item.label }}</span>
				<span class="opItemText">{{ item.value }}</span>
				<el-button type="danger" plain @click="deleteHandle(index)">删除</el-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ISelectOp } from '@form-designer/components';

defineOptions({
	name: 'DuiConfigArray'
});

const props = defineProps({
	modelValue: { type: Array as PropType<ISelectOp[]>, default: () => [] }
});

let { modelValue } = toRefs(props);
const emit = defineEmits(['change']);

let formData = ref<ISelectOp>({ label: '', value: '' });
let optionList = ref<ISelectOp[]>(modelValue.value);

watch(
	() => props.modelValue,
	(list) => {
		optionList.value = list;
	},
	{ deep: true }
);

const addHandle = () => {
	optionList.value.push({ ...formData.value });
	formData.value = { label: '', value: '' };

	emit('change', optionList.value);
};
const deleteHandle = (index: number) => {
	optionList.value.splice(index, 1);
};
</script>

<style scoped lang="less">
.inputWrap {
	display: grid;
	grid-template-columns: 120px 120px 100px;
	column-gap: 6px;
}
.opsList {
	max-height: 120px;
	margin-top: 4px;
	overflow-x: hidden;
	overflow-y: auto;
	.opsItem {
		display: grid;
		grid-template-columns: 120px 120px 100px;
		column-gap: 6px;
		align-items: center;
		padding: 3px 0;
		.opItemText {
			display: inline-block;
			max-width: 100px;
			overflow: hidden;
		}
	}
}
</style>
