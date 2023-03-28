<template>
  <div
    class="shapeBox"
    :style="shapeStyle"
    @click.stop.prevent
    @mousedown.stop="shapeMousedown($event, props.element)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { IComponent } from '@/types'
import { useShapeMove } from '@/hooks/shapeMove'

const props = defineProps({
  active: { type: Boolean, default: false },
  defaultStyle: { type: Object, default: () => {} },
  element: { type: Object as PropType<IComponent>, default: () => {} },
  componentId: { type: String, default: '' }
})

const shapeStyle = computed(() => {
  let width = props.element.style?.width
  let height = props.element.style?.height
  let left = props.element.style?.x
  let top = props.element.style?.y
  return `width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px`
})

const { shapeMousedown } = useShapeMove()
</script>

<style scoped lang="scss">
.shapeBox {
  position: absolute;
  outline: 1px solid var(--theme-active);
  &:hover {
    cursor: move;
  }
}
</style>
