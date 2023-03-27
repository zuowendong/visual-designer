<template>
  <div class="main">
    <div class="left"></div>
    <div class="title">{{ $t('title') }}</div>
    <div class="right">
      <ThemeButton />
      <SwitchLanguage />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeButton from './ThemeButton.vue'
import SwitchLanguage from './SwitchLanguage.vue'
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  .title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .left {
    justify-self: start;
  }
  .right {
    justify-self: end;
    align-self: center;
    display: flex;
    align-items: center;
  }
}
</style>
