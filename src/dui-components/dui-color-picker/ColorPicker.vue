<template>
  <n-color-picker v-model:value="value" @update:value="handleUpdate" />
</template>

<script lang="ts">
export default { name: 'DuiColorPicker' }
</script>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  attrKey: { type: String, default: '' },
  attrValue: { type: String, default: '' }
})
const emits = defineEmits(['change'])

let value = ref<string>(props.attrValue)
function handleUpdate(value: string) {
  emits('change', {
    [props.attrKey]: value
  })
}
</script>

<style scoped></style>
