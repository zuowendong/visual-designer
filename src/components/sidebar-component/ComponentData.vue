<template>
  <div>
    component data

    <WdTree :data="treeData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const treeData = ref([
  {
    label: '一级1',
    level: 1,
    open: true,
    children: [
      {
        label: '二级1-1',
        level: 2,
        children: [{ label: '三级1-1-1', level: 3 }]
      }
    ]
  },
  {
    label: '一级2',
    level: 1,
    open: false,
    children: [
      {
        label: '二级2-1',
        level: 2
      },
      {
        label: '二级2-2',
        level: 2,
        children: [{ label: '三级级2-2-1', level: 3 }]
      }
    ]
  }
])
</script>

<style scoped></style>
