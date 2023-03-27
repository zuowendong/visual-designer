<template>
  <article>
    <header>
      <NavigationView />
    </header>
    <aside>
      <SidebarList />
    </aside>
    <main>
      <CanvasBox />
      <CanvasFooter />
    </main>
    <aside>right aside</aside>
  </article>
</template>

<script setup lang="ts">
import { NavigationView, SidebarList, CanvasBox, CanvasFooter } from '@/components'
// import { WdText } from '@designer/ui'
</script>

<style scoped lang="scss">
article {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 150px auto 300px;
  grid-template-rows: 60px auto;
  overflow: hidden;
  font-size: 14px;
  header {
    grid-column-start: 1;
    grid-column-end: 4;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid var(--theme-border);
  }
  main {
    box-sizing: border-box;
    border-left: 1px solid var(--theme-border);
    border-right: 1px solid var(--theme-border);
    padding: 10px 20px 40px 20px;
    overflow: hidden;
  }
}
</style>
