<template>
	<div class="componentListMain" @dragstart="dragStartHandle">
		<div
			v-for="(item, index) in componentList"
			:key="index"
			class="componentItem"
			:draggable="true"
			:data-index="index"
		>
			<span class="iconfont" :class="'icon-' + item.icon"></span>
			<span class="title">{{ item.name }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import componentList from '@/assets/componnetList';

const dragStartHandle = (e: any) => {
	e.dataTransfer.setData('index', e.target.dataset.index);
};
</script>

<style scoped lang="less">
@import './sidebar.less';
</style>
