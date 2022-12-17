<template>
	<div class="w-full h-full flex items-center justify-center">
		<span :style="textStyle">{{ text }}</span>
	</div>
</template>

<script lang="ts">
export default { name: 'WdText' };
</script>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

const props = defineProps<{
	text: string;
	fontSize: number;
	color: string;
}>();
const { text, fontSize, color } = toRefs(props);

const textStyle = computed(() => `font-size: ${fontSize.value}px; color: ${color.value};`);
</script>
