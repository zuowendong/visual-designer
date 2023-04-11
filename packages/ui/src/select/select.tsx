import { defineComponent } from 'vue'
import { selectProps, type SelectProps } from './select-type'

export default defineComponent({
  name: 'WdSelect',
  props: selectProps,
  emits: [],
  setup(props: SelectProps) {
    return () => (
      <select>
        {props.list.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    )
  }
})
