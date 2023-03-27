<template>
  <div class="editorMain"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from 'vue'
import { useCanvasStore } from '@/stores/canvas'

let canvasWidth = ref('')
let canvasHeight = ref('')

const canvasStore = useCanvasStore()
watch(
  () => canvasStore.canvasSize,
  (size) => {
    console.log(size)
    canvasWidth.value = `${size.width}px`
    canvasHeight.value = `${size.height}px`
  }
)
</script>

<style scoped lang="scss">
.editorMain {
  position: relative;
  width: v-bind(canvasWidth);
  height: v-bind(canvasHeight);
  background-color: var(--theme-canvas-bg);
}
</style>
