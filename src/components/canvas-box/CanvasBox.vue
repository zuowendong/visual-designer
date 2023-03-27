<template>
  <div ref="canvasRef" class="canvasMain" @drop="handleDrop" @dragover="handleDragover">
    <CanvasEditor />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CanvasEditor from './CanvasEditor.vue'
import { useComponent } from '@/hooks/component'
import { useCanvasStore } from '@/stores/canvas'
import { useComponentStore } from '@/stores/component'

let canvasRef = ref(null)
const canvasStore = useCanvasStore()
onMounted(() => canvasStore.initSize(canvasRef.value as unknown as HTMLElement))

const componentStore = useComponentStore()
function handleDrop(e: DragEvent) {
  e.preventDefault()
  let compKey = e.dataTransfer?.getData('component') as string

  const { compDataFactory } = useComponent()
  componentStore.addComponent(compDataFactory({ key: compKey }))
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
