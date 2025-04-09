

<template>
  <div
    class="fixed top-0 w-full h-20 md:h-28 flex justify-around items-center px-4 bg-second/80 backdrop-blur-md shadow-sm z-50 border-b border-primary/20"
  >
    <div class="max-w-6xl w-full mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div>
        <RouterLink to="/" class="flex items-center" @click="closeMenu">
          <img src="@/assets/images/logo/logo.png" class="w-20 md:w-28" alt="Mave JM Logo" />
        </RouterLink>
      </div>

      <!-- Desktop Mega Menu -->
      <nav class="hidden md:flex space-x-2 lg:space-x-4">
        <div v-for="(menuItem, index) in menuItems" :key="menuItem.name" class="relative group">
          <RouterLink
            :to="menuItem.link"
            class="text-xs lg:text-sm px-3 py-2 hover:bg-primary hover:text-second transition-all duration-200 rounded-lg font-medium"
            active-class="bg-primary text-second"
          >
            {{ menuItem.name }}
          </RouterLink>

          <!-- Dropdown Menu -->
          <div
            v-if="menuItem.submenu"
            class="absolute left-0 mt-0 w-106 bg-second/95 backdrop-blur-md shadow-xl rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top transform scale-y-95 group-hover:scale-y-100"
          >
            <ul class="space-y-1 w-full flex flex-col-4 flex-row-4 flex-wrap">
              <li
                v-for="sub in menuItem.submenu"
                :key="sub.name"
                class="p-2 hover:bg-primary/10 rounded-md transition-colors duration-150"
              >
                <RouterLink
                  :to="sub.link"
                  class="block text-sm text-gray-700 hover:text-primary"
                  active-class="text-primary font-medium"
                >
                  {{ sub.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Mega Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-second/98 backdrop-blur-lg shadow-lg fixed top-20 left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto pb-8"
        @click.self="closeMenu"
      >
        <ul class="divide-y divide-primary/10">
          <li v-for="(menuItem, index) in menuItems" :key="menuItem.name" class="px-4">
            <div class="flex justify-between items-center py-3">
              <RouterLink
                :to="menuItem.link"
                class="block text-gray-800 hover:text-primary font-medium"
                @click="closeMenu"
                active-class="text-primary"
              >
                {{ menuItem.name }}
              </RouterLink>
              <button
                v-if="menuItem.submenu"
                @click.stop="toggleSubmenu(index)"
                class="p-2 text-gray-500 hover:text-primary rounded-full"
                :aria-expanded="openSubmenus[index]"
                :aria-label="`Toggle ${menuItem.name} submenu`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 transform transition-transform duration-200"
                  :class="{ 'rotate-180': openSubmenus[index] }"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="max-h-0 opacity-0"
              leave-to-class="max-h-0 opacity-0"
            >
              <div
                v-if="menuItem.submenu && openSubmenus[index]"
                class="overflow-hidden pl-4 space-y-2"
              >
                <RouterLink
                  v-for="sub in menuItem.submenu"
                  :key="sub.name"
                  :to="sub.link"
                  class="block py-2 text-gray-600 hover:text-primary pl-4 border-l-2 border-primary/20 hover:border-primary/50 transition-colors"
                  @click="closeMenu"
                  active-class="text-primary border-primary/70 font-medium"
                >
                  {{ sub.name }}
                </RouterLink>
              </div>
            </Transition>
          </li>
        </ul>
        
        <!-- Contact Info in Mobile Menu -->
        <div class="mt-8 px-6 pt-4 border-t border-primary/10">
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            İletişim
          </h3>
          <div class="space-y-2">
            <a
              href="tel:4915122407050"
              class="flex items-center text-gray-700 hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +49 151 224 070 50
            </a>
            <a
              href="mailto:info@mave-jm.com"
              class="flex items-center text-gray-700 hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@mave-jm.com
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { name: 'ANA SAYFA', link: '/' },
  {
    name: 'ÜLKELER',
    submenu: [
             { name: 'Almanya', link: '/germany' },
      { name: 'İngiltere', link: '/england' },
      { name: 'Fransa', link: '/french' },
      { name: 'Amerika', link: '/america' },
      { name: 'Belçika', link: '/belgium' },
      { name: 'Bulgaristan', link: '/bulgaria' },
      { name: 'İspanya', link: '/spanish' },
      { name: 'Malta', link: '/malta' },
      { name: 'İtalya', link: '/italy' },
      { name: 'İrlanda', link: '/irland' },
      { name: 'Portekiz', link: '/portugal' },
      { name: 'Hollanda', link: '/holland' },
      { name: 'Yunanistan', link: '/greece' },
      { name: 'Polonya', link: '/poland' },
      { name: 'Lüksemburg', link: '/luxemburg' },
      { name: 'Romanya', link: '/romania' },
      { name: 'Estonya', link: '/estonia' },
      { name: 'Litvanya', link: '/latvia' },
      { name: 'Norveç', link: '/norway' },
      { name: 'Güney Kore', link: '/kore' },
      { name: 'Danimarka', link: '/denmark' },
      { name: 'Kanada', link: '/canada' },
    ]
  },
  { name: 'VİZE REHBERİ', link: '/how-can-i-get-visa' },
  {
    name: 'BİLGİLER',
    link: '/info',
    submenu: [
      { name: 'Hakkımızda', link: '/about' },
      { name: 'Avantajlar', link: '/advantages' },
      { name: 'Tır Şoförü Vizesi', link: '/truck-visa' },
      { name: 'SSS', link: '/faq' }
    ]
  },
  { name: 'BAŞVURU', link: '/order-visa' },
  { name: 'İLETİŞİM', link: '/corporation-feedback' }
])

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  openSubmenus.value = {}
}

const openSubmenus = ref({})
const toggleSubmenu = (index) => {
  openSubmenus.value[index] = !openSubmenus.value[index]
  
  // Close other submenus when opening a new one
  if (openSubmenus.value[index]) {
    Object.keys(openSubmenus.value).forEach(key => {
      if (key !== index.toString()) {
        openSubmenus.value[key] = false
      }
    })
  }
}
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
  transition-property: all;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

/* Improve scrollbar in mobile menu */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: rgba(168, 99, 50, 0.1);
}
::-webkit-scrollbar-thumb {
  background: rgba(168, 99, 50, 0.3);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 99, 50, 0.5);
}
</style>