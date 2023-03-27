import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IComponent } from '@/types'

export const useComponentStore = defineStore('component', () => {
  const componentMap = reactive(new Map())

  function addComponent(compData: IComponent) {
    componentMap.set(compData.id, compData)
  }

  return {
    componentMap,
    addComponent
  }
})
