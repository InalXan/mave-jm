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
  <div class="fixed top-0 w-full p-2 md:flex hidden justify-between items-center">
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
