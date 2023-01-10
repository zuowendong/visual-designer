<template>
	<h1 class="text-3xl mb-2 font-bold underline">表单容器组件</h1>
	<WdForm class="h-[150px]" :list="list">
		<template #default="{ component }">
			<div v-if="component" class="h-full flex items-center pl-1">
				<span>{{ fromatName(component) }}</span>
				, 今年
				<span>{{ fromatAge(component) }}</span>
				岁了
			</div>
		</template>
	</WdForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const list = ref([
	{ name: 'jack', age: 18 },
	{ name: 'tom', age: 24 },
	{ name: 'bert', age: 16 },
	{ name: 'lucy', age: 22 }
]);

const fromatName = (data: any) => {
	return data ? data.name : '';
};
const fromatAge = (data: any) => {
	return data ? data.age : '';
};
</script>

<style scoped></style>
