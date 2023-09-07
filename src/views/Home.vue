<script setup>
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
function changeColor(val) {
  mode.value = val
}
</script>

<template>
  <div text-primary>home</div>
  <button @click="changeColor('blueTheme')">ok</button>
</template>