import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IComponent, ICompStyle, ICompStaticData, ICompProps } from '@/types'
// import { initCompStaticData } from '@/utils/component'

export const useComponentStore = defineStore('component', () => {
  const componentList = ref<IComponent[]>([])
  const componentPropsMap = ref(new Map<string, ICompStaticData>())

  function setComponentProps(key: string, staticData: ICompStaticData) {
    componentPropsMap.value.set(key, staticData)
  }
  function getComponentProps(key: string): ICompStaticData | undefined {
    return componentPropsMap.value.get(key)
  }

  function addComponent(compData: IComponent) {
    componentList.value.push(compData)

    const staticData = getComponentProps(compData.key)
    console.log(staticData)
  }

  const componentPropConfig = ref<ICompProps>({})
  function initCompStaticData(staticData: ICompStaticData) {
    const keys = Object.keys(staticData)
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'props') {
        if (!staticData.props) return
        // init component prop config
        componentPropConfig.value = staticData.props
      }
      if (keys[i] === 'events') {
        if (!staticData.events) return
      }
      if (keys[i] === 'data') {
        if (!staticData.props) return
      }
      if (keys[i] === 'functions') {
        if (!staticData.props) return
      }
    }
  }

  function initCompProps(props: ICompProps) {
    // 初始化值塞入 current
  }

  const currentComponent = ref<IComponent>({
    id: '',
    key: '',
    style: { width: 0, height: 0, x: 0, y: 0 }
  })
  function resetCurrentComponent() {
    currentComponent.value = { id: '', key: '', style: { width: 0, height: 0, x: 0, y: 0 } }
    componentPropConfig.value = {}
  }
  function setCurrentComp(compData: IComponent | null) {
    if (compData) {
      currentComponent.value = compData
      // init component static data
      const staticData = getComponentProps(compData.key)
      if (staticData) {
        initCompStaticData(staticData)
      }
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
    componentPropsMap,
    setComponentProps,
    addComponent,
    currentComponent,
    setCurrentComp,
    updateComponentStyle,
    deleteComponent,
    componentPropConfig
  }
})
