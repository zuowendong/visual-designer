import IconOpen from './IconOpen'
import IconClose from './IconClose'
import Indent from './Indent'

const renderNode = (item: any, toggle: any) => (
  <div
    class="rawNode"
    style={{ paddingLeft: 12 * (item.level - 1) + 'px' }}
    onClick={() => toggle(item)}
  >
    <span class="icon">
      {item.children ? item.open ? <IconOpen /> : <IconClose /> : <Indent />}
    </span>
    {item.label}
  </div>
)

export default renderNode
