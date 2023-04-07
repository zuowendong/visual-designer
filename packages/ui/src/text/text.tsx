import { defineComponent, computed } from 'vue'
import { textProps, type TextProps } from './text-type'
import './text.scss'

export default defineComponent({
  name: 'WdText',
  props: textProps,
  emits: [],
  setup(props: TextProps, ctx) {
    const textStyle = computed(() => {
      return `color: ${props.style?.color}; font-size: ${props.style?.fontSize}px;`
    })
    return () => (
      <div class="wd-text_default" style={textStyle.value}>
        {props.text}
      </div>
    )
  }
})
