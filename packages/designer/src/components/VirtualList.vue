<template>
	<div ref="container" class="box-border w-full h-full overflow-y-auto" @scroll="handleScroll">
		<div ref="panel" :style="{ paddingTop: `${paddingTop}px` }">
			<div
				class="h-6 leading-6 text-[14px] text-[#979797] hover:text-[#59c7f9] hover:cursor-pointer flex"
				v-for="item in visibleList"
				:key="item.id"
			>
				<slot :row="item"></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ILiveTimeCompModel } from '@/types/menus';

const props = defineProps({
	list: { type: Array as PropType<ILiveTimeCompModel[]>, default: () => [] }, // original list
	showNum: { type: Number, default: 10 } // render items num
});
const { list, showNum } = toRefs(props);
const container = ref<HTMLElement>();
const panel = ref<HTMLElement>();
const itemHeight = 40;
let count = ref(showNum.value);
let startIdx = ref(0);
let endIdx = ref(showNum.value);
function initVisibleData() {
	const containerHeight = container.value?.getBoundingClientRect().height || 300;
	count.value = Math.ceil(containerHeight / itemHeight);
	endIdx.value = Math.ceil(containerHeight / itemHeight);
}
onMounted(() => initVisibleData());
let visibleList = computed(() => list.value.slice(startIdx.value, endIdx.value));
let paddingTop = ref(0);
let panelHeight = ref(list.value.length * itemHeight);
function getPanelHeight() {
	if (panel.value) panel.value.style.height = `${panelHeight.value}px`;
}
watch(
	() => props.list,
	(list) => {
		panelHeight.value = list.length * itemHeight;
		getPanelHeight();
	},
	{ deep: true }
);
onMounted(() => getPanelHeight());
function handleScroll(e: any) {
	startIdx.value = Math.floor(e.target.scrollTop / itemHeight);
	endIdx.value = startIdx.value + count.value;
	paddingTop.value = startIdx.value * itemHeight;
}
</script>

<style scoped lang="less">
.container {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	.panel {
		border: 1px solid red;
		.item {
			border: 1px solid #eee;
			line-height: 50px;
			height: 50px;
			padding: 0 10px;
			cursor: pointer;
			overflow: hidden;
		}
	}
}
</style>
