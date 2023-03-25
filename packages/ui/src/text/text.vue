<template>
  <div :style="textStyle">{{ textValue }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'WdText',
  props: {
    text: { type: String, default: '文本标签' },
    fontSize: { type: Number, default: 12 },
    color: { type: String, default: '#003eb3' }
  },
  setup(props) {
    const textStyle = computed(() => {
      return `color: ${props.color}; fontSize: ${props.fontSize}px;`
    })

    return {
      textStyle,
      textValue: props.text
    }
  }
})
</script>
