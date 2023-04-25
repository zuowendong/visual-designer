import type { PropType, ExtractPropTypes } from 'vue'

export interface TreeData {
  name: string
  level: number
  open?: boolean
  children?: TreeData[]
  [k: string]: any
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeData[]>,
    required: true
  }
} as const // 确保用户不能修改 treeProps内部属性

export type TreeProps = ExtractPropTypes<typeof treeProps>
