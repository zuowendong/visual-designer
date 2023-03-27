<template>
  <div class="langBtn" @click="handleChangeLang">
    <i :class="['iconfont', isZh ? 'icon-zhongwen' : 'icon-yingwen']"></i>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { i18n } from '@/lang'

let isZh = ref(true)
function handleChangeLang() {
  isZh.value = !isZh.value

  if (isZh.value) {
    i18n.global.locale.value = 'zh-cn'
  } else {
    i18n.global.locale.value = 'en-us'
  }
}
</script>

<style scoped lang="scss">
.langBtn {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  margin-left: 20px;
  i {
    font-size: 18px;
  }
}
</style>
