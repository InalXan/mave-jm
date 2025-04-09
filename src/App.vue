<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoaderComponent from './components/LoaderComponent.vue'
import CookieUtil from './utils/CookieUtil.vue'
import { ref } from 'vue'
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)
</script>
<template>
  <RouterView />
  <CookieUtil />
  <LoaderComponent v-if="isLoading" />
</template>
<style scoped>
/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #a86332;
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d3d3d3;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}
</style>
