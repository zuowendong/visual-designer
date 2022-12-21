<template>
	<div class="select-none py-2.5 px-6">
		<div
			v-for="compItem in list"
			:key="compItem.id"
			class="h-6 leading-6 text-[14px] text-[#979797] hover:text-[#59c7f9] hover:cursor-pointer"
			:style="{ paddingLeft: `${compItem.depth * 16}px` }"
		>
			<i v-if="compItem.key === 'root'" class="iconfont icon-shuzhuangtu mr-2"></i>
			<span
				:class="{
					'text-white': compItem.key === 'root',
					'text-[#59c7f9] cursor-pointer': currentComponent.id === compItem.id
				}"
				@click="chooseHandle(compItem)"
			>
				{{ compItem.label }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { PropType } from 'vue';
import type { ILiveTimeCompModel } from '@/types/menus';
import { useComponentStore } from '@/stores/component';

const componentStore = useComponentStore();
const { currentComponent } = storeToRefs(componentStore);

const props = defineProps({
	list: { type: Array as PropType<ILiveTimeCompModel[]>, default: (): ILiveTimeCompModel[] => [] }
});
const { list } = toRefs(props);

const chooseHandle = (compItem: ILiveTimeCompModel) => {
	if (compItem.key === 'root') {
		console.log('展开收起');
	} else {
		componentStore.setCurrentComponentById(compItem.id);
	}
};
</script>
