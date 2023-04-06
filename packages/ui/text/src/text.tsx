import { defineComponent, computed } from 'vue'
import { textProps, type TextProps } from './text-type'

export default defineComponent({
  name: 'WdText',
  props: textProps,
  emits: [],
  setup(props: TextProps, ctx) {
    const textStyle = computed(() => {
      return `color: ${props.style?.color}; font-size: ${props.style?.fontSize}px;`
    })
    return () => <div style={textStyle.value}>{props.text}</div>
  }
})
