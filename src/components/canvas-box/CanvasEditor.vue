<template>
  <div
    ref="editorRef"
    class="editorMain"
    @drop="handleDrop($event, editorRef)"
    @dragover="handleDragover"
    @mousedown="handleMousedown"
  >
    <WdText :text="WdTextVal" />
    <span>{{ componentStore.componentMap }}</span>
    <ShapeBox
      v-for="comp in componentStore.componentMap"
      :key="comp[0]"
      :element="comp[1]"
      :is-active="comp[0] === componentStore.currentComponent.id"
    >
      <component :is="comp[1].key"></component>
    </ShapeBox>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCanvasStore } from '@/stores/canvas'
import { useComponentStore } from '@/stores/component'
import ShapeBox from './ShapeBox.vue'
import { useDragComponent } from '@/hooks/dragComponent'

let canvasWidth = ref('')
let canvasHeight = ref('')

let WdTextVal = ref('11111111')

const canvasStore = useCanvasStore()
watch(
  () => canvasStore.canvasSize,
  (size) => {
    canvasWidth.value = `${size.width}px`
    canvasHeight.value = `${size.height}px`
  }
)

const componentStore = useComponentStore()
const editorRef = ref<HTMLElement | null>(null)
const { handleDrop, handleDragover, handleMousedown } = useDragComponent()
</script>

<style scoped lang="scss">
.editorMain {
  position: relative;
  width: v-bind(canvasWidth);
  height: v-bind(canvasHeight);
  background-color: var(--theme-canvas-bg);
  user-select: none;
}
</style>
