<template>
  <div ref="canvasRef" class="canvasMain" @drop="handleDrop" @dragover="handleDragover">
    <CanvasEditor />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCanvasStore } from '@/stores/canvas'
import CanvasEditor from './CanvasEditor.vue'

let canvasRef = ref(null)
const canvasStore = useCanvasStore()
onMounted(() => canvasStore.initSize(canvasRef.value as unknown as HTMLElement))

function handleDrop(e: DragEvent) {
  e.preventDefault()
  let compKey = e.dataTransfer?.getData('component')
  console.log(compKey)
}
function handleDragover(e: DragEvent) {
  e.preventDefault()
  e.dataTransfer!.dropEffect = 'copy'
}
</script>

<style scoped lang="scss">
.canvasMain {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
