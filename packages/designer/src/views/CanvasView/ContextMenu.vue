<template>
	<ul
		v-show="showMenu && !currentComponent.style.locked"
		class="w-44 py-1.5 bg-white border border-solid border-[#eee] rounded-sm shadow-[3px_3px_3px_rgba(#000, 0.15)] list-none absolute z-[999]"
		:style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
		@mouseup="handleMouse"
	>
		<li
			v-for="(item, i) in contextMenus"
			:key="i"
			class="h-8 leading-8 px-5 text-[#555] text-[12px] transition-[all_0.1s] whitespace-nowrap bg-white cursor-pointer menu-item"
			:class="{ disable: item.disableFun() }"
			@click.stop="item.event"
		>
			<div class="relative flex items-center justify-between">
				<span>{{ item.title }}</span>
				<span class="opacity-60">{{ item.subtitle }}</span>
			</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useContextMenu } from '@/stores/contextMenu';
import { useComponentStore } from '@/stores/component';
import { initCompDataByCopy } from '@/utils/formatComponentData';
import { useSideMenus } from '@/stores/sideMenus';

const contextMenu = useContextMenu();
const { menuTop, menuLeft, showMenu, copyCompData } = storeToRefs(contextMenu);

const componentStore = useComponentStore();
const { currentComponent, editorDom } = storeToRefs(componentStore);
function handleMouse() {
	componentStore.setChoosedComponentStatus(true);
}

const sideMenus = useSideMenus();
function handlePaste(e: MouseEvent) {
	const canvasInfo = editorDom.value.getBoundingClientRect();
	const initTop = e.clientY - canvasInfo.y;
	const initLeft = e.clientX - canvasInfo.x;

	const componentData = initCompDataByCopy(copyCompData.value, initTop, initLeft);
	componentStore.addComponent(componentData);
	sideMenus.setLiveTimeComps();
}

const contextMenus = reactive([
	{
		title: '复制',
		subtitle: 'Ctrl + C',
		disableFun: () => !currentComponent.value.id,
		event: contextMenu.copy
	},
	{
		title: '粘贴',
		subtitle: 'Ctrl + V',
		disableFun: () => !copyCompData.value.id,
		event: handlePaste
	},
	{
		title: '删除',
		subtitle: 'Delete',
		disableFun: () => !currentComponent.value.id,
		event: componentStore.deleteComponent
	},
	{
		title: '置顶',
		subtitle: '',
		disableFun: () => !currentComponent.value.id,
		event: contextMenu.setTopLevel
	},
	{
		title: '上一层',
		subtitle: 'Ctrl + ↑',
		disableFun: () => !currentComponent.value.id,
		event: contextMenu.upLevel
	},
	{
		title: '下一层',
		subtitle: 'Ctrl + ↓',
		disableFun: () => !currentComponent.value.id,
		event: contextMenu.downLevel
	},
	{
		title: '置底',
		subtitle: '',
		disableFun: () => !currentComponent.value.id,
		event: contextMenu.setBottomLevel
	}
]);
</script>

<style scoped lang="less">
.menu-item {
	&:not(.disable):hover > .has-children.has-handler::after {
		transform: scale(1);
	}
	&:hover:not(.disable) {
		background-color: rgba(209, 68, 36, 0.2);
	}
	&.disable {
		color: #b1b1b1 !important;
		cursor: no-drop !important;
	}
}
</style>
