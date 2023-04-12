import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IComponent, ICompStyle } from '@/types'

export const useComponentStore = defineStore('component', () => {
  const componentList = ref<IComponent[]>([])
  // const componentMap = ref(new Map<string, IComponent>())

  function addComponent(compData: IComponent) {
    componentList.value.push(compData)
  }

  const currentComponent = ref<IComponent>({
    id: '',
    key: '',
    style: { width: 0, height: 0, x: 0, y: 0 }
  })
  function resetCurrentComponent() {
    currentComponent.value = { id: '', key: '', style: { width: 0, height: 0, x: 0, y: 0 } }
  }
  function setCurrentComp(compData: IComponent | null) {
    if (compData) {
      currentComponent.value = compData
    } else {
      resetCurrentComponent()
    }
  }
  function updateComponentStyle(compStyle: ICompStyle) {
    const { x, y, width, height } = compStyle
    if (x) currentComponent.value.style.x = Math.round(x)
    if (y) currentComponent.value.style.y = Math.round(y)
    if (width) currentComponent.value.style.width = Math.round(width)
    if (height) currentComponent.value.style.height = Math.round(height)
  }

  function deleteComponent(id: string) {
    const index = componentList.value.findIndex((item) => item.id === id)
    componentList.value.splice(index, 1)
  }

  return {
    componentList,
    addComponent,
    currentComponent,
    setCurrentComp,
    updateComponentStyle,
    deleteComponent
  }
})
