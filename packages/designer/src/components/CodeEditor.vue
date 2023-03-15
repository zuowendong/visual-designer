<template>
	<div class="w-full min-h-[300px]" ref="aceRef"></div>
</template>

<script setup lang="ts">
import ace from 'ace-builds';
import themeChromeUrl from 'ace-builds/src-noconflict/theme-chrome?url';
import modeJavascriptUrl from 'ace-builds/src-noconflict/mode-javascript?url';
import snippetsJsUrl from 'ace-builds/src-noconflict/snippets/javascript?url';
import modeJsonUrl from 'ace-builds/src-noconflict/mode-json?url';
import snippetsJsonUrl from 'ace-builds/src-noconflict/snippets/json?url';
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url';
const props = defineProps({
	modelValue: { type: String, default: '' },
	readonly: { type: Boolean, default: false },
	mode: { type: String, default: 'javascript' }
});
const { modelValue, readonly, mode } = toRefs(props);
const emits = defineEmits(['update:modelValue']);
const aceRef: any = ref();
let aceEditor = ref();
const initEditor = () => {
	setModule();
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
/**
 * https://github.com/CarterLi/vue3-ace-editor
 */
const setModule = () => {
	ace.config.setModuleUrl('ace/theme/chrome', themeChromeUrl);
	ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl);
	switch (mode.value) {
		case 'javascript':
			ace.config.setModuleUrl('ace/snippets/javascript', snippetsJsUrl);
			ace.config.setModuleUrl('ace/mode/javascript', modeJavascriptUrl);
			break;
		case 'json':
			ace.config.setModuleUrl('ace/snippets/json', snippetsJsonUrl);
			ace.config.setModuleUrl('ace/mode/json', modeJsonUrl);
			break;
		default:
			break;
	}
};
onMounted(() => {
	initEditor();
	//编辑时同步数据
	aceEditor.value.getSession().on('change', () => {
		emits('update:modelValue', aceEditor.value.getValue());
	});
});
watch(
	() => props.modelValue,
	(val, oldVal) => {
		if (val && !oldVal) {
			setValue(val);
		}
	}
);
const setValue = (code: string) => {
	switch (mode.value) {
		case 'javascript':
			aceEditor.value.getSession().setValue(code);
			break;
		case 'json':
			aceEditor.value.getSession().setValue(JSON.stringify(JSON.parse(code), null, 2));
			break;
		default:
			break;
	}
};
</script>
