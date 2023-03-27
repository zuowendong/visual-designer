<template>
  <div class="canvasFooter">
    <div class="sizeTool">
      <span class="title">画布大小:</span>
      <input
        type="text"
        v-model="canvasSize.width"
        class="input"
        @change="handleChangeWidth(canvasSize.width)"
      />
      <span>*</span>
      <input
        type="text"
        v-model="canvasSize.height"
        class="input"
        @change="handleChangeHeight(canvasSize.height)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCanvasStore } from '@/stores/canvas'

let canvasSize = ref({ width: 0, height: 0 })
const canvasStore = useCanvasStore()
onMounted(() => {
  canvasSize.value = canvasStore.canvasSize
})

function handleChangeWidth(num: number) {
  canvasStore.changeSize(num, canvasSize.value.height)
}
function handleChangeHeight(num: number) {
  canvasStore.changeSize(canvasSize.value.width, num)
}
</script>

<style scoped lang="scss">
.canvasFooter {
  width: 100%;
  height: 40px;
  user-select: none;
  .sizeTool {
    height: 100%;
    display: flex;
    align-items: center;
    .title {
      margin-right: 10px;
    }
    .input {
      width: 50px;
      margin: 0 10px;
      outline-style: none;
      border: 1px solid var(--theme-border);
      background-color: var(--theme-bg);
      color: var(--theme-color);
    }
  }
}
</style>
