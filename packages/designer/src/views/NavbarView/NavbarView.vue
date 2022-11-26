<template>
	<div class="main">
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

<style scoped lang="less">
@import '@/style/base.less';
.main {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid @mainBoderColor;
	display: flex;
	align-items: center;
	padding: 0 20px;
	color: #ffffff;
	position: relative;
	.codeEditor {
		position: absolute;
		top: 40px;
		left: 100px;
		z-index: 10;
	}
}
</style>
