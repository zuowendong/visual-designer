<template>
  <button class="switch" @click="handleSwitch">
    <span :class="['icon', isDark ? 'dark' : 'light']">
      <i :class="['iconfont', isDark ? 'icon-yueliang' : 'icon-taiyang']"></i>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { setTheme } from '@/utils/theme'

let isDark = ref(false)
function handleSwitch() {
  isDark.value = !isDark.value
  let type = isDark.value ? 'dark' : 'light'
  setTheme(type)
}
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background-color: var(--theme-background);
  border: 1px solid var(--theme-border);
  cursor: pointer;
}
.icon {
  position: absolute;
  top: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: margin-right 2s;
}
.light {
  left: 1px;
  color: var(--theme-color);
}
.dark {
  right: 1px;
  color: var(--theme-color);
}
</style>
