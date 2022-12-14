<template>
	<div class="main">
		<div v-for="(groupItem, i) in properties" :key="i" class="groupItem">
			<div class="groupLabel">{{ groupItem.name }}</div>
			<div
				v-for="attr in groupItem.attrs"
				:key="attr.key"
				class="formItem"
				:class="{ branchItem: branchItem(attr.type) }"
			>
				<span class="formLabel">{{ attr.name }}</span>
				<component
					:is="transformHump(attr.type)"
					class="formCon"
					v-bind="{ modelValue: genCompAttrs(attr.key) }"
					@change="(val: any) => updateCurrentStyle(val, attr.key)"
				></component>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import { genComponentProperties } from '@/hooks/genComponentData';
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
@import '@/style/base.less';
.main {
	width: 100%;
	box-shadow: 0px 0px 20px 0px rgba(25, 40, 74, 0.1);
	padding: 10px 24px;
	box-sizing: border-box;
	border-left: 1px solid @mainBoderColor;
	overflow-x: hidden;
	overflow-y: auto;
	.groupItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 12px;
		.groupLabel {
			width: 100%;
			height: 40ox;
			line-height: 40px;
			border-bottom: 1px solid @mainBoderColor;
			font-size: 16px;
			font-weight: 500;
		}
		.formItem {
			width: 100%;
			display: flex;
			align-items: center;
			margin-top: 10px;
			.formLabel {
				display: inline-block;
				width: 100px;
				overflow: hidden;
				text-align: right;
				padding-right: 20px;
			}
			.formCon {
				flex: 1;
			}
		}
		.branchItem {
			flex-direction: column;
			align-items: flex-start;
			.formLabel {
				text-align: left;
				margin-bottom: 6px;
			}
		}
	}
}
</style>
