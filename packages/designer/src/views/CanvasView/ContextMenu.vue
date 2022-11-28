<template>
	<ul
		v-show="showMenu"
		class="context-menu"
		:style="{ top: menuTop + 'px', left: menuLeft + 'px' }"
		@mouseup="mouseUpHandle"
	>
		<li class="menu-item" :class="{ disable: !currentComponent.id }" @click.stop="contextMenu.copy">
			<div class="menu-item-content">
				<span class="text">复制</span>
				<span class="sub-text">Ctrl + C</span>
			</div>
		</li>
		<li class="menu-item" @click.stop="pasteHandle">
			<div class="menu-item-content">
				<span class="text">粘贴</span>
				<span class="sub-text">Ctrl + V</span>
			</div>
		</li>
		<li
			class="menu-item"
			:class="{ disable: !currentComponent.id }"
			@click.stop="componentStore.deleteComponent"
		>
			<div class="menu-item-content">
				<span class="text">删除</span>
				<span class="sub-text">Delete</span>
			</div>
		</li>
		<li
			class="menu-item"
			:class="{ disable: !currentComponent.id }"
			@click.stop="contextMenu.setTopLevel"
		>
			<div class="menu-item-content">
				<span class="text">置顶</span>
			</div>
		</li>
		<li class="menu-item" :class="{ disable: !currentComponent.id }" @click.stop="">
			<div class="menu-item-content">
				<span class="text">上一层</span>
				<span class="sub-text">Ctrl + ↑</span>
			</div>
		</li>
		<li class="menu-item" :class="{ disable: !currentComponent.id }" @click.stop="">
			<div class="menu-item-content">
				<span class="text">下一层</span>
				<span class="sub-text">Ctrl + ↓</span>
			</div>
		</li>
		<li class="menu-item" :class="{ disable: !currentComponent.id }" @click.stop="">
			<div class="menu-item-content">
				<span class="text">置底</span>
			</div>
		</li>
	</ul>
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
.context-menu {
	width: 170px;
	padding: 5px 0;
	background: #fff;
	border: 1px solid #eee;
	box-shadow: 3px 3px 3px rgba(#000, 0.15);
	border-radius: 2px;
	list-style: none;
	margin: 0;
	position: absolute;
	z-index: 999;
	.menu-item {
		padding: 0 20px;
		color: #555;
		font-size: 12px;
		transition: all 0.1s;
		white-space: nowrap;
		height: 30px;
		line-height: 30px;
		background-color: #fff;
		cursor: pointer;

		&:not(.disable):hover > .menu-item-content > .sub-menu {
			display: block;
		}

		&:not(.disable):hover > .has-children.has-handler::after {
			transform: scale(1);
		}

		&:hover:not(.disable) {
			background-color: rgba(209, 68, 36, 0.2);
		}

		&.disable {
			color: #b1b1b1;
			cursor: no-drop;
		}

		.menu-item-content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;

			.sub-text {
				opacity: 0.6;
			}
			.sub-menu {
				width: 120px;
				position: absolute;
				display: none;
				left: 112%;
				top: -6px;
			}
		}
	}
}
</style>
