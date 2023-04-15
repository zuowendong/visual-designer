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
        name: '字体',
        key: 'fontStyle',
        compKey: 'dui-complex-text',
        value: {
          fontSize: 24,
          color: '#333333',
          fontWeight: 'normal',
          letterSpacing: 0,
          lineHeight: 100,
          textAlign: 'center'
        }
      }
    ]
  }
]
