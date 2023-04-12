import { defineComponent } from 'vue'
import { treeProps, type TreeProps } from './tree-types'
import useToggle from './useToggle.hook'
import renderNode from './node'
import './tree.scss'

export default defineComponent({
  name: 'MenuTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps) {
    const { openedData, toggle } = useToggle(props.data)
    return () => <div>{openedData.value.map((item: any) => renderNode(item, toggle))}</div>
  }
})
