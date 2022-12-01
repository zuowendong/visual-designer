<template>
	<el-button
		:type="btnType"
		:plain="isPlain"
		:round="btnStyle === 'round'"
		:text="btnStyle === 'text'"
		:disabled="isDisabled"
		:color="bgColor"
		>{{ btnText }}</el-button
	>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { toRefs, ref, watch } from 'vue';
import { ISelectOp } from '../types';

defineOptions({
	name: 'WdButton'
});

const props = defineProps({
	text: { type: String, default: '确定' },
	type: { type: Array as PropType<ISelectOp[]>, default: () => [] }, // '' | primary | success | info | warning | danger
	isPlain: { type: Boolean, default: false },
	showStyle: { type: Array as PropType<ISelectOp[]>, default: () => [] }, // 风格： round 扁平 | text 文字
	isDisabled: { type: Boolean, default: false },
	bgColor: { type: String, default: '' }
});
const { text } = toRefs(props);

let btnText = ref(text.value);
watch(
	() => props.text,
	(str) => {
		btnText.value = str;
	}
);

let btnType = ref<string>('');
watch(
	() => props.type,
	(val) => {
		const target = val.find((item: ISelectOp) => item.active);
		if (target) {
			btnType.value = target!.value as string;
		}
	},
	{ deep: true }
);

let btnStyle = ref<string>('');
watch(
	() => props.showStyle,
	(val) => {
		const target = val.find((item: ISelectOp) => item.active);
		if (target) {
			btnStyle.value = target!.value as string;
		}
	},
	{ deep: true }
);
</script>
