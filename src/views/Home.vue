<script setup>
import { useColorMode } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const mode = useColorMode()
const { t, locale } = useI18n()

function changeColor(val) {
  mode.value = val
}
</script>

<template>
  <div text-primary>primary</div>
  <div text-secondary>secondary</div>
  <div text-bg>bg</div>
  <div text-text>text</div>
  <div bg="pic_url center cover no-repeat" w25 h25></div>
  <button @click="changeColor('')">auto</button>
  <button @click="changeColor('darkTheme')">dark</button>
  <button @click="changeColor('lightTheme')">light</button>
  <div>
    test
  </div>
  <div>{{ $t('common.label.username') }}</div>
  <div>{{ t('common.label.balance') }}</div>
  <select v-model="locale">
    <option value="zh">zh</option>
    <option value="en">en</option>
  </select>
</template>