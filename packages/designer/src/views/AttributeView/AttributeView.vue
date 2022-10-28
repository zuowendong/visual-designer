<template>
	<div class="main">
		{{ currentComponent }}
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';

const componentStore = useComponentStore();
const { currentComponent } = storeToRefs(componentStore);

const value = ref('11111111');
</script>

<style scoped lang="less">
.main {
	width: 100%;
	box-shadow: 0px 0px 20px 0px rgba(25, 40, 74, 0.1);
	padding: 10px 24px;
	box-sizing: border-box;
	border-left: 1px solid #5454547a;
}
</style>
