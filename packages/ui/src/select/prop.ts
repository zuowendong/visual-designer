import { PropertyData } from '../env'

export const properties: PropertyData[] = [
  {
    id: 'base',
    name: '基本配置',
    attrs: [
      {
        name: '宽度',
        key: 'width',
        compKey: 'dui-input-number',
        value: 200
      },
      {
        name: '高度',
        key: 'height',
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
