import type { PropType, ExtractPropTypes } from 'vue'

export type TextStyle = {
  fontSize: Number
  color: String
}

export const textProps = {
  text: {
    type: String,
    required: true
  },
  style: {
    type: Object as PropType<TextStyle>
  }
} as const

export type TextProps = ExtractPropTypes<typeof textProps>
