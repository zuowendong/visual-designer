<template>
	<div
		v-show="showMenu"
		class="contextmenu"
		:style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
	>
		<ul @mouseup="mouseUpHandle">
			<li>
				<el-button text size="small" :disabled="!currentComponent.id" @click="contextMenu.copy"
					>复制</el-button
				>
			</li>
			<li>
				<el-button text size="small" @click="pasteHandle">粘贴</el-button>
			</li>
			<li>
				<el-button
					text
					size="small"
					:disabled="!currentComponent.id"
					@click="componentStore.deleteComponent"
					>删除</el-button
				>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useContextMenu } from '@/stores/contextMenu';
import { useComponentStore } from '@/stores/component';
import { initCompDataByCopy } from '@/hooks/formatComponentData';
import { useSideMenus } from '@/stores/sideMenus';

const contextMenu = useContextMenu();
const { menuTop, menuLeft, showMenu, copyCompData } = storeToRefs(contextMenu);

const componentStore = useComponentStore();
const { currentComponent, editorDom } = storeToRefs(componentStore);
const mouseUpHandle = () => {
	componentStore.setChoosedComponentStatus(true);
};

const sideMenus = useSideMenus();
const pasteHandle = (e: MouseEvent) => {
	const canvasInfo = editorDom.value.getBoundingClientRect();
	const initTop = e.clientY - canvasInfo.y;
	const initLeft = e.clientX - canvasInfo.x;

	const componentData = initCompDataByCopy(copyCompData.value, initTop, initLeft);
	componentStore.addComponent(componentData);
	sideMenus.setLiveTimeComps();
};
</script>

<style scoped lang="less">
.contextmenu {
	position: absolute;
	z-index: 1000;

	ul {
		border: 1px solid #e4e7ed;
		border-radius: 4px;
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
		margin: 5px 0;
		padding: 6px 0;

		li {
			font-size: 14px;
			padding: 0 20px;
			position: relative;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #606266;
			height: 34px;
			line-height: 34px;
			box-sizing: border-box;
			cursor: pointer;

			&:hover {
				background-color: #f5f7fa;
			}
		}
	}
}
</style>
