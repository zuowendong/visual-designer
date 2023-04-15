<template>
  <div class="textBox">
    <div class="rowItem">
      <n-input-number v-model:value="textData.fontSize" :min="1" />
      <span class="label">字号</span>
    </div>
    <div class="rowItem">
      <n-color-picker v-model:value="textData.color" />
      <span class="label">颜色</span>
    </div>
    <div class="rowItem">
      <n-select v-model:value="textData.fontWeight" :options="fontWeight_options" />
      <span class="label">粗细</span>
    </div>
    <div class="rowItem">
      <n-input-number v-model:value="textData.letterSpacing" />
      <span class="label">间距</span>
    </div>
    <div class="rowItem">
      <n-input-number v-model:value="textData.lineHeight" :min="1" />
      <span class="label">行高</span>
    </div>
    <div class="rowItem">
      <n-select v-model:value="textData.textAlign" :options="textAlign_options" />
      <span class="label">对齐</span>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'DuiComplexText' }
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { fontWeight_options, textAlign_options } from './options-data'

type TextData = {
  fontSize: number
  color: string
  fontWeight: string
  letterSpacing: number
  lineHeight: number
  textAlign: string
  [k: string]: any
}

const props = defineProps({
  fontSize: { type: Number, default: 24 },
  color: { type: String, default: '#3D39B1FF' },
  fontWeight: { type: String, default: 'normal' },
  fontStyle: { type: String, default: 'normal' },
  letterSpacing: { type: Number, default: 0 },
  lineHeight: { type: Number, default: 30 },
  textAlign: { type: String, default: 'center' },
  textDecoration: { type: String, default: 'none' }
})

let textData = ref<TextData>({
  fontSize: 24,
  color: '#3D39B1FF',
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: 30,
  textAlign: 'center'
})
</script>

<style scoped lang="scss">
.textBox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
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
}
</style>
