<template>
	<div class="w-full h-full relative">
		<div class="absolute inset-0 z-10"></div>
		<img v-if="imgData" class="w-full h-full" :src="imgData.url" />
	</div>
</template>

<script lang="ts">
export default { name: 'WdImage' };
</script>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
	imgData: { type: Object, default: () => {} }
});
const { imgData } = toRefs(props);
</script>
