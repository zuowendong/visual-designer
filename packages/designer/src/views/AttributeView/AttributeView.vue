<template>
	<div class="main">
		{{ properties }}
		<div v-for="(item, i) in properties" :key="i" class="formItem">
			<div class="label">{{ item.name }}</div>
			<div class="compWrap">
				<component
					:is="DUICOMPONENTMAP[transformHump(item.type)]"
					@change="(val: string) => changeHandle(val, item.key)"
				></component>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { transformHump } from '@form-designer/utils';
import { useComponentStore } from '@/stores/component';
import * as DuiComponents from '@/components';
import { propertiesToArray } from '../../hooks/componentProperties';

const DUICOMPONENTMAP = reactive<any>(DuiComponents);

const componentStore = useComponentStore();
const { currentComponent } = storeToRefs(componentStore);

const properties = computed(() => {
	if (currentComponent.value.property) {
		return propertiesToArray(currentComponent.value.property);
	}
});

const changeHandle = (val: string, key: string) => {
	componentStore.updateCurrentByKey(key, val);
};
</script>

<style scoped lang="less">
.main {
	width: 100%;
	box-shadow: 0px 0px 20px 0px rgba(25, 40, 74, 0.1);
	padding: 10px 24px;
	box-sizing: border-box;
	border-left: 1px solid #5454547a;
	.formItem {
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		.label {
			width: 100px;
			font-size: 14px;
		}
		.compWrap {
			flex: 1;
		}
	}
}
</style>
