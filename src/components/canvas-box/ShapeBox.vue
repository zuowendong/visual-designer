<template>
  <div
    class="shapeBox"
    :style="shapeStyle"
    @click.stop.prevent
    @mousedown.stop="shapeMousedown($event, props.element)"
  >
    <div
      v-for="point in isActive ? cursorPoints : []"
      :key="point"
      class="pointItem"
      :style="pointStyle(point, element)"
      @mousedown.stop.prevent="cursorMousedown($event, point, props.element)"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { IComponent } from '@/types'
import { useShapeMove } from '@/hooks/shapeMove'

const props = defineProps({
  isActive: { type: Boolean, default: false },
  defaultStyle: { type: Object, default: () => {} },
  element: { type: Object as PropType<IComponent>, default: () => {} },
  componentId: { type: String, default: '' }
})

const shapeStyle = computed(() => {
  let width = props.element.style.width
  let height = props.element.style.height
  let left = props.element.style.x
  let top = props.element.style.y
  return `width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px`
})

const { shapeMousedown, cursorPoints, pointStyle, cursorMousedown } = useShapeMove()
</script>

<style scoped lang="scss">
.shapeBox {
  position: absolute;
  outline: 1px solid var(--theme-active);
  &:hover {
    cursor: move;
  }
  .pointItem {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: var(--theme-bg);
    border: 1px solid var(--theme-active);
    border-radius: 50%;
    z-index: 1;
  }
}
</style>
