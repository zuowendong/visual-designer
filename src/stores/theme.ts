import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const naiveTheme = ref<GlobalTheme | null>(null)

  function setTheme(type: string) {
    const htmlDom = document.documentElement
    const htmlClassNames = htmlDom.classList
    if (type === 'light' && htmlClassNames.contains('dark')) {
      htmlDom.classList.remove('dark')
      naiveTheme.value = null
    }
    if (type === 'dark') {
      htmlDom.classList.add('dark')
      naiveTheme.value = darkTheme
    }
  }

  return {
    naiveTheme,
    setTheme
  }
})
