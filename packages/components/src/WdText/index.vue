<template>
	<div class="w-full h-full flex items-center justify-center">
		<span :style="textStyle">{{ text }}</span>
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

const textStyle = computed(() => `font-size: ${fontSize.value}px; color: ${color.value};`);
</script>
