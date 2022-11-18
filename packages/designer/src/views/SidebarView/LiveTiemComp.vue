<template>
	<div class="liveTimeComps">
		<div
			v-for="compItem in list"
			:key="compItem.id"
			class="compItem"
			:style="{ paddingLeft: `${compItem.depth * 16}px` }"
		>
			<span
				:class="[
					compItem.key === 'root' ? 'title' : '',
					currentComponent.id === compItem.id ? 'activeItem' : ''
				]"
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

<style scoped lang="less">
@import '@/style/base.less';
.liveTimeComps {
	user-select: none;
	padding: 10px 24px;
	.compItem {
		font-size: 14px;
		color: @menuColor;
		height: 24px;
		line-height: 24px;
		&:hover {
			color: @activeColor;
			cursor: pointer;
		}
		.title {
			color: @mainColor;
		}
	}
	.activeItem {
		color: @activeColor;
		cursor: pointer;
	}
}
</style>
