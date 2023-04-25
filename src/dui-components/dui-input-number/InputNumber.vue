<template>
  <n-input-number v-model:value="value" @update:value="handleUpdate" />
</template>

<script lang="ts">
export default { name: 'DuiInputNumber' }
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  attrKey: { type: String, default: '' },
  attrValue: { type: Number, default: 0 }
})
const emits = defineEmits(['update:attrValue'])

let value = ref(props.attrValue)
watch(
  () => props.attrValue,
  (val) => {
    value.value = val
  }
)
function handleUpdate(value: number) {
  emits('update:attrValue', {
    [props.attrKey]: value
  })
}
</script>

<style scoped></style>
