import type { PropType, ExtractPropTypes } from 'vue'

type FontStyle = {
  fontSize: number
  color: string
  fontWeight: string
  letterSpacing: number
  lineHeight: number
  textAlign: string
  [k: string]: any
}

export const textProps = {
  text: {
    type: String,
    required: true,
    default: '文字标签'
  },
  fontStyle: {
    type: Object as PropType<FontStyle>,
    default: (): FontStyle => {
      return {
        fontSize: 24,
        color: '#3D39B1FF',
        fontWeight: 'normal',
        letterSpacing: 0,
        lineHeight: 30,
        textAlign: 'center'
      }
    }
  }
} as const

export type TextProps = ExtractPropTypes<typeof textProps>
