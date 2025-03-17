<template>
  <div
    class="fixed top-0 w-full h-28 flex justify-around items-center p-4 bg-second/60 backdrop-blur-md shadow-sm z-50"
  >
    <div class="max-w-6xl w-full mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div>
        <RouterLink to="/">
          <img src="@/assets/images/logo/logo.png" class="w-28" alt="Logo" />
        </RouterLink>
      </div>

      <!-- Mega Menu -->
      <nav class="hidden md:flex space-x-4">
        <div v-for="(menuItem, index) in menuItems" :key="menuItem.name" class="relative group">
          <RouterLink
            :to="menuItem.link"
            class="uppercase text-sm p-2 hover:bg-primary hover:text-second transition-all duration-300 rounded-lg"
          >
            {{ menuItem.name }}
          </RouterLink>
          <div
            v-if="menuItem.submenu"
            class="absolute left-0 mt-2 bg-second/90 backdrop-blur-md shadow-lg rounded-lg p-4 hidden group-hover:block"
          >
            <ul>
              <li
                v-for="sub in menuItem.submenu"
                :key="sub.name"
                class="p-2 w-92 hover:bg-gray-100 rounded-md transition-all duration-200"
              >
                <RouterLink :to="sub.link" class="block">{{ sub.name }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden px-4 py-2 bg-primary text-second rounded-lg hover:bg-primary/90 transition-all"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Mega Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-second/95 backdrop-blur-md shadow-md p-4 absolute top-28 left-0 w-full"
    >
      <ul class="overflow-y-auto max-h-[70vh]">
        <li v-for="(menuItem, index) in menuItems" :key="menuItem.name" class="p-2 border-b">
          <div class="flex justify-between items-center">
            <RouterLink :to="menuItem.link" class="block text-gray-700 hover:text-primary">{{ menuItem.name }}</RouterLink>
            <button
              v-if="menuItem.submenu"
              @click="toggleSubmenu(index)"
              class="p-2 text-gray-500 hover:text-primary"
            >
              {{ openSubmenus[index] ? '▲' : '▼' }}
            </button>
          </div>
          <div
            v-if="menuItem.submenu"
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :style="{
              maxHeight: openSubmenus[index] ? `${menuItem.submenu.length * 40}px` : '0px',
            }"
          >
            <ul class="pl-4 mt-2">
              <li v-for="sub in menuItem.submenu" :key="sub.name" class="p-1">
                <RouterLink :to="sub.link" class="block text-gray-600 hover:text-primary">{{ sub.name }}</RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { name: 'Ana Sayfa', link: '/' },
  {
    name: 'Hizmet Verdiğimiz Ülkeler',
    link: '/',
    submenu: [
      { name: 'Almanya', link: '/' },
      { name: 'İngiltere', link: '/' },
      { name: 'Fransa', link: '/' },
      { name: 'Amerika', link: '/' },
      { name: 'Belçika', link: '/' },
      { name: 'Bulgaristan', link: '/' },
      { name: 'İspanya', link: '/' },
      { name: 'Malta', link: '/' },
      { name: 'İtalya', link: '/' },
      { name: 'İrlanda', link: '/' },
      { name: 'Portekiz', link: '/' },
      { name: 'Hollanda', link: '/' },
      { name: 'Yunanistan', link: '/' },
      { name: 'Polonya', link: '/' },
      { name: 'Lüksemburg', link: '/' },
      { name: 'Romanya', link: '/' },
      { name: 'Estonya', link: '/' },
      { name: 'Litvanya', link: '/' },
      { name: 'Norveç', link: '/' },
      { name: 'Güney Kore', link: '/' },
      { name: 'Danimarka', link: '/' },
      { name: 'Kanada', link: '/' },
    ],
  },
  { name: 'Nasıl Vize Alırım?', link: '/how-can-i-get-visa' },
  {
    name: 'Diğer Bilgilendirmeler',
    link: '/',
    submenu: [
      { name: 'Hakkımızda', link: '/about' },
      { name: 'Sunduğumuz Avantajlar', link: '/advantages' },
      { name: 'Tır Şoförü Vizesi', link: '/truck-visa' },
      { name: 'Sıkça Sorulan Sorular', link: '/favorite-questions' },
    ],
  },
  { name: 'Başvuru Yap', link: '/order-visa' },
  { name: 'Kurumsal İletişim', link: '/corporation-feedback' },
])

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const openSubmenus = ref({})
const toggleSubmenu = (index) => {
  openSubmenus.value[index] = !openSubmenus.value[index]
}
</script>

<style scoped>
/* Animasyon için ekstra stil */
.transition-all {
  transition-property: all;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-in-out {
  transition-timing-function: ease-in-out;
}
.overflow-hidden {
  overflow: hidden;
}
</style>
