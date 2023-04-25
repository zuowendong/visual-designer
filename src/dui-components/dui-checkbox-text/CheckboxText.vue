<template>
  <div class="checkboxText">
    <n-switch
      v-model:value="checkboxText.checked"
      @update:value="(checked: boolean) => handleUpdate(checked, checkboxText.label)"
    />
    <n-input
      v-model:value="checkboxText.label"
      placeholder="请输入"
      :disabled="!checkboxText.checked"
      @update:value="(text: string) => handleUpdate(checkboxText.checked, text)"
    />
    <span class="label">{{ checkedText }}</span>
    <span class="label">文本</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DuiCheckboxText'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { PropType, ref, watch } from 'vue'

type CheckboxText = {
  checked: boolean
  label: string
}

const props = defineProps({
  attrKey: { type: String, default: '' },
  attrValue: {
    type: Object as PropType<CheckboxText>,
    default: (): CheckboxText => {
      return {
        checked: false,
        label: ''
      }
    }
  }
})
const emits = defineEmits(['update:attrValue'])

let checkboxText = ref<CheckboxText>(props.attrValue)
const checkedText = computed(() => (checkboxText.value.checked ? '显示' : '不显示'))

watch(
  () => props.attrValue,
  ({ checked, label }) => {
    console.log(111111, checked, label)
    checkboxText.value = { checked, label }
  },
  { deep: true }
)

function handleUpdate(checked: boolean, label: string) {
  emits('update:attrValue', {
    [props.attrKey]: { checked, label }
  })
}
</script>

<style scoped lang="scss">
.checkboxText {
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  .checkbox {
    width: 40px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .label {
    box-sizing: border-box;
    margin-top: 4px;
    color: var(--theme-text);
  }
  .text {
    flex: 1;
  }
}
</style>
