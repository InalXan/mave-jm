<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoaderComponent from './components/LoaderComponent.vue'
import { ref } from 'vue'
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)
</script>
<template>
  <RouterView />
  <LoaderComponent v-if="isLoading" />
</template>
