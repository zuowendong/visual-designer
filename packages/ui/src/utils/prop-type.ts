import { PropertyData, PropItem } from '../env'

function getMapList(list: PropItem[]) {
  return list.map((item) => {
    const { key, ...params } = item
    return [key, params]
  })
}

function addBaseConfig(id: string) {
  if (id === 'base') {
    return [
      {
        name: '坐标',
        key: 'position',
        compKey: 'dui-group-number',
        value: { x: 0, y: 0 }
      },
      {
        name: '背景颜色',
        key: 'bgColor',
        compKey: 'dui-color-picker',
        value: '#FFFFFF'
      },
      {
        name: '层级',
        key: 'zIndex',
        compKey: 'dui-input-number',
        value: 0
      }
    ]
  } else {
    return []
  }
}

export function formatPropType(list: PropertyData[]) {
  const componentProp: any = {}
  list.forEach((item) => {
    const mapList = getMapList([...item.attrs, ...addBaseConfig(item.id)]) as any
    const entries = new Map(mapList)
    const props = Object.fromEntries(entries)
    componentProp[item.id] = {
      name: item.name,
      props
    }
  })
  return componentProp
}
