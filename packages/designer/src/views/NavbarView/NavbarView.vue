<template>
	<div
		class="w-full h-full box-border border-b border-solid border-[#363636] flex items-center px-5 text-white"
	>
		<el-button
			type="primary"
			plain
			:disabled="!components.length"
			@click="componentStore.clearComponents"
			>清空画布</el-button
		>
		<el-button
			type="primary"
			plain
			:disabled="!(currentComponent.children && currentComponent.children.length)"
			@click="apiHandle"
			>代码生成</el-button
		>
		<CodeBox v-model="isCodeBox" :code="codeContent" />
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import { genFormCode } from '@/hooks/genFormCode';
import CodeBox from './CodeBox.vue';

const componentStore = useComponentStore();
const { currentComponent, components } = storeToRefs(componentStore);

let codeContent = ref('');
let isCodeBox = ref(false);
const apiHandle = () => {
	const formCode = genFormCode(currentComponent.value);
	axios.post('/api/user/info', formCode).then(({ data }) => {
		isCodeBox.value = true;
		codeContent.value = data.data;
	});
};
</script>
