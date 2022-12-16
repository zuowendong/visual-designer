<template>
	<div class="w-full min-h-[300px]" ref="aceRef"></div>
</template>

<script setup lang="ts">
import ace from 'ace-builds';
import modeJavascriptUrl from 'ace-builds/src-noconflict/mode-javascript?url';
import themeChromeUrl from 'ace-builds/src-noconflict/theme-chrome?url';
import snippetsJsUrl from 'ace-builds/src-noconflict/snippets/javascript?url';

const props = defineProps({
	modelValue: { type: String, default: '' },
	readonly: { type: Boolean, default: true },
	mode: { type: String, default: 'javascript' }
});
const { modelValue, readonly, mode } = toRefs(props);
// const emits = defineEmits(['update:modelValue']);

const aceRef: any = ref();
let aceEditor = ref();

const initEditor = () => {
	aceEditor.value = ace.edit(aceRef.value, {
		maxLines: 20, // 最大行数，超过会自动出现滚动条
		minLines: 5, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
		fontSize: 12, // 编辑器内字体大小
		theme: 'ace/theme/chrome', // 默认设置的主题
		mode: `ace/mode/${mode.value}`, // 默认设置的语言模式
		tabSize: 2, // 制表符设置为2个空格大小
		readOnly: readonly.value,
		highlightActiveLine: true,
		value: modelValue.value
	});
};

const setModule = () => {
	ace.config.setModuleUrl('ace/snippets/javascript', snippetsJsUrl);
	ace.config.setModuleUrl('ace/theme/chrome', themeChromeUrl);
	ace.config.setModuleUrl('ace/mode/javascript', modeJavascriptUrl);
};

onMounted(() => {
	setModule();
	initEditor();
});

watch(
	() => props.modelValue,
	(val) => {
		setValue(val);
	}
);

const setValue = (code: string) => {
	aceEditor.value.getSession().setValue(code);
};
</script>
