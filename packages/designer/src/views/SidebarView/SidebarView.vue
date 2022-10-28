<template>
	<div class="main">
		<draggable
			:list="menus"
			:group="{ name: 'DRAGCOMPONENT', pull: 'clone', put: false }"
			:clone="cloneComponent"
			item-key="id"
		>
			<template #item="{ element }">
				<a>
					<i></i>
					<span>{{ element.name }}</span>
				</a>
			</template>
		</draggable>
	</div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';

interface MenuModel {
	id: number;
	name: string;
	key: string;
}

const menus = reactive([
	{ id: 1, name: '输入框', key: 'wd-input' },
	{ id: 2, name: '选择框', key: 'wd-select' }
]);

const cloneComponent = ({ name, key }: MenuModel) => {
	return {
		id: Date.now(),
		name,
		key
	};
};
</script>

<style scoped lang="less">
@import './sidebar.less';
</style>
