<template>
	<div class="componentListMain">
		<div class="menus">
			<div v-for="(categoryItem, key) in menus" :key="key" class="categoryItem">
				<p class="categoryTitle">{{ categoryItem.name }}</p>
				<div
					v-for="(menu, mIndex) in categoryItem.list"
					:key="mIndex"
					class="componentItem"
					draggable="true"
					@dragstart="dragStartHandle($event, menu)"
				>
					<span class="iconfont" :class="'icon-' + menu.icon"></span>
					<span class="title">{{ menu.label }}</span>
				</div>
			</div>
		</div>
		<div class="liveTimeContent">
			<LiveTimeComp :list="liveTimeComps" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import type { IMenusModel, IMenuModel } from '@/types/menus';
import { fileConfig } from '@form-designer/components';
import { genMenuOps } from '@/hooks/genComponentData';
import { componentInstall } from '@/hooks/component';
import { useSideMenus } from '@/stores/sideMenus';
import LiveTimeComp from './LiveTiemComp.vue';

let menus = ref<IMenusModel>({});
onMounted(async () => {
	menus.value = await genMenuOps();
});

const sideMenus = useSideMenus();
const { liveTimeComps } = storeToRefs(sideMenus);

const dragStartHandle = async (e: DragEvent, data: IMenuModel) => {
	e!.dataTransfer!.setData('component', data.key);
	// dynamic register components
	const module = await fileConfig.fetchComponent(data.key);
	componentInstall(data.key, module.default);
	sideMenus.setCheckedMenu(data);
};
</script>

<style scoped lang="less">
@import '@/style/base.less';
.componentListMain {
	width: 100%;
	box-shadow: 0px 0px 20px 0px rgba(25, 40, 74, 0.1);
	box-sizing: border-box;
	border-right: 1px solid @mainBoderColor;
	.menus {
		padding: 10px 24px;
		height: 50%;
		overflow-x: hidden;
		overflow-y: auto;
		.categoryItem {
			padding-bottom: 6px;
			.categoryTitle {
				margin: 10px 0 4px 0;
			}
			.componentItem {
				width: 140px;
				height: 32px;
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
				font-size: 14px;

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
	}
	.liveTimeContent {
		border-top: 1px solid @mainBoderColor;
		height: 50%;
		overflow-x: hidden;
		overflow-y: auto;
	}
}
</style>
