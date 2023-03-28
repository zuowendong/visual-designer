import type { IComponent } from '@/types/component'
import { useComponentStore } from '@/stores/component'

export function useShapeMove() {
  function shapeMousedown(e: MouseEvent, compItem: IComponent) {
    const componentStore = useComponentStore()
    componentStore.setCurrentComp(compItem.id)

    console.log(componentStore.currentComponent)

    const componentPosition = compItem.style

    function move(moveEn: MouseEvent) {
      const moveAfterX = moveEn.clientX
      const moveAfterY = moveEn.clientY
      // (鼠标移动的坐标 - 初始按下鼠标时的坐标)移动的距离 + 组件原始坐标 = 新坐标
      const newPosition = {
        x: moveAfterX - e.clientX + Number(componentPosition?.x),
        y: moveAfterY - e.clientY + Number(componentPosition?.y)
      }
      componentStore.updateComponentStyle(newPosition)
    }

    function up() {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }

  return {
    shapeMousedown
  }
}
