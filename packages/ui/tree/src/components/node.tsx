import IconOpen from './IconOpen'
import IconClose from './IconClose'
import Indent from './Indent'

const renderNode = (item: any, toggle: any) => (
  <div
    style={{ display: 'flex', alignItems: 'center', paddingLeft: 16 * (item.level - 1) + 'px' }}
    onClick={() => toggle(item)}
  >
    {item.children ? item.open ? <IconOpen /> : <IconClose /> : <Indent />}
    {item.label}
  </div>
)

export default renderNode
