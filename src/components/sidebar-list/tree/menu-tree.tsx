import { defineComponent, watchEffect, ref } from 'vue'
import { treeProps, type TreeProps } from './tree-types'
import useToggle from './useToggle.hook'
import renderNode from './node'
import './tree.scss'

export default defineComponent({
  name: 'MenuTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps) {
    const _treeList = ref()
    watchEffect(() => {
      const { openedData } = useToggle(props.data)
      _treeList.value = openedData.value
    })
    const { handleToggle, handleDragStart } = useToggle(props.data)
    return () => (
      <div class="tree">
        {_treeList.value.map((item: any) => renderNode(item, handleToggle, handleDragStart))}
      </div>
    )
  }
})
