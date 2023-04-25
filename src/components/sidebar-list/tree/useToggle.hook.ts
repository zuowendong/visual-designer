import { ref } from 'vue'
import type { IComponentBase } from '@/types'
import { staticData } from '@designer/ui'
import { componentInstall } from '@/utils/component'
import { useComponentStore } from '@/stores/component'

const openedTree = (tree: any) => {
  return tree.reduce(
    (acc: any, item: any) =>
      item.open ? acc.concat(item, openedTree(item.children)) : acc.concat(item),
    []
  )
}

export default function useToggle(data: any): any {
  const openedData = ref(openedTree(data))

  function handleToggle(item: any) {
    if (!item.children) return
    item.open = !item.open
    openedData.value = openedTree(data)
  }

  const componentStore = useComponentStore()
  function handleDragStart(e: DragEvent, compItem: IComponentBase) {
    e.dataTransfer?.setData('component', compItem.key)
    const compKey = compItem.key.substring(2)
    const keyPath = compKey.toLowerCase()
    staticData.fetchComponent(keyPath).then((module: any) => {
      const { staticData } = module[compKey]
      // window['$app'].use(module.default)
      componentInstall(compItem.key, module[compKey])
      componentStore.setComponentProps(compItem.key, staticData)
    })
  }
  return {
    openedData,
    handleToggle,
    handleDragStart
  }
}
