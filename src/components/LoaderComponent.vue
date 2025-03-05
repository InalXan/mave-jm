<template>
  <div class="fixed inset-0 flex justify-center items-center bg-second z-50">
    <div class="group">
      <div class="relative flex justify-center items-center">
        <!-- Logo -->
        <img src="@/assets/images/logo/loader.png" class="w-48" alt="" />
        <!-- Spinner -->
        <div
          class="absolute w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>
