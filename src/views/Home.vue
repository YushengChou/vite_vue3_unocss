<script setup>
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
function changeColor(val) {
  mode.value = val
}
</script>

<template>
  <div text-primary>primary</div>
  <div text-secondary>secondary</div>
  <div text-bg>bg</div>
  <div text-text>text</div>
  <button @click="changeColor('')">auto</button>
  <button @click="changeColor('darkTheme')">dark</button>
  <button @click="changeColor('lightTheme')">light</button>
  <div>
    test
  </div>
</template>