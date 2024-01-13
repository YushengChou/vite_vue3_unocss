<script setup>
import { useColorMode } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '../stores/store'

const mode = useColorMode()
const { t, locale } = useI18n()

function changeColor(val) {
  mode.value = val
}

const store = useGlobalStore()
console.log(store.count);
function test() {
  store.increment()
}
</script>

<template>
  <div text-primary font-aclonica><span w-5 h-5 block i-icon-park-airplane></span>primary</div>
  <div text-secondary>secondary</div>
  <div text-bg>bg</div>
  <div text-text>text</div>
  <div bg="pic_url center cover no-repeat" w25 h25></div>
  <button @click="changeColor('')">auto</button>
  <button @click="changeColor('darkTheme')">dark</button>
  <button @click="changeColor('lightTheme')">light</button>
  <div>
    store: {{ store.count }}
    testWord
  </div>
  <button @click="test">+1</button>
  <div>{{ $t('common.label.username') }}</div>
  <div>{{ t('common.label.balance') }}</div>
  <select v-model="locale">
    <option value="zh-TW">zh</option>
    <option value="en-US">en</option>
  </select>
  <div class="test">
    測試測試
  </div>
</template>
<style scoped lang="less">
.test {
  @apply text-green;
}
</style>