import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IComponent, ICompStyle } from '@/types'

export const useComponentStore = defineStore('component', () => {
  const componentMap = reactive(new Map())

  const getComponentMap = computed(() => componentMap)

  function addComponent(compData: IComponent) {
    componentMap.set(compData.id, compData)
  }

  const currentComponent = ref<IComponent>({ id: '', key: '', style: {} })
  function setCurrentComp(id: string) {
    currentComponent.value = componentMap.get(id)
  }
  function updateComponentStyle(compStyle: ICompStyle) {
    const { x, y } = compStyle
    currentComponent.value.style = {
      ...currentComponent.value.style,
      x,
      y
    }
  }

  return {
    componentMap,
    addComponent,
    currentComponent,
    setCurrentComp,
    updateComponentStyle
  }
})
