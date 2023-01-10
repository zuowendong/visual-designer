<template>
	<h1 class="text-3xl mb-2 font-bold underline">复选框组件</h1>
	<WdCheckbox :check-list="checkList" :box-list="boxList" label="学科" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checkList = ref(['数学']);
const boxList = ref(['语文', '数学']);
</script>

<style scoped></style>
