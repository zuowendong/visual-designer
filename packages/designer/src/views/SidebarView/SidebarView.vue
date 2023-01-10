<template>
	<div
		class="w-full shadow-[0px_0px_20px_0px_rgba(25,40,74,0.1)] box-border border-r border-solid border-[#363636]"
	>
		<div class="h-2/4 px-6 py-2.5 overflow-y-auto overflow-x-hidden">
			<div v-for="(categoryItem, key) in menus" :key="key" class="pb-1.5">
				<p class="mt-2.5 mb-1">{{ categoryItem.name }}</p>
				<div
					v-for="(menu, mIndex) in categoryItem.list"
					:key="mIndex"
					class="w-36 h-8 border border-solid border-[#979797] text-[#979797] text-center cursor-grab py-0.5 px-[5px] mb-1.5 rounded-md flex items-center justify-center select-none bg-[#2f2f2f] text-[14px] active:text-[#1e80ff] active:cursor-grabbing"
					draggable="true"
					@dragstart="dragStartHandle($event, menu)"
				>
					<span class="iconfont mr-1 text-[20px]" :class="'icon-' + menu.icon"></span>
					<span class="inline-block pl-2.5">{{ menu.label }}</span>
				</div>
			</div>
		</div>
		<div class="h-2/4 overflow-y-auto overflow-x-hidden border-t border-solid border-[#363636]">
			<LiveTimeComp :list="liveTimeComps" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import type { IMenusModel, IMenuModel } from '@/types/menus';
import { fileConfig } from '@visual-designer/components';
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
