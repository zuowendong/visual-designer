<template>
	<div :style="formConStyle">
		<div
			v-for="(item, i) in formItems"
			:key="i"
			:style="formItemStyle"
			@click="chooseComponentHandle(item)"
		>
			<slot :component="item"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

defineOptions({
	name: 'WdForm'
});

const props = defineProps<{
	formItems: any[];
	column: number;
}>();

const emit = defineEmits(['chooseComponent']);
const chooseComponentHandle = (component: any) => {
	emit('chooseComponent', component);
};

let columnNum = ref<number>(props.column);
const formConStyle = computed(
	() => `display: grid; grid-template-columns: repeat(${columnNum.value}, 1fr); gap: 4px`
);
const formItemStyle = computed(() => `height: 40px; background-color: antiquewhite; cursor: grab;`);
</script>

<style scoped></style>
