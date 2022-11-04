<template>
	<div class="main">
		{{ currentComponent }}
		<WdForm :form-items="canvasComponents" :column="2" class="formCon">
			<template #default="{ component }">
				<draggable
					class="dragArea"
					:list="component"
					group="DRAGCOMPONENT"
					:sort="false"
					:move="checkMove"
					@change="dragHandle"
					item-key="id"
				>
					<template #item="{ element }">
						<div class="compWrap">
							<component
								:is="COMPONENTMAP[element.key]"
								v-bind="{ ...genProperties(COMPONENTMAP[element.key].__properties__) }"
							></component>
						</div>
					</template>
				</draggable>
			</template>
		</WdForm>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import draggable from 'vuedraggable';
import * as components from '@form-designer/components';
import { WdForm } from '@form-designer/components';
import { useComponentStore } from '@/stores/component';
import { checkMove } from '@/hooks/dragCheckMove';
import { genProperties, propertiesToObject } from '@/hooks/componentProperties';

// form layout
const canvasComponents = reactive([[], [], [], []]);

const COMPONENTMAP = reactive<any>(components);

const componentStore = useComponentStore();
const { currentComponent } = storeToRefs(componentStore);
// const chooseComponentHandle = (component: any) => {
// 	if (component && component.length) {
// 		componentStore.setCurrentComponent({
// 			...component[0],
// 			property: COMPONENTMAP[component[0].key].__properties__
// 		});
// 	} else {
// 		// 显示表单设置
// 	}
// };
const dragHandle = (data: any) => {
	if (data.added) {
		const property = propertiesToObject(COMPONENTMAP[data.added.element.key].__properties__);
		componentStore.setCurrentComponent({
			...data.added.element,
			property
		});
	}
};
</script>

<style scoped lang="less">
.main {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.formCon {
		width: 60%;
		max-height: 80%;
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
