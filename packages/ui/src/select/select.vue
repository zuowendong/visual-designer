<template>
  <select>
    <option v-for="item in list" :key="item.id" :value="item.value">{{ item.label }}</option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WdSelect',
  setup() {
    let list = ref([
      { id: 1, label: '南京', value: 'nanjing' },
      { id: 2, label: '苏州', value: 'suzhou' },
      { id: 3, label: '上海', value: 'shanghai' }
    ])

    return {
      list
    }
  }
})
</script>

<style scoped></style>
