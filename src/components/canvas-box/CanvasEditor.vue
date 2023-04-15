<template>
  <div
    ref="editorRef"
    class="editorMain"
    @drop="handleDrop($event, editorRef)"
    @dragover="handleDragover"
    @mousedown="handleMousedown"
  >
    <span>{{ componentStore.componentList }}</span>
    <ShapeBox
      v-for="(comp, index) of componentStore.componentList"
      :key="comp.id"
      :element="comp"
      :is-active="comp.id === componentStore.currentComponent.id"
      :tabindex="index"
      @keydown.stop="handleKeyDown($event, comp.id)"
    >
      <component
        :style="compCommonStyle(comp.style)"
        :is="comp.key"
        v-bind="comp.style"
      ></component>
    </ShapeBox>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCanvasStore } from '@/stores/canvas'
import { useComponentStore } from '@/stores/component'
import ShapeBox from './ShapeBox.vue'
import { useDragComponent } from '@/hooks/dragComponent'
import { ICompStyle } from '@/types'

let canvasWidth = ref('')
let canvasHeight = ref('')

let WdTextVal = ref('Component map data')

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

function handleKeyDown(event: KeyboardEvent, id: string) {
  if (event.key === 'Delete') {
    componentStore.deleteComponent(id)
  }
}

function compCommonStyle(style: ICompStyle) {
  return `background-color: ${style.bgColor}`
}
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
