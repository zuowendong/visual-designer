<template>
  <div class="text">
    <div class="label">样式</div>
    <DuiComplexText />
  </div>
  <div class="text">
    <div class="label">样式</div>
    <DuiComplexText />
  </div>
</template>

<script setup lang="ts">
import { DuiComplexText } from '@/dui-components'
</script>

<style scoped lang="scss">
.text {
  display: flex;
  padding-bottom: 30px;
  .label {
    width: 60px;
    padding-top: 4px;
    padding-right: 5px;
    margin-right: 15px;
    border-right: 1px solid var(--theme-border);
  }
}
</style>
