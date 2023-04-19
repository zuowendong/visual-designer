import { defineComponent, computed, ref } from 'vue'
import { textProps, type TextProps } from './text-type'

export default defineComponent({
  name: 'WdText',
  props: textProps,
  emits: [],
  setup(props: TextProps) {
    const textStyle = computed(() => {
      return `width: 100%; height: 100%; color: ${props.fontStyle.color}; font-size: ${props.fontStyle.fontSize}px; font-weight: ${props.fontStyle.fontWeight}; letter-spacing: ${props.fontStyle.letterSpacing}px; line-height: ${props.fontStyle.lineHeight}px; text-align: ${props.fontStyle.textAlign}`
    })

    return () => (
      <div class="wd-text_default" style={textStyle.value}>
        {props.text}
      </div>
    )
  }
})
