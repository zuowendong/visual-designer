import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IComponent, ICompStyle } from '@/types'

export const useComponentStore = defineStore('component', () => {
  const componentMap = reactive(new Map())

  function addComponent(compData: IComponent) {
    componentMap.set(compData.id, compData)
  }

  const currentComponent = ref<IComponent>({
    id: '',
    key: '',
    style: { width: 0, height: 0, x: 0, y: 0 }
  })
  function resetCurrentComponent() {
    currentComponent.value = { id: '', key: '', style: { width: 0, height: 0, x: 0, y: 0 } }
  }
  function setCurrentComp(id: string | null) {
    if (id) {
      currentComponent.value = componentMap.get(id)
    } else {
      resetCurrentComponent()
    }
  }
  function updateComponentStyle(compStyle: { [k: string]: number }) {
    const { x, y, width, height } = compStyle
    if (x) currentComponent.value.style.x = Math.round(x)
    if (y) currentComponent.value.style.y = Math.round(y)
    if (width) currentComponent.value.style.width = Math.round(width)
    if (height) currentComponent.value.style.height = Math.round(height)
  }

  return {
    componentMap,
    addComponent,
    currentComponent,
    setCurrentComp,
    updateComponentStyle
  }
})
