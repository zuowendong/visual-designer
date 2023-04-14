import { PropertyData, PropItem } from '../env'

// export function formatPropType(list: PropertyData[]) {
//   // const _list = list.filter((item) => item.id !== 'base')
//   const attrs = list.map((item) => item.attrs)
//   const entries = new Map(getMapList(attrs.flat()))
//   const props = Object.fromEntries(entries)
//   return props
// }

// function getMapList(attrsList: PropItem[]): any {
//   return attrsList.map((item) => {
//     const { key, ...params } = item
//     return [key, params]
//   })
// }

function getMapList(list: PropItem[]) {
  return list.map((item) => {
    const { key, ...params } = item
    return [key, params]
  })
}
export function formatPropType(list: PropertyData[]) {
  const componentProp: any = {}
  list.forEach((item) => {
    const mapList = getMapList(item.attrs) as any
    const entries = new Map(mapList)
    const props = Object.fromEntries(entries)
    componentProp[item.id] = {
      name: item.name,
      props
    }
  })
  return componentProp
}
