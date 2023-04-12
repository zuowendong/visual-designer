import { reactive } from 'vue'
import type { IComponent } from '@/types/component'
import { useComponentStore } from '@/stores/component'

const cursorPoints = reactive<string[]>(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'])

export function useShapeMove() {
  let cursors = reactive<{ [k: string]: string }>({})
  const componentStore = useComponentStore()

  function shapeMousedown(e: MouseEvent, compItem: IComponent) {
    componentStore.setCurrentComp(compItem)
    cursors = getCursorDirection()

    const initialX = e.clientX
    const initialY = e.clientY
    const componentPosition = compItem.style
    const originalX = componentPosition.x
    const originalY = componentPosition.y

    function move(moveEn: MouseEvent) {
      const moveAfterX = moveEn.clientX
      const moveAfterY = moveEn.clientY
      // 组件原始坐标 + 移动的距离(鼠标移动后的坐标 - 初始按下鼠标时的坐标) = 新坐标
      const newPosition = {
        x: originalX + (moveAfterX - initialX),
        y: originalY + (moveAfterY - initialY)
      }
      componentStore.updateComponentStyle({
        ...componentPosition,
        ...newPosition
      })
    }

    function up() {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }

  function pointStyle(point: string, compItem: IComponent) {
    /**
     * lt  t  rt
     *   ————
     *  |    |
     * l|    | r
     *  |    |
     * lb ————  rb
     *     b
     */

    let newLeft: number = 0
    let newTop: number = 0
    const width = compItem.style?.width
    const height = compItem.style?.height

    const hasTop = /t/.test(point)
    const hasBottom = /b/.test(point)
    const hasLeft = /l/.test(point)
    const hasRight = /r/.test(point)

    // Four corners： 'lt', 'rt', 'rb', 'lb'
    if (point.length === 2) {
      newLeft = hasLeft ? 0 : width
      newTop = hasTop ? 0 : height
    } else {
      if (hasTop || hasBottom) {
        newLeft = Math.floor(width / 2)
        newTop = hasTop ? 0 : height
      }
      if (hasLeft || hasRight) {
        newLeft = hasLeft ? 0 : width
        newTop = Math.floor(height / 2)
      }
    }

    return {
      marginLeft: '-4px',
      marginTop: '-4px',
      left: `${newLeft}px`,
      top: `${newTop}px`,
      cursor: cursors[point]
    }
  }

  function cursorMousedown(e: MouseEvent, point: string, compItem: IComponent) {
    const compStyle = { ...compItem.style }
    const height = compStyle.height
    const width = compStyle.width
    const x = compStyle.x
    const y = compStyle.y
    const startX = e.clientX
    const startY = e.clientY

    const hasT = /t/.test(point)
    const hasB = /b/.test(point)
    const hasL = /l/.test(point)
    const hasR = /r/.test(point)

    const move = (moveEvent: MouseEvent) => {
      const currX = moveEvent.clientX
      const currY = moveEvent.clientY
      const disY = currY - startY
      const disX = currX - startX
      const newHeight = height + (hasT ? -disY : hasB ? disY : 0)
      const newWidth = width + (hasL ? -disX : hasR ? disX : 0)
      compStyle.height = newHeight > 0 ? newHeight : 0
      compStyle.width = newWidth > 0 ? newWidth : 0
      compStyle.x = x + (hasL ? disX : 0)
      compStyle.y = y + (hasT ? disY : 0)
      componentStore.updateComponentStyle(compStyle)
    }
    const up = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', up)
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
  }

  return {
    shapeMousedown,
    cursorPoints,
    pointStyle,
    cursorMousedown
  }
}

function mod360(deg: number) {
  return (deg + 360) % 360
}

// 每个范围的角度对应的光标
const angleToCursor = reactive([
  { start: 338, end: 23, cursor: 'nw' },
  { start: 23, end: 68, cursor: 'n' },
  { start: 68, end: 113, cursor: 'ne' },
  { start: 113, end: 158, cursor: 'e' },
  { start: 158, end: 203, cursor: 'se' },
  { start: 203, end: 248, cursor: 's' },
  { start: 248, end: 293, cursor: 'sw' },
  { start: 293, end: 338, cursor: 'w' }
])
const initialAngle = reactive<{ [k: string]: number }>({
  lt: 0,
  t: 45,
  rt: 90,
  r: 135,
  rb: 180,
  b: 225,
  lb: 270,
  l: 315
})
function getCursorDirection() {
  const rotate = mod360(0) // 无旋转
  const result: { [k: string]: string } = {}
  let lastMatchIndex = -1

  cursorPoints.forEach((point) => {
    const angle = mod360(initialAngle[point] + rotate)
    const len = angleToCursor.length
    while (point) {
      lastMatchIndex = (lastMatchIndex + 1) % len
      const angleLimit = angleToCursor[lastMatchIndex]
      if (angle < 23 || angle >= 338) {
        result[point] = 'nw-resize'
        return
      }
      if (angleLimit.start <= angle && angle < angleLimit.end) {
        result[point] = angleLimit.cursor + '-resize'
        return
      }
    }
  })
  return result
}
