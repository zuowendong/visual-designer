<template>
	<div :style="textStyle">
		<span>{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

defineOptions({
	name: 'WdText'
});

const props = defineProps<{
	text: string;
	fontSize: number;
	color: string;
}>();
const { text, fontSize, color } = toRefs(props);

const textStyle = computed(
	() => `width: 100%; height: 100%; font-size: ${fontSize.value}px; color: ${color.value};`
);
</script>
