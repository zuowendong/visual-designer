<template>
	<VirtualList :list="liveTimeComps">
		<template #default="{ row }">
			<div
				class="box-border w-full h-full"
				:style="{ paddingLeft: `${row.depth * 16}px` }"
				@click="chooseHandle(row)"
			>
				<i v-if="row.key === 'root'" class="iconfont icon-shuzhuangtu mr-2"></i>
				<span
					:class="{
						'text-white': row.key === 'root',
						'text-[#59c7f9] cursor-pointer': currentComponent.id === row.id
					}"
				>
					{{ row.label }}
				</span>
			</div>
		</template>
	</VirtualList>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { ILiveTimeCompModel } from '@/types/menus';
import { useComponentStore } from '@/stores/component';
import VirtualList from '@/components/VirtualList.vue';
import { useSideMenus } from '@/stores/sideMenus';

const sideMenus = useSideMenus();
const { liveTimeComps } = storeToRefs(sideMenus);
const componentStore = useComponentStore();
const { currentComponent } = storeToRefs(componentStore);
function chooseHandle(compItem: ILiveTimeCompModel) {
	if (compItem.key === 'root') {
		console.log('展开收起');
	} else {
		componentStore.setCurrentComponentById(compItem.id);
	}
}
</script>
