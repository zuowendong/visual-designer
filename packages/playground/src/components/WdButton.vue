<template>
	<h1 class="text-3xl mb-2 font-bold underline">按钮组件</h1>
	<WdButton class="w-[100px] h-[32px]" :text="text" :type="type" :show-style="showStyle" />
</template>

<script setup lang="ts">
let text = '123';
let type = { value: 'r', values: [{ label: '', value: '' }] };
let showStyle = { value: 'r', values: [{ label: '', value: '' }] };
</script>

<style scoped></style>
