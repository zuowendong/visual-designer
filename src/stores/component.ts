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
    const staticData = getComponentProps(compData.key)
    let initCompData: ICompStaticData = { data: null, events: null, functions: null, props: {} }
    if (staticData) {
      initCompData = initCompStaticData(staticData, false)
    }
    const { props } = initCompData
    componentList.value.push({
      ...compData,
      style: {
        ...compData.style,
        ...props
      }
    })
  }

  const componentPropConfig = ref<ICompProps>({})
  function initCompStaticData(staticData: ICompStaticData, isConfig: boolean) {
    const componentData: ICompStaticData = { data: null, events: null, functions: null, props: {} }
    const keys = Object.keys(staticData)
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'props') {
        if (!staticData.props) break
        if (isConfig) {
          // init component prop config
          componentPropConfig.value = staticData.props
        } else {
          componentData.props = initCompProps(staticData.props)
        }
      }
      if (keys[i] === 'events') {
        if (!staticData.events) break
      }
      if (keys[i] === 'data') {
        if (!staticData.props) break
      }
      if (keys[i] === 'functions') {
        if (!staticData.props) break
      }
    }
    return componentData
  }

  function initCompProps(props: ICompProps) {
    const componentStyle: { [k: string]: any } = {}
    Object.keys(props).forEach((key) => {
      Object.keys(props[key].props).forEach((prop) => {
        componentStyle[prop] = props[key].props[prop].value
      })
    })
    return componentStyle
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
        initCompStaticData(staticData, true)
      }
    } else {
      resetCurrentComponent()
    }
  }
  function updateComponentStyle(compStyle: ICompStyle) {
    const { x, y, width, height, ...style } = compStyle
    if (x) currentComponent.value.style.x = Math.round(x)
    if (y) currentComponent.value.style.y = Math.round(y)
    if (width) currentComponent.value.style.width = Math.round(width)
    if (height) currentComponent.value.style.height = Math.round(height)

    currentComponent.value.style = {
      ...currentComponent.value.style,
      ...style
    }
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
