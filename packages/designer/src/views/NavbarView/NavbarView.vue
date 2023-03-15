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
			<el-button type="text" @click="handleCode">代码生成</el-button>
		</div>
		<div class="px-2">
			<i class="iconfont icon-zitiyulan mr-1"></i>
			<el-button type="text" :disabled="!components.length" @click="saveHandle">保存</el-button>
		</div>
		<div class="px-2">
			<i class="iconfont icon-zitiyulan mr-1"></i>
			<el-button type="text" @click="previewHandle">预览</el-button>
		</div>
		<AsyncCodeBoxComp v-model="isCodeBox" :code="codeContent" />
	</div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';

const componentStore = useComponentStore();
const { components } = storeToRefs(componentStore);

const AsyncCodeBoxComp = defineAsyncComponent(() => import('./CodeBox.vue'));

let codeContent = ref('');
let isCodeBox = ref(false);
function handleCode() {
	isCodeBox.value = true;
	codeContent.value = 'gengerate code';
}

function saveHandle() {
	console.log(JSON.stringify(components.value));
}

const router = useRouter();
function previewHandle() {
	localStorage.setItem('componentData', JSON.stringify(components.value));
	router.push({
		name: 'preview'
	});
}
</script>
