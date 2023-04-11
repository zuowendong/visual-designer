import { PropertyData, PropItem } from '../env'

export function formatPropType(list: PropertyData[]) {
  const _list = list.filter((item) => item.id !== 'base')
  const attrs = _list.map((item) => item.attrs)
  const entries = new Map(getMapList(attrs.flat()))
  const props = Object.fromEntries(entries)
  return props
}

function getMapList(attrsList: PropItem[]): any {
  return attrsList.map((item) => {
    const { key, ...params } = item
    return [key, params]
  })
}
