import { reactive } from 'vue'
import { useComponentStore } from '@/stores/component'
import { useComponent, type ICompFactory } from './component'

function getInitCompPosition(e: DragEvent, canvasDom: HTMLElement) {
  const domInfo = canvasDom.getBoundingClientRect()
  return {
    x: e.clientX - domInfo.x,
    y: e.clientY - domInfo.y
  }
}

export function useDragComponent() {
  const componentStore = useComponentStore()
  const { compDataFactory } = useComponent()

  function handleDrop(e: DragEvent, dom: HTMLElement | null) {
    e.preventDefault()
    let initCompData = reactive<ICompFactory>({ key: '', width: 100, height: 100, x: 0, y: 0 })
    if (dom) {
      const { x, y } = getInitCompPosition(e, dom)
      initCompData = { ...initCompData, x, y }
    }
    const compKey = e.dataTransfer?.getData('component') as string
    initCompData = { ...initCompData, key: compKey }
    componentStore.addComponent({ ...compDataFactory(initCompData) })
  }

  function handleDragover(e: DragEvent) {
    e.preventDefault()
    e.dataTransfer!.dropEffect = 'copy'
  }

  function handleMousedown() {
    console.log('取消选择组件')
    componentStore.setCurrentComp(null)
  }

  return {
    handleDrop,
    handleDragover,
    handleMousedown
  }
}
