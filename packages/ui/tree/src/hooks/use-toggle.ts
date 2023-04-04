import { ref } from 'vue'

export default function useToggle(data: any): any {
  const openedTree = (tree: any) => {
    return tree.reduce(
      (acc: any, item: any) =>
        item.open ? acc.concat(item, openedTree(item.children)) : acc.concat(item),
      []
    )
  }

  const openedData = ref(openedTree(data))

  const toggle = (item: any) => {
    if (!item.children) return
    item.open = !item.open
    openedData.value = openedTree(data)
  }

  return {
    openedData,
    toggle
  }
}
