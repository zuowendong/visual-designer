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
				:class="[component.id === currentComponent.id ? 'outline-1 outline outline-[#70c0ff]' : '']"
				class="w-[calc(100%-8px)] h-[calc(100%-8px)] outline-1 outline outline-transparent m-1"
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
function getComponentProps(id: string) {
	return components.value.find((item) => item.id === id)!.style;
}

function mouseDownOnFormItem(componentData: ComponentModel) {
	componentStore.setChoosedComponentStatus(true);
	componentStore.setCurrentComponent(componentData, componentData.id);
}
</script>
