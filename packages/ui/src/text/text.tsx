import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WdText',
  props: {
    text: { type: String, default: '文本标签' },
    fontSize: { type: Number, default: 12 },
    color: { type: String, default: '#003eb3' }
  },
  setup(props) {
    return () => {
      return <div style={{ color: props.color, fontSize: props.fontSize }}>{props.text}</div>
    }
  }
})
