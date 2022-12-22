<template>
	<div
		class="w-full py-2.5 px-6 border-l border-solid border-[#363636] overflow-x-hidden overflow-y-auto"
	>
		<el-tabs v-model="activeTab" class="tabCon" @tab-click="handleClick">
			<el-tab-pane label="属性" name="property">
				<TabProperty />
			</el-tab-pane>
			<el-tab-pane label="数据" name="data">
				<TabData />
			</el-tab-pane>
			<el-tab-pane label="事件" name="event">
				<TabEvent />
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup lang="ts">
import TabProperty from './TabProperty.vue';
import TabData from './TabData.vue';
import TabEvent from './TabEvent.vue';

const activeTab = ref('property');
const handleClick = (tab: string, event: Event) => {
	console.log(tab, event);
};
</script>

<style scoped lang="less">
.tabCon {
	:deep(.el-tabs__nav-wrap) {
		&::after {
			background-color: transparent;
		}
		.el-tabs__item {
			color: #fff;
		}
	}
}
</style>
