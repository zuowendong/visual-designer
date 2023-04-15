<template>
  <div class="listMain">
    <div class="menuContainer">
      <header>{{ $t('component-list') }}</header>
      <div
        v-for="compItem in componentList"
        :key="compItem.id"
        class="compItem"
        draggable="true"
        @dragstart="handleDragStart($event, compItem)"
      >
        <span>{{ compItem.id }}</span>
        <span>{{ compItem.name }}</span>
      </div>

      <MenuTree :data="treeData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IComponentBase } from '@/types'
import { staticData } from '@designer/ui'
import MenuTree from './tree/tree'
import { TreeData } from './tree/tree-types'
import { componentInstall } from '@/utils/component'
import { useComponentStore } from '@/stores/component'

export interface ComponentMenu {
  category: string
  categoryName: string
  label: string
  name: string
}

let componentList = ref<IComponentBase[]>([])
async function getComponentList() {
  staticData.getJsonDataArray().then((list: ComponentMenu[]) => {
    componentList.value = list.map((item, index): IComponentBase => {
      return {
        ...item,
        id: (index + 1).toString(),
        key: item.label
      }
    })

    console.log('menus', componentList.value)
  })
}
onMounted(() => getComponentList())

const treeData = ref<TreeData>([
  {
    label: '一级1',
    level: 1,
    open: true,
    children: [
      {
        label: '二级1-1',
        level: 2,
        children: [{ label: '三级1-1-1', level: 3 }]
      }
    ]
  },
  {
    label: '一级2',
    level: 1,
    open: false,
    children: [
      {
        label: '二级2-1',
        level: 2
      },
      {
        label: '二级2-2',
        level: 2,
        children: [{ label: '三级级2-2-1', level: 3 }]
      }
    ]
  }
])

const componentStore = useComponentStore()
function handleDragStart(e: DragEvent, compItem: IComponentBase) {
  e.dataTransfer?.setData('component', compItem.key)

  console.log(compItem.key)

  const keyPath = compItem.key.substring(2).toLowerCase()
  staticData.fetchComponent(keyPath).then((module) => {
    const { staticData } = module
    componentInstall(compItem.key, module)
    componentStore.setComponentProps(compItem.key, staticData)
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
