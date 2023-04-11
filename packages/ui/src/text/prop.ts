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
    name: '文字样式',
    attrs: [
      {
        name: '字号',
        key: 'fontSize',
        compKey: 'dui-input-number',
        value: 24
      },
      {
        name: '颜色',
        key: 'color',
        compKey: 'dui-color-picker',
        value: 'rgba(51, 51, 51, 1)'
      }
    ]
  },
  {
    id: 'content',
    name: '文字内容',
    attrs: [
      {
        name: '文本',
        key: 'text',
        required: true,
        compKey: 'dui-input-text',
        value: '文本标签'
      }
    ]
  }
]
