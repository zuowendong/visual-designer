<template>
	<div class="main">
		{{ currentComponent }}
		<!-- <div v-for="(item, i) in properties" :key="i" class="formItem">
			<div class="label">{{ item.name }}</div>
			<div class="compWrap">
				<component :is="DUICOMPONENTMAP[transformHump(item.type)]"></component>
			</div>
		</div> -->
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useComponentStore } from '@/stores/component';
import { genComponentProperties } from '@/hooks/genComponentData';

const componentStore = useComponentStore();
const { currentComponent } = storeToRefs(componentStore);

// watch(
// 	() => currentComponent,
// 	async (component) => {
// 		const data = await genComponentProperties(component.value.key);
// 		console.log(111, data);
// 	},
// 	{ deep: true }
// );

// onMounted(async () => {
// 	if (currentComponent.value.key) {
// 		console.log(1123, await genComponentProperties(currentComponent.value.key));
// 	}
// });
</script>

<style scoped lang="less">
@import '@/style/base.less';
.main {
	width: 100%;
	box-shadow: 0px 0px 20px 0px rgba(25, 40, 74, 0.1);
	padding: 10px 24px;
	box-sizing: border-box;
	border-left: 1px solid @mainBoderColor;
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
