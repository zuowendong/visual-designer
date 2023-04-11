/// <reference types="vite/client" />

export interface PropertyData {
  id: string
  name: string
  attrs: PropItem[]
}

export interface PropItem {
  name: string // 名称
  key: string // 字段
  required?: boolean // 是否必填
  compKey: string // 组件
  value: string | number | boolean | Object | Array
}
