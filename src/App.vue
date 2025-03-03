<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoaderComponent from './components/LoaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { ref } from 'vue'
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)
</script>
<template>
  <RouterView />
  <FooterComponent />
  <LoaderComponent v-if="isLoading" />
</template>
