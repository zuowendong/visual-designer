import IconOpen from './IconOpen'
import IconClose from './IconClose'
import Indent from './Indent'

const renderNode = (item: any, handleToggle: any, handleDragStart: any) => (
  <div
    class="rawNode"
    style={{ paddingLeft: 12 * (item.level - 1) + 'px' }}
    onClick={() => handleToggle(item)}
  >
    <span class="icon">
      {item.children ? item.open ? <IconOpen /> : <IconClose /> : <Indent />}
    </span>
    {item.level == 1 ? (
      <span>{item.name}</span>
    ) : (
      <div class="compItem" draggable={true} onDragstart={(e) => handleDragStart(e, item)}>
        {item.name}
      </div>
    )}
  </div>
)

export default renderNode
