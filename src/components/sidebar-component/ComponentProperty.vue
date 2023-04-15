<template>
  <div class="propertyMain">
    <div
      v-for="(configItem, key) of componentStore.componentPropConfig"
      :key="key"
      class="configItem"
    >
      <div class="title">{{ configItem.name }}</div>
      <div v-for="(item, itemKey) of configItem.props" :key="itemKey" class="propItem">
        <div class="label">{{ item.name }}</div>
        <component :is="item.compKey"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useComponentStore } from '@/stores/component'

const componentStore = useComponentStore()
</script>

<style scoped lang="scss">
.propertyMain {
  .configItem {
    padding-bottom: 30px;
    .title {
      font-size: 16px;
      padding-bottom: 12px;
      user-select: none;
      cursor: pointer;
    }
    .propItem {
      display: flex;
      padding-bottom: 20px;
      .label {
        flex-shrink: 0;
        width: 34px;
        padding-top: 4px;
        padding-right: 5px;
        margin-right: 15px;
        border-right: 1px solid var(--theme-border);
      }
      .hiddenCompBox {
        flex: 1;
        position: relative;
        &::before {
          position: absolute;
          top: 12px;
          width: 90%;
          height: 1px;
          content: '...';
          background: var(--theme-border);
          z-index: 0;
        }
        i {
          position: absolute;
          right: 10px;
          color: var(--theme-color);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
