<template>
  <div ref="canvasRef" class="canvasMain">
    <CanvasEditor />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CanvasEditor from './CanvasEditor.vue'
import { useCanvasStore } from '@/stores/canvas'

let canvasRef = ref(null)
const canvasStore = useCanvasStore()
onMounted(() => canvasStore.initSize(canvasRef.value as unknown as HTMLElement))
</script>

<style scoped lang="scss">
.canvasMain {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
