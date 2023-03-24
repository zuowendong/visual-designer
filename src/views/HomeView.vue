<template>
  <article>
    <header>
      <NavigationView />
    </header>
    <aside>left aside</aside>
    <main>canvas</main>
    <aside>right aside</aside>
  </article>
</template>

<script setup lang="ts">
import { NavigationView } from '@/components'
</script>

<style scoped lang="scss">
article {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto 300px;
  grid-template-rows: 60px auto;
  color: var(--theme-color);
  background-color: var(--theme-background);
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
  }
}
</style>
