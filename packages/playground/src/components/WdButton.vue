<template>
	<h1 class="text-3xl mb-2 font-bold underline">按钮组件</h1>
	<WdButton class="h-[32px]" :text="text" :type="type" :show-style="showStyle" />
</template>

<script setup lang="ts">
import WdButton from '../../../components/src/WdButton/index.vue';

let text = '123';
let type = { value: 'r', values: [{ label: '', value: '' }] };
let showStyle = { value: 'r', values: [{ label: '', value: '' }] };
</script>

<style scoped></style>
