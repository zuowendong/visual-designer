<template>
	<div
		class="w-full h-full box-border border-b border-solid border-[#363636] flex items-center px-5 text-white"
	>
		<div class="px-2">
			<i class="iconfont icon-qingkong mr-1"></i>
			<el-button type="text" :disabled="!components.length" @click="componentStore.clearComponents">
				清空画布</el-button
			>
		</div>
		<div class="px-2">
			<i class="iconfont icon-daima mr-1"></i>
			<el-button
				type="text"
				:disabled="!(currentComponent.children && currentComponent.children.length)"
				@click="apiHandle"
				>代码生成</el-button
			>
		</div>
		<div class="px-2">
			<i class="iconfont icon-zitiyulan mr-1"></i>
			<el-button type="text" :disabled="!components.length" @click="previewHandle">预览</el-button>
		</div>
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
	axios.post('/api/component/code', formCode).then(({ data }) => {
		isCodeBox.value = true;
		codeContent.value = data.data;
	});
};

const previewHandle = () => {
	let linkDom = document.createElement('a');
	var event = new MouseEvent('click');
	linkDom.target = '_blank';
	linkDom.href = `${import.meta.env.VITE_BASE_URL}preview.html`;
	linkDom.dispatchEvent(event);
};
</script>
