import type { PropType } from 'vue'
import { PropertyData } from '../env'

type FontText = {
  fontSize: number
  color: string
}

export const properties: PropertyData[] = [
  {
    id: 'base',
    name: '基本配置',
    attrs: [
      {
        name: '宽度',
        key: 'width',
        type: Number,
        compKey: 'dui-input-number',
        value: 200
      },
      {
        name: '高度',
        key: 'height',
        type: String,
        compKey: 'dui-input-number',
        value: 30
      }
    ]
  },
  {
    id: 'style',
    name: '样式',
    attrs: [
      {
        name: '文本',
        key: 'fontText',
        type: Object as PropType<FontText>,
        required: true,
        compKey: 'dui-input-text',
        value: {
          fontSize: 20,
          color: 'red'
        }
      }
    ]
  }
]
