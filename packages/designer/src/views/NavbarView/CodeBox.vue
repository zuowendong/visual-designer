<template>
	<el-dialog v-model="modelValue" title="查看代码" :close-on-click-modal="false" @close="onClose">
		<CodeEditor v-model="codeContent" />
	</el-dialog>
</template>

<script setup lang="ts">
import CodeEditor from '@/components/CodeEditor.vue';

const props = defineProps({
	modelValue: { type: Boolean, default: false },
	code: { type: String, default: '' }
});
let { modelValue, code } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

const onClose = () => {
	emit('update:modelValue', false);
	codeContent.value = '';
};

let codeContent = ref<string>('');
watch(
	() => props.modelValue,
	(val) => {
		if (val) codeContent.value = code.value;
	}
);
</script>
