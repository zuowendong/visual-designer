<template>
  <div class="baseBox">
    <div class="rowItem">
      <n-input-number v-model:value="baseData.x" />
      <span class="label">X</span>
    </div>
    <div class="rowItem">
      <n-input-number v-model:value="baseData.y" />
      <span class="label">Y</span>
    </div>
    <div class="rowItem exclusiveLine">
      <n-color-picker v-model:value="baseData.bgColor" />
      <span class="label">背景色</span>
    </div>
    <div class="rowItem exclusiveLine">
      <n-input-number v-model:value="baseData.zIndex" />
      <span class="label">层级</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type BaseData = {
  x: number,
  y: number,
  bgColor: string,
  zIndex: number
}

const props = defineProps({
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 },
  bgColor: { type: String, default: '' },
  zIndex: { type: Number, default: 0 },
})

let baseData = ref<BaseData>({
  x: 0,
  y: 0,
  bgColor: '#3D39B1FF',
  zIndex: 0
})
</script>

<style lang="scss" scoped>
.baseBox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;

  .rowItem {
    display: flex;
    flex-direction: column;

    .label {
      box-sizing: border-box;
      margin-top: 4px;
      padding-left: 10px;
      color: var(--theme-text);
    }
  }

  .exclusiveLine {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}</style>
