<template>
  <div
    ref="editorRef"
    class="editorMain"
    @drop="handleDrop($event, editorRef)"
    @dragover="handleDragover"
    @mousedown="handleMousedown"
  >
    <WdText />
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
import { staticData } from '@designer/ui'

console.log(111111, staticData.getStaticData())

async function test() {
  staticData.getJsonDataArray().then((dataArray) => {
    // 在控制台中输出数组
    console.log(222222, dataArray)
  })
}

test()

let canvasWidth = ref('')
let canvasHeight = ref('')

// let WdTextVal = ref('Component map data')

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
