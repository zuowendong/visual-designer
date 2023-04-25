<template>
  <div class="listMain">
    <div class="menuContainer">
      <header>{{ $t('component-list') }}</header>
      <MenuTree :data="treeList" />
    </div>
    <div class="liveCompBox">
      <VirtualList :list="componentStore.componentList">
        <template #default="{ row }">
          <div class="liveItem">{{ row.key }} ({{ row.id }})</div>
        </template>
      </VirtualList>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IComponentBase, IMenu } from '@/types'
import { staticData } from '@designer/ui'
import MenuTree from './tree/menu-tree'
import { TreeData } from './tree/tree-types'
import VirtualList from './VirtualList.vue'
import { useComponentStore } from '@/stores/component'

export interface ComponentMenu {
  category: string
  categoryName: string
  label: string
  name: string
}

let treeList = ref<TreeData[]>([])
async function getComponentList() {
  const list: ComponentMenu[] = await staticData.getJsonDataArray()
  const _list = list.map((item, index): IMenu => {
    return {
      ...item,
      id: (index + 1).toString(),
      key: item.label
    }
  })
  treeList.value = genTreeData(_list)
}
onMounted(async () => {
  await getComponentList()
})

function genTreeData(list: IMenu[]): TreeData[] {
  const categoryMap = new Map()
  let treeObj: { [k: string]: TreeData[] } = {}
  for (let i = 0; i < list.length; i++) {
    categoryMap.set(list[i].category, list[i].categoryName)
    const row = { ...list[i], level: 2 }
    if (treeObj[list[i].category]) {
      treeObj[list[i].category].push(row)
    } else {
      treeObj[list[i].category] = [row]
    }
  }

  const keys = Object.keys(treeObj)
  return keys.map((key) => {
    return {
      name: categoryMap.get(key),
      level: 1,
      open: true,
      children: treeObj[key]
    }
  })
}

const componentStore = useComponentStore()
const liveTimeComps = ref([])
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
    header {
      width: 100%;
      height: 32px;
      box-sizing: border-box;
      padding-left: 6px;
      line-height: 32px;
      font-size: 16px;
      margin-bottom: 5px;
      font-weight: 600;
    }
  }
  .liveCompBox {
    box-sizing: border-box;
    height: 50%;
    overflow: hidden;
    border-top: 1px solid var(--theme-border);
    padding-top: 10px;
    .liveItem {
      height: 40px;
      display: flex;
      // flex-direction: column;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 1行换行
      -webkit-box-orient: vertical;
    }
  }
}
</style>
