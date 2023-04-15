<template>
  <div class="componentMain">
    <div class="tabContainer">
      <div
        v-for="(tab, i) in TABS"
        :key="i"
        :class="['tabItem', { activeItem: currentTab === tab.component }]"
        @click="currentTab = tab.component"
      >
        <span>{{ tab.name }}</span>
      </div>
    </div>
    <div class="operationBox">
      <n-config-provider :theme="themeStore.naiveTheme">
        <component :is="currentTab"></component>
      </n-config-provider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import ComponentProperty from './ComponentProperty.vue'
import ComponentData from './ComponentData.vue'
import ComponentEvent from './ComponentEvent.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const { t } = useI18n()
const TABS = reactive([
  { component: ComponentProperty, name: computed(() => t('property')) },
  { component: ComponentData, name: computed(() => t('data')) },
  { component: ComponentEvent, name: computed(() => t('event')) }
])
let currentTab = shallowRef(ComponentProperty)
</script>

<style scoped lang="scss">
.componentMain {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tabContainer {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    box-sizing: border-box;
    padding: 0 20px 6px 20px;
    background-color: var(--theme-bg);
    color: var(--theme-color);
    border-bottom: 1px solid var(--theme-border);
    .tabItem {
      text-align: center;
      cursor: pointer;
      border-bottom: 2px solid transparent;
    }
    .activeItem {
      color: var(--theme-active);
      border-bottom: 2px solid var(--theme-active);
    }
  }
  .operationBox {
    width: 100%;
    height: calc(100% - 40px);
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 20px 10px;
  }
}
</style>
