<template>
  <n-input v-model:value="value" type="text" @update:value="handleUpdate" />
</template>

<script lang="ts">
export default { name: 'DuiInputText' }
</script>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  attrKey: { type: String, default: '' },
  attrValue: { type: String, default: '' }
})
const emits = defineEmits(['update:attrValue'])

let value = ref<string>(props.attrValue)
function handleUpdate(value: string) {
  emits('update:attrValue', {
    [props.attrKey]: value
  })
}
</script>

<style scoped></style>
