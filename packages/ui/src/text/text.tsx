import { defineComponent, computed } from 'vue'
import { textProps, type TextProps } from './text-type'

export default defineComponent({
  name: 'WdText',
  props: textProps,
  emits: [],
  setup(props: TextProps) {
    const textStyle = computed(() => {
      return `color: ${props.color}; font-size: ${props.fontSize}px;`
    })
    return () => (
      <div class="wd-text_default" style={textStyle.value}>
        {props.text}
      </div>
    )
  }
})
