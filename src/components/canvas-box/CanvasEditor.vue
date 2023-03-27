<template>
  <div class="editorMain">
    <div v-for="comp in componentStore.componentMap" :key="comp[0]">
      <component :is="comp[1].key"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCanvasStore } from '@/stores/canvas'
import { useComponentStore } from '@/stores/component'

let canvasWidth = ref('')
let canvasHeight = ref('')

const canvasStore = useCanvasStore()
watch(
  () => canvasStore.canvasSize,
  (size) => {
    canvasWidth.value = `${size.width}px`
    canvasHeight.value = `${size.height}px`
  }
)

const componentStore = useComponentStore()
</script>

<style scoped lang="scss">
.editorMain {
  position: relative;
  width: v-bind(canvasWidth);
  height: v-bind(canvasHeight);
  background-color: var(--theme-canvas-bg);
  .component {
    position: absolute;
    top: 10px;
    height: 10px;
  }
}
</style>
