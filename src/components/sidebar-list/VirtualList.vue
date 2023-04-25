<template>
  <div ref="container" class="virtualContainer" @scroll="handleScroll">
    <div ref="panel" :style="{ paddingTop: `${paddingTop}px` }">
      <div class="item" v-for="item in visibleList" :key="item.id">
        <slot :row="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, toRefs } from 'vue'

import type { PropType } from 'vue'

const props = defineProps({
  list: { type: Array as PropType<any[]>, default: () => [] }, // original list
  showNum: { type: Number, default: 10 } // render items num
})
const { list, showNum } = toRefs(props)

const container = ref<HTMLElement>()
const panel = ref<HTMLElement>()
const itemHeight = 40
let count = ref(showNum.value)
let endIdx = ref(showNum.value)
function initVisibleData() {
  const containerHeight = container.value?.getBoundingClientRect().height || 300
  count.value = Math.ceil(containerHeight / itemHeight)
  endIdx.value = Math.ceil(containerHeight / itemHeight)
}
onMounted(() => initVisibleData())

let startIdx = ref(0)
let visibleList = computed(() => list.value.slice(startIdx.value, endIdx.value))
let paddingTop = ref(0)
let panelHeight = ref(list.value.length * itemHeight)
function getPanelHeight() {
  if (panel.value) panel.value.style.height = `${panelHeight.value}px`
}
watch(
  () => props.list,
  (list) => {
    panelHeight.value = list.length * itemHeight
    getPanelHeight()
  },
  { deep: true }
)
onMounted(() => getPanelHeight())
function handleScroll(e: any) {
  startIdx.value = Math.floor(e.target.scrollTop / itemHeight)
  endIdx.value = startIdx.value + count.value
  paddingTop.value = startIdx.value * itemHeight
}
</script>

<style scoped lang="scss">
.virtualContainer {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .item {
    font-size: 12px;
    &:hover {
      color: #59c7f9;
      cursor: pointer;
    }
  }
}
</style>
