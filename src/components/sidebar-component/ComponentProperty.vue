<template>
  <div class="propertyMain">
    <div v-for="(item) of propConfigs" :key="item.id" class="text">
      <div class="label" @click="handleToggle(item)">{{ item.label }}</div>
      <div v-show="item.open" class="componentBox">
        <component :is="item.component"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DuiComplexText, DuiComplexBase } from '@/dui-components'

const propConfigs = ref<any>([
  {
    id: 1, label: '基本配置', component: DuiComplexBase, open: true
  },
  {
    id: 2, label: '样式', component: DuiComplexText, open: true
  },
])

function handleToggle(data: any) {
  console.log(data)
  data.open = !data.open
}
</script>

<style scoped lang="scss">
.text {
  display: flex;
  padding-bottom: 30px;

  .label {
    flex-shrink: 0;
    width: 34px;
    padding-top: 4px;
    padding-right: 5px;
    margin-right: 15px;
    border-right: 1px solid var(--theme-border);
    user-select: none;
    cursor: pointer;
  }
}
</style>
