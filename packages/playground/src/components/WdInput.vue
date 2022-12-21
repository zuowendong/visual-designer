<template>
	<h1 class="text-3xl mb-2 font-bold underline">输入框组件</h1>
	<WdInput v-model="subject" label="学科" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WdInput from '../../../components/src/WdInput/index.vue';

let subject = ref('数学');
</script>

<style scoped></style>
