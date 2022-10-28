<template>
	<div class="main">
		<div class="formContent">
			<div v-for="item in canvasComponents" :key="item.id" class="formItem">
				<draggable
					class="dragArea"
					:list="item.components"
					group="DRAGCOMPONENT"
					:sort="false"
					@change="log"
					item-key="id"
				>
					<template #item="{ element }">
						<div class="compWrap">{{ element }}</div>
					</template>
				</draggable>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';

const canvasComponents = reactive([
	{ id: 1, components: [] },
	{ id: 2, components: [] },
	{ id: 3, components: [] },
	{ id: 4, components: [] }
]);

const log = (e: MouseEvent) => {
	console.log(2222222, e);
	console.log(3333333, canvasComponents);
};
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
		border: 1px solid #333;
		box-sizing: border-box;
	}
}
</style>
