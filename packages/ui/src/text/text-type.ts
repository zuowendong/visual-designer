import type { PropType, ExtractPropTypes } from 'vue'

export type TextStyle = {
  fontSize: Number
  color: String
}

export const textProps = {
  text: {
    type: String,
    required: true,
    default: '文字标签'
  },
  style: {
    type: Object as PropType<TextStyle>,
    default: (): TextStyle => {
      return {
        fontSize: 26,
        color: 'rgba(51, 51, 51, 1)'
      }
    }
  }
} as const

export type TextProps = ExtractPropTypes<typeof textProps>
