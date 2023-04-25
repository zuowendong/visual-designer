<template>
  <div class="listMain">
    <div class="menuContainer">
      <header>{{ $t('component-list') }}</header>
      <MenuTree :data="treeList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IComponentBase } from '@/types'
import { staticData } from '@designer/ui'
import MenuTree from './tree/menu-tree'
import { TreeData } from './tree/tree-types'

export interface ComponentMenu {
  category: string
  categoryName: string
  label: string
  name: string
}

let treeList = ref<TreeData[]>([])
let componentList = ref<IComponentBase[]>([])
async function getComponentList() {
  const list: ComponentMenu[] = await staticData.getJsonDataArray()
  componentList.value = list.map((item, index): IComponentBase => {
    return {
      ...item,
      id: (index + 1).toString(),
      key: item.label
    }
  })
  treeList.value = genTreeData(componentList.value)
}

onMounted(async () => {
  await getComponentList()
})

function genTreeData(list: IComponentBase[]): TreeData[] {
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
