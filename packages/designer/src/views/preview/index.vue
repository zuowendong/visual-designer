<template>
	<div class="w-screen h-screen bg-[#2f2f2f] relative">
		<!-- <span class="text-white">{{ components }}</span> -->
		<div
			v-for="item in components"
			:key="item.id"
			class="absolute"
			:style="{
				...getShapeStyle(item.style),
				backgroundColor: item.style.bgColor,
				zIndex: item.style.zIndex
			}"
		>
			<component
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
import { createDesignerUI } from '@visual-designer/components';

const components: any = ref([]);
const componentDataStr = localStorage.getItem('componentData');
components.value = JSON.parse(componentDataStr!);

window['$app'].use(createDesignerUI());
console.log(window['$app']._context.components);
const getComponentProps = (id: string) => {
	return components.value.find((item: any) => item.id === id)!.style;
};
</script>
