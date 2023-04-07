import { defineComponent } from 'vue'
import { treeProps, type TreeProps } from './tree-types'
import useToggle from './hooks/use-toggle'
import renderNode from './components/node'

export default defineComponent({
  name: 'WdTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps, ctx) {
    const { openedData, toggle } = useToggle(props.data)
    return () => (
      <div class="d-tree">{openedData.value.map((item: any) => renderNode(item, toggle))}</div>
    )
  }
})
