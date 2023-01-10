<template>
	<div v-for="(groupItem, i) in properties" :key="i" class="flex flex-col items-center mb-3">
		<div
			class="w-full h-10 leading-10 border-b border-solid border-[#363636] text-[16px] font-medium"
		>
			{{ groupItem.name }}
		</div>
		<div
			v-for="attr in groupItem.attrs"
			:key="attr.key"
			class="w-full flex items-center mt-2.5"
			:class="{ branchItem: branchItem(attr.type) }"
		>
			<span class="inline-block w-24 overflow-hidden text-right pr-5 formLabel">{{
				attr.name
			}}</span>
			<component
				:is="transformHump(attr.type)"
				class="flex-1"
				v-bind="{ modelValue: genCompAttrs(attr.key) }"
				@change="(val: any) => updateCurrentStyle(val, attr.key)"
			></component>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import { genComponentProperties } from '@/utils/genComponentData';
import { transformHump } from '@/utils/tool';

const componentStore = useComponentStore();
const { currentComponentId, currentComponent } = storeToRefs(componentStore);

let properties = ref<any>([]);
watch(currentComponentId, async () => {
	await getProperties();
});

const getProperties = async () => {
	if (currentComponent.value.key) {
		properties.value = await genComponentProperties(currentComponent.value.key);
	} else {
		properties.value = [];
	}
};

const genCompAttrs = (attrKey: string) => {
	return currentComponent.value.style[attrKey];
};

const updateCurrentStyle = (val: any, attrKey: string) => {
	// componentStore.setShapeStyle({ [attrKey]: val });
	componentStore.updateCurrentComponent({ [attrKey]: val });
};

// 垂直布局
const branchItem = (type: string) => {
	const whiteList = ['dui-config-array'];
	return whiteList.includes(type);
};
</script>

<style scoped lang="less">
.branchItem {
	flex-direction: column;
	align-items: flex-start;
	.formLabel {
		text-align: left;
		margin-bottom: 6px;
	}
}
</style>
