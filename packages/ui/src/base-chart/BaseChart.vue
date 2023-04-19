<template>
  <div ref="chartBox" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts">
export default { name: 'BaseChart' }
</script>

<script lang="ts" setup>
import echarts from './use-chart'
import { onMounted, ref, onBeforeUnmount, toRefs, watch } from 'vue'

const props = defineProps({
  option: { type: Object, default: () => {} }
})
let { option } = toRefs(props)

watch(
  () => props.option,
  (op) => {
    if (!chartBox.value) return
    const chartDom = echarts.init(chartBox.value)
    chartDom.setOption(op.value)
  },
  { deep: true }
)

let chartBox = ref<HTMLElement>()
function initCharts() {
  if (!chartBox.value) return
  const chartDom = echarts.init(chartBox.value)
  chartDom.setOption(option.value)
  resizeChartDom(chartDom)
}

// 兼容性 chrome
let resizeObserver = ref()
function resizeChartDom(chartDom: any) {
  resizeObserver.value = new ResizeObserver((entries) => {
    const dom = entries[0].target
    chartDom.resize({
      width: dom.clientWidth,
      height: dom.clientHeight
    })
  })
  resizeObserver.value.observe(chartBox.value)
}

onMounted(() => initCharts())
onBeforeUnmount(() => {
  if (!chartBox.value) return
  let chartDom = echarts.init(chartBox.value)
  chartDom.dispose()
  resizeObserver.value && resizeObserver.value.unobserve(chartBox.value)
})
</script>
