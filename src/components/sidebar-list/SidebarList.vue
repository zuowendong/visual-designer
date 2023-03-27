<template>
  <div class="listMain">
    <div class="menuContainer">
      <div
        v-for="compItem in componentList"
        :key="compItem.id"
        class="compItem"
        draggable="true"
        @dragstart="handleDragStart($event, compItem)"
      >
        <span>{{ compItem.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ICompItem {
  id: number
  name: string
  key: string
}

let componentList = ref<ICompItem[]>([
  { id: 1, name: '文字标签', key: 'WdText' },
  { id: 2, name: '下拉框', key: 'WdSelect' }
])

function handleDragStart(e: DragEvent, compItem: ICompItem) {
  e.dataTransfer?.setData('component', compItem.key)
}
</script>

<style scoped lang="scss">
.listMain {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  .menuContainer {
    height: 50%;
    overflow: auto;
    .compItem {
      width: 100%;
      height: 32px;
      box-sizing: border-box;
      padding-left: 20px;
      line-height: 32px;
      border: 1px solid var(--theme-border);
      color: var(--theme-color);
      margin-bottom: 10px;
      border-top-left-radius: 12px;
      border-bottom-right-radius: 12px;
      cursor: pointer;
      user-select: none;
      &:hover {
        background-color: #91caff;
      }
    }
  }
}
</style>
