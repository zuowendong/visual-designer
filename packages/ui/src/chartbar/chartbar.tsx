import { defineComponent, ref, watch } from 'vue'
import { chartProps, type ChartProps } from './chartbar-type'
import BaseChart from '../base-chart/BaseChart.vue'

export default defineComponent({
  name: 'WdChartbar',
  components: { BaseChart },
  props: chartProps,
  emits: [],
  setup(props: ChartProps) {
    const option = ref({
      title: {
        text: 'Rainfall vs Evaporation',
        subtext: ''
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    })

    watch(
      () => props.title,
      (title) => {
        option.value.title.text = title.checked ? title.label : ''
      },
      { deep: true }
    )
    watch(
      () => props.subTitle,
      (title) => {
        option.value.title.subtext = title.checked ? title.label : ''
      },
      { deep: true }
    )

    return () => <BaseChart option={option}></BaseChart>
  }
})
