<template>
	<div>
		<h1>按钮组件</h1>
		<WdButton :text="text" :type="type" :show-style="showStyle" />
	</div>
</template>

<script setup lang="ts">
import WdButton from '../../../components/src/WdButton/index.vue';

let text = '123';
let type = { value: 'r', values: [{ label: '', value: '' }] };
let showStyle = { value: 'r', values: [{ label: '', value: '' }] };
</script>

<style scoped></style>
