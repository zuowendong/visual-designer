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
@import '@/style/base.less';

.componentListMain {
	width: 100%;
	box-shadow: 0px 0px 20px 0px rgba(25, 40, 74, 0.1);
	padding: 10px 24px;
	box-sizing: border-box;
	border-right: 1px solid @mainBoderColor;
	.componentItem {
		width: 140px;
		height: 40px;
		border: 1px solid @menuColor;
		color: @menuColor;
		cursor: grab;
		text-align: center;
		padding: 2px 5px;
		margin-bottom: 6px;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		user-select: none;
		background-color: @editorBgColor;

		&:active {
			color: #1e80ff;
			cursor: grabbing;
		}
		.title {
			display: inline-block;
			padding-left: 10px;
		}

		.iconfont {
			margin-right: 4px;
			font-size: 20px;
		}
	}
}
</style>
