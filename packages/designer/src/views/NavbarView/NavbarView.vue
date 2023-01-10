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
			<el-button type="text" :disabled="!components.length" @click="saveHandle">保存</el-button>
		</div>
		<div class="px-2">
			<i class="iconfont icon-zitiyulan mr-1"></i>
			<el-button type="text" :disabled="!components.length" @click="previewHandle">预览</el-button>
		</div>
		<CodeBox v-model="isCodeBox" :code="codeContent" />
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import { genFormCode } from '@/utils/genFormCode';
import CodeBox from './CodeBox.vue';
import { genCode } from '../../api/component';

const componentStore = useComponentStore();
const { currentComponent, components } = storeToRefs(componentStore);

let codeContent = ref('');
let isCodeBox = ref(false);
const apiHandle = async () => {
	const formCode = genFormCode(currentComponent.value);
	const { data } = await genCode(formCode);
	isCodeBox.value = true;
	codeContent.value = data;
};

const saveHandle = async () => {
	// const { data } = await saveScene(components.value);
	console.log(JSON.stringify(components.value));
};

const router = useRouter();

const previewHandle = () => {
	localStorage.setItem('componentData', JSON.stringify(components.value));
	// window.open(`${location.href}preview`, '_blank');

	router.push({
		name: 'preview'
	});
};
</script>
