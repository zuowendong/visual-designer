<template>
	<main ref="preview" class="w-screen h-screen">
		<div
			v-for="item in components"
			:key="item.id"
			:style="getShapeStyle(item.style)"
			:default-style="item.style"
			:element="item"
			:component-id="item.id"
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
	</main>
</template>

<script setup lang="ts">
import { getShapeStyle } from '../../utils/formatStyle';
import Container from '../CanvasView/Container.vue';

// 通过接口获取数据
let components = ref([{ id: '', label: '', key: '', style: {} }]);

const getComponentProps = (id: string) => {
	return components.value.find((item) => item.id === id)!.style;
};
</script>
