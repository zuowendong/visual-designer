<template>
	<div class="main">
		<div class="formContent">
			<div
				v-for="item in canvasComponents"
				:key="item.id"
				class="formItem"
				@click="chooseComponentHandle(item.components)"
			>
				<draggable
					class="dragArea"
					:list="item.components"
					group="DRAGCOMPONENT"
					:sort="false"
					@change="dragHandle"
					item-key="id"
				>
					<template #item="{ element }">
						<div class="compWrap">
							<component
								:is="COMPONENTMAP[element.key]"
								label="姓名"
								v-model="element.name"
								:options="options"
							></component>
						</div>
					</template>
				</draggable>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import { WdInput, WdSelect } from '@form-designer/components';
import { useComponentStore } from '@/stores/component';

const canvasComponents = reactive([
	{ id: 1, components: [] },
	{ id: 2, components: [] },
	{ id: 3, components: [] },
	{ id: 4, components: [] }
]);

const componentStore = useComponentStore();
const dragHandle = (data: any) => {
	if (data.added) {
		componentStore.setCurrentComponent(data.added.element);
	}
};

const chooseComponentHandle = (component: any) => {
	console.log(1111111, component);
};

const COMPONENTMAP = reactive<any>({
	WdInput,
	WdSelect
});
const options = reactive([
	{ label: '上海', value: 'shanghai' },
	{ label: '南京', value: 'nanjing' },
	{ label: '苏州', value: 'suzhou' }
]);

onMounted(() => {
	console.log(111111, WdInput.__info__);
	console.log(222222, WdInput.__properties__);
});
</script>

<style scoped lang="less">
.main {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	.formContent {
		width: 60%;
		max-height: 80%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 4px;
		row-gap: 4px;
		.formItem {
			height: 40px;
			background-color: antiquewhite;
			cursor: grab;
		}
	}
	.dragArea {
		position: relative;
		height: 100%;
	}
	.compWrap {
		// position: absolute;
		width: 100%;
		height: 40px;
	}
}
</style>
