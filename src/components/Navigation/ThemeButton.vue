<template>
  <button class="switch" @click="handleSwitch">
    <span :class="['icon', isDark ? 'dark' : 'light']">
      <i :class="['iconfont', isDark ? 'icon-yueliang' : 'icon-taiyang']"></i>
    </span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { setTheme } from '@/utils/theme'
import { getLocalStorage, setLocalStorage } from '@/utils/storage'

let isDark = ref(false)
function handleSwitch() {
  isDark.value = !isDark.value
  let type = isDark.value ? 'dark' : 'light'
  setTheme(type)
  setLocalStorage('theme', type)
}

function initTheme() {
  let theme = getLocalStorage('theme')
  if (theme) {
    isDark.value = theme === 'light' ? false : true
    setTheme(theme)
  }
}
onMounted(() => initTheme())
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background-color: var(--theme-bg);
  border: 1px solid var(--theme-border);
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}
.icon {
  position: absolute;
  top: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
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
