<template>
	<div class="w-full h-full box-border p-5 overflow-hidden">
		<div class="h-2/4 overflow-auto">
			<div v-for="(categoryItem, key) in menus" :key="key" class="pb-1.5">
				<p class="mt-2.5 mb-1">{{ categoryItem.name }}</p>
				<div
					v-for="(menu, mIndex) in categoryItem.list"
					:key="mIndex"
					class="itemWrapper"
					draggable="true"
					@dragstart="dragStartHandle($event, menu)"
				>
					<span class="iconfont mr-1 text-[20px]" :class="'icon-' + menu.icon"></span>
					<span class="inline-block pl-2.5">{{ menu.label }}</span>
				</div>
			</div>
		</div>
		<div class="h-2/4 box-border pt-5 overflow-auto">
			<LiveTimeComp />
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IMenusModel, IMenuModel } from '@/types/menus';
import { fileConfig } from '@visual-designer/components';
import { genMenuOps } from '@/utils/genComponentData';
import { componentInstall } from '@/utils/component';
import { useSideMenus } from '@/stores/sideMenus';
import LiveTimeComp from './LiveTiemComp.vue';

let menus = ref<IMenusModel>({});
onMounted(async () => {
	menus.value = await genMenuOps();
});

const sideMenus = useSideMenus();
async function dragStartHandle(e: DragEvent, data: IMenuModel) {
	e!.dataTransfer!.setData('component', data.key);
	// dynamic register components
	const module = await fileConfig.fetchComponent(data.key);
	componentInstall(data.key, module.default);
	sideMenus.setCheckedMenu(data);
}
</script>

<style scoped lang="less">
.itemWrapper {
	@apply w-36 h-8 border border-solid border-[#979797] text-[#979797] text-center cursor-grab py-0.5 px-2 mb-1.5 rounded-md select-none bg-[#2f2f2f] text-[14px] active:text-[#1e80ff] active:cursor-grabbing flex items-center pl-3;
}
</style>
