<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/' },
  { name: 'Services', link: '/' },
  { name: 'Blog', link: '/' },
  { name: 'Contact', link: '/' },
])
</script>
<template>
  <div
    class="fixed top-2 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-16 flex md:hidden bg-second/50 backdrop-blur-md z-50 rounded-full py-2 px-4 justify-center items-center transition-all duration-300 ease-in-out"
  >
    <img
      src="@/assets/images/logo/logo.png"
      class="w-20 md:w-24 transition-transform duration-300 ease-in-out hover:scale-110"
      alt="Logo"
    />
  </div>
  <div
    class="fixed top-0 w-full p-2 md:flex hidden justify-between items-center bg-second/50 backdrop-blur-md"
  >
    <!-- logo start  -->
    <div class="w-1/3">
      <img src="@/assets/images/logo/logo.png" class="w-28" alt="" />
    </div>
    <!-- content start  -->
    <div class="w-1/3">
      <ul class="flex justify-around">
        <li v-for="menuItem in menuItems" class="uppercase text-sm m-2" :key="menuItem">
          <RouterLink
            :to="menuItem.link"
            class="p-2 hover:bg-primary hover:text-second transition-all rounded-4xl"
          >
            {{ menuItem.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- content start  -->
    <div class="flex justify-end w-1/3 items-center">
      <!-- menu button  -->
      <RouterLink
        to="/contact"
        class="p-2 bg-primary flex items-center text-second shadow-xl hover:bg-second hover:text-primary transition-all font-bold rounded-full"
        >Get An Appointment <ion-icon name="arrow-forward-outline"></ion-icon
      ></RouterLink>
    </div>
  </div>
</template>
