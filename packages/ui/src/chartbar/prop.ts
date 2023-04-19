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
        value: 500
      },
      {
        name: '高度',
        key: 'height',
        compKey: 'dui-input-number',
        value: 300
      }
    ]
  },
  {
    id: 'barSetting',
    name: '柱图配置',
    attrs: [
      {
        name: '标题',
        key: 'title',
        compKey: 'dui-checkbox-text',
        value: {
          checked: false,
          label: ''
        }
      },
      {
        name: '副标题',
        key: 'subTitle',
        compKey: 'dui-checkbox-text',
        value: {
          checked: false,
          label: ''
        }
      }
    ]
  }
]
