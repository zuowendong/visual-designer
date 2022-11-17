<template>
	<div class="liveTimeComps">
		<div v-for="compItem in list" :key="compItem.id" class="compItem">
			{{ compItem.level }} -- {{ compItem.label }}
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ILiveTimeCompModel } from '@/types/menus';

const props = defineProps({
	list: { type: Array as PropType<ILiveTimeCompModel[]>, default: (): ILiveTimeCompModel[] => [] }
});
const { list } = toRefs(props);
</script>

<style scoped lang="less">
@import '@/style/base.less';
.liveTimeComps {
	padding: 10px 24px;
	.compItem {
		font-size: 14px;
		color: @menuColor;
		height: 24px;
		line-height: 24px;
		&:hover {
			color: @mainColor;
			cursor: pointer;
		}
	}
}
</style>
