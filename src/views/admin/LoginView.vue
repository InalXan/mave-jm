<template>
  <div
    class="bg-[url('@/assets/images/admin/textures/login-texture.jpg')] bg-center bg-cover flex justify-center items-center min-h-screen"
  >
    <!-- Left: Image -->
    <div class="hidden lg:flex lg:w-1/2 justify-center items-center">
      <div class="flex justify-center flex-row gap-4 w-full bg-second/10 backdrop-blur-md">
        <img src="@/assets/images/admin/layoutlore/logo-trans.png" class="w-64 h-64 rounded-full" />
        <img src="@/assets/images/logo/logo.png" class="w-64 h-64 rounded-full" />
      </div>
    </div>

    <!-- Right: Login Form -->
    <div
      class="lg:p-20 md:p-16 sm:p-12 p-8 w-full lg:w-1/2 bg-second/10 backdrop-blur-md shadow-md h-screen flex justify-center flex-col"
    >
      <div class="lg:hidden flex justify-center items-center w-full">
        <img src="@/assets/images/admin/layoutlore/logo.png" class="w-28 h-28 rounded-full" />
        <img src="@/assets/images/logo/logo.png" class="w-28 h-28 rounded-full" />
      </div>
      <h1 class="text-2xl font-semibold text-center mb-6 mt-6">
        <span class="text-primary">mave-jm</span> admin login
      </h1>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin">
        <!-- Username Input -->
        <div class="mb-4">
          <label for="username" class="block text-gray-700">Id *</label>
          <input
            type="text"
            v-model="username"
            id="username"
            name="username"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
            autocomplete="off"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password *</label>
          <input
            type="password"
            v-model="password"
            id="password"
            name="password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
            autocomplete="off"
            required
          />
        </div>

        <!-- Forgot Password Link -->
        <div class="mb-6 text-primary text-center">
          <a href="#" class="hover:underline">Forgot Password?</a>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="bg-primary cursor-pointer hover:bg-primary text-second font-semibold rounded-md py-2 px-4 w-full transition duration-300"
        >
          Login
        </button>
      </form>

      <!-- Error Message -->
      <p v-if="errorMessage" class="error mt-4 text-center text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/api/useAuth'
import { useRouter } from 'vue-router'

const { login } = useAuth()
const router = useRouter()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = async () => {
  try {
    const response = await login(username.value, password.value)
    localStorage.setItem('accessToken', response.accessToken) // Token kaydet
    router.push('/mave/admin/profile') // Başarılı girişte yönlendir
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Login failed.'
  }
}
</script>
