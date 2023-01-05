<template>
	<div class="w-screen h-screen bg-[#2f2f2f] relative">
		<!-- <span class="text-white">{{ components }}</span> -->
		<div
			v-for="item in components"
			:key="item.id"
			class="absolute"
			:style="getShapeStyle(item.style)"
		>
			<Container v-if="item.key === 'WdForm'" :comp-item="item" />
			<component
				v-else
				:is="item.key"
				:data-key="item.key"
				:data-compid="item.id"
				v-bind="{ ...getComponentProps(item.id) }"
			></component>
		</div>
	</div>
</template>

<script setup lang="ts">
import { getShapeStyle } from '@/utils/formatStyle';
import { fileConfig } from '@form-designer/components';
import { componentInstall } from '@/hooks/component';

import Container from '../CanvasView/Container.vue';

const components: any = ref([]);
const initData = async () => {
	const componentDataStr = localStorage.getItem('componentData');
	components.value = JSON.parse(componentDataStr!);
	for (let i = 0; i < components.value.length; i++) {
		const component = components.value[i];
		const module = await fileConfig.fetchComponent(component.key);
		componentInstall(component.key, module.default);
	}
};
initData();
console.log(window['$app']._context.components);
const getComponentProps = (id: string) => {
	return components.value.find((item: any) => item.id === id)!.style;
};
</script>
