import { defineComponent, ref, watch, watchEffect } from 'vue'
import { chartProps, type ChartProps } from './chartpie-type'
import BaseChart from '../base-chart/BaseChart.vue'

export default defineComponent({
  name: 'WdChartpie',
  components: { BaseChart },
  props: chartProps,
  emits: [],
  setup(props: ChartProps) {
    const option = ref({})
    watchEffect(() => {
      option.value = {
        title: {
          text: props.title.checked ? props.title.label : '',
          subtext: props.subTitle.checked ? props.subTitle.label : '',
          left: 'center'
        },
        tooltip: { trigger: 'item' },
        legend: { orient: 'vertical', left: 'left' },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: [`${props.annularRadius[0]}%`, `${props.annularRadius[1]}%`],
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })

    return () => <BaseChart option={option}></BaseChart>
  }
})
