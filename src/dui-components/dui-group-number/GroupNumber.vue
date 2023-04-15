<template>
  <div class="baseBox">
    <div class="rowItem">
      <n-input-number
        v-model:value="posData.x"
        @update:value="(data: number) => handleUpdate(data, posData.y)"
      />
      <span class="label">X</span>
    </div>
    <div class="rowItem">
      <n-input-number
        v-model:value="posData.y"
        @update:value="(data: number) => handleUpdate(posData.x, data)"
      />
      <span class="label">Y</span>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'DuiGroupNumber' }
</script>

<script setup lang="ts">
import { ref, PropType, watch } from 'vue'

type PosData = {
  x: number
  y: number
}

const props = defineProps({
  attrKey: { type: String, default: '' },
  attrValue: {
    type: Object as PropType<PosData>,
    default: (): PosData => {
      return { x: 0, y: 0 }
    }
  }
})
const emits = defineEmits(['change'])

let posData = ref<PosData>(props.attrValue)
watch(
  () => props.attrValue,
  ({ x, y }) => {
    posData.value = { x, y }
  },
  { deep: true }
)

function handleUpdate(x: number, y: number) {
  emits('change', { x, y, position: { x, y } })
}
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
}
</style>
