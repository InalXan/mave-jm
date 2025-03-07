<template>
  <div class="fixed top-0 w-full h-28 flex justify-around items-center p-4 bg-second/50 backdrop-blur-md z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div>
        <img src="@/assets/images/logo/logo.png" class="w-28" alt="Logo" />
      </div>

      <!-- Mega Menu -->
      <nav class="hidden md:flex">
        <div v-for="(menuItem, index) in menuItems" :key="menuItem.name" class="relative group">
          <RouterLink
            :to="menuItem.link"
            class="uppercase text-sm p-2 hover:bg-primary hover:text-second transition-all rounded-lg"
          >
            {{ menuItem.name }}
          </RouterLink>
          <div
            v-if="menuItem.submenu"
            class="absolute left-0 mt-2 bg-second/50 backdrop-blur-md shadow-lg rounded-lg p-4 hidden group-hover:block"
          >
            <ul>
              <li
                v-for="sub in menuItem.submenu"
                :key="sub.name"
                class="p-2 w-92 hover:bg-gray-200 rounded-md"
              >
                <RouterLink :to="sub.link">{{ sub.name }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden px-4 py-2 bg-primary text-second rounded-lg">
        ☰
      </button>
    </div>

    <!-- Mobile Mega Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-second/50 backdrop-blur-md shadow-md p-4 absolute top-28 left-0 w-full"
    >
      <ul class="overflow-y-auto max-h-[70vh]"> <!-- Kaydırma için max-height ve overflow-y ekledik -->
        <li v-for="(menuItem, index) in menuItems" :key="menuItem.name" class="p-2 border-b">
          <div class="flex justify-between items-center">
            <RouterLink :to="menuItem.link" class="block">{{ menuItem.name }}</RouterLink>
            <button v-if="menuItem.submenu" @click="toggleSubmenu(index)" class="p-2">
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
                <RouterLink :to="sub.link" class="block">{{ sub.name }}</RouterLink>
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
    name: 'Hizmet verdiğimiz ülkeler',
    link: '/',
    submenu: [
      { name: 'Almanya', link: '/' },
      { name: 'İngiltere', link: '/' },
      { name: 'Fransa', link: '/' },
      { name: 'Amerika', link: '/' },
      { name: 'Belçika', link: '/' },
      { name: 'Bulgaristan', link: '/' },
      { name: 'Ispanya', link: '/' },
      { name: 'Malta', link: '/' },
      { name: 'Bulgaristan', link: '/' },
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
      { name: 'Güney kore', link: '/' },
      { name: 'Danimarka', link: '/' },
      { name: 'Kanada', link: '/' },
    ],
  },
  { name: 'Nasıl vize alırım?', link: '/' },
  {
    name: 'Diğer Bilgilendirmeler',
    link: '/',
    submenu: [
      { name: 'Hakkımızda', link: '/about' },
      { name: 'Sunduğumuz avantajlar', link: '/' },
      { name: 'Nasıl vize alırım ?', link: '/about' },
      { name: 'Tırcı (Şöför) vizesi', link: '/' },
      { name: 'İletişim', link: '/' },
      { name: 'Sıkca sorulan sorular', link: '/' },
    ],
  },
  { name: 'Başvuru yap', link: '/' },
  { name: 'Kurumsal iletişim', link: '/corporative-contact' },
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