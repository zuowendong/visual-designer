<template>
  <div class="sliderBox">
    <n-slider v-model:value="rangeData" range :step="1" @update:value="handleUpdate" />
    <div class="rangTips">
      <span>{{ min }}</span>
      <span>{{ max }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DuiGroupSlider'
}
</script>

<script setup lang="ts">
import { ref, PropType, watch, computed } from 'vue'

const props = defineProps({
  attrKey: { type: String, default: '' },
  attrValue: {
    type: Array as PropType<number[]>,
    default: (): number[] => {
      return []
    }
  }
})
const emits = defineEmits(['update:attrValue'])

let rangeData = ref<number[]>(props.attrValue)
watch(
  () => props.attrValue,
  (value) => {
    rangeData.value = value
  },
  { deep: true }
)

const min = computed(() => {
  const value = JSON.parse(JSON.stringify(rangeData.value))
  return value.sort((a: number, b: number) => a - b)[0]
})
const max = computed(() => {
  const value = JSON.parse(JSON.stringify(rangeData.value))
  return value.sort((a: number, b: number) => a - b)[1]
})

function handleUpdate(val: number[]) {
  const value = JSON.parse(JSON.stringify(val))
  emits('update:attrValue', {
    [props.attrKey]: value.sort((a: number, b: number) => a - b)
  })
}
</script>

<style scoped lang="scss">
.sliderBox {
  width: 100%;
  .rangTips {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 6px;
  }
}
</style>
