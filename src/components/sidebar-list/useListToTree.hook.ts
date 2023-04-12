import { ref } from 'vue'
import { ComponentMenu } from './SidebarList.vue'

export default function useListToTree(list: ComponentMenu[]) {
  const generateTree = (list: any, rootId: any) => {
    if (!Array.isArray(list)) {
      new Error('only Array')
      return list
    }

    const objMap: any = {}
    const result: any = []

    for (const item of list) {
      const id = item.id
      const parentId = item.pId

      objMap[id] = !objMap[id] ? item : { ...item, ...objMap[id] }

      const treeItem = objMap[id]
      if (parentId === rootId) {
        result.push(treeItem)
      } else {
        if (!objMap[parentId]) {
          objMap[parentId] = {}
        }

        if (!objMap[parentId].children) {
          objMap[parentId].children = []
        }

        objMap[parentId].children.push(treeItem)
      }
    }
    return result
  }

  return {
    generateTree
  }
}
