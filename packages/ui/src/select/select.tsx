import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WdSelect',
  setup() {
    const list = ref([
      { id: 1, label: '南京', value: 'nanjing' },
      { id: 2, label: '苏州', value: 'suzhou' },
      { id: 3, label: '上海', value: 'shanghai' }
    ])
    return () => {
      return (
        <select>
          {list.value.map((item) => {
            return <option value={item.value}>{item.label}</option>
          })}
        </select>
      )
    }
  }
})
