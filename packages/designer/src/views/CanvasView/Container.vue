<template>
	<WdForm
		:data-key="compItem.key"
		:data-compid="compItem.id"
		v-bind="{ ...getComponentProps(compItem.id) }"
		:list="compItem.children"
	>
		<template v-if="compItem.children.length" #default="{ component }">
			<div v-if="component">
				{{ component.key }}
				<!-- <component
					:is="component.key"
					v-bind="{ ...getCompPropsInContainer(component.id, compItem.children) }"
				></component> -->
			</div>
		</template>
	</WdForm>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';

const props = defineProps({
	compItem: { type: Object, default: () => {} }
});
const { compItem } = toRefs(props);

const componentStore = useComponentStore();
const { components } = storeToRefs(componentStore);
const getComponentProps = (id: string) => {
	return components.value.find((item) => item.id === id)!.style;
};
// const getCompPropsInContainer = (id: string, list: any) => {
// 	const targetComp = list.find((item: any) => {
// 		if (item && item.id) item.id === id;
// 	});
// 	if (targetComp) {
// 		return targetComp.style;
// 	}
// 	// return list.find((item: any) => item.id === id).style;
// };
</script>

<style scoped lang="less">
.formWrap {
	position: relative;
	.mask {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: red;
	}
}
</style>
