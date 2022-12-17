<template>
	<el-button
		class="w-full h-full"
		:type="type.value"
		:plain="isPlain"
		:round="showStyle.value === 'round'"
		:text="showStyle.value === 'text'"
		:color="bgColor"
		>{{ btnText }}</el-button
	>
</template>

<script lang="ts">
export default { name: 'WdButton' };
</script>

<script setup lang="ts">
import type { PropType } from 'vue';
import { toRefs, ref, watch } from 'vue';
import { ISelectOp } from '../types';

const props = defineProps({
	text: { type: String, default: '确定' },
	type: { type: Object as PropType<{ value: string; values: ISelectOp[] }>, default: () => {} }, // '' | primary | success | info | warning | danger
	isPlain: { type: Boolean, default: false },
	showStyle: {
		type: Object as PropType<{ value: string; values: ISelectOp[] }>,
		default: () => {}
	}, // 风格： round 扁平 | text 文字
	// isDisabled: { type: Boolean, default: false },
	bgColor: { type: String, default: '' }
});
const { text, type } = toRefs(props);

let btnText = ref(text.value);
watch(
	() => props.text,
	(str) => {
		btnText.value = str;
	}
);
</script>
