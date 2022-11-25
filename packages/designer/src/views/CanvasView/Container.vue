<template>
	<WdForm
		:data-key="compItem.key"
		:data-compid="compItem.id"
		v-bind="{ ...getComponentProps(compItem.id) }"
		:list="compItem.children"
	>
		<template #default="{ component }">
			<div
				v-if="component && component.key"
				:class="['formItemWrap', component.id === currentComponent.id ? 'activeItem' : '']"
				@mousedown.stop="mouseDownOnFormItem(component)"
			>
				<component :is="component.key" v-bind="{ ...component.style }"></component>
			</div>
		</template>
	</WdForm>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import type { ComponentModel } from '@/types/component';

const props = defineProps({
	compItem: { type: Object, default: () => {} }
});
const { compItem } = toRefs(props);

const componentStore = useComponentStore();
const { components, currentComponent } = storeToRefs(componentStore);
const getComponentProps = (id: string) => {
	return components.value.find((item) => item.id === id)!.style;
};

const mouseDownOnFormItem = (componentData: ComponentModel) => {
	componentStore.setChoosedComponentStatus(true);
	componentStore.setCurrentComponent(componentData, componentData.id);
};
</script>

<style scoped lang="less">
@import '@/style/base.less';
.formItemWrap {
	width: calc(100% - 8px);
	height: calc(100% - 8px);
	outline: 1px solid transparent;
	margin: 4px;
}
.activeItem {
	outline: 1px dashed @shapeActiveBorderColor;
}
</style>
