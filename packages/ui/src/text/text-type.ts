import type { ExtractPropTypes } from 'vue'

export const textProps = {
  text: {
    type: String,
    required: true,
    default: '文字标签'
  },
  fontSize: {
    type: Number,
    default: 26
  },
  color: {
    type: String,
    default: 'rgba(51, 51, 51, 1)'
  }
} as const

export type TextProps = ExtractPropTypes<typeof textProps>
