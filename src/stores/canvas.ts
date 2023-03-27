import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCanvasStore = defineStore('canvas', () => {
  const canvasSize = ref({ width: 0, height: 0 })

  function initSize(dom: HTMLElement) {
    const { width, height } = dom.getBoundingClientRect()
    canvasSize.value = { width, height }
  }
  function changeSize(width: number, height: number) {
    canvasSize.value = { width, height }
  }

  return {
    canvasSize,
    initSize,
    changeSize
  }
})
